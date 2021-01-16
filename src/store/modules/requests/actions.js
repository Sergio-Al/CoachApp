export default {
    async contactCoach(context, payload){
        const newRequest = {
            userEmail: payload.email,
            message: payload.message
        };
        const response = await fetch(`https://vue-http-demo-45893-default-rtdb.firebaseio.com/requests/${payload.coachId}.json`, {
            method: 'POST',
            body: JSON.stringify(newRequest)
        })

        // necesitamos el id que firebase genere para que nosotros lo podamos usar localmente.
        // es por eso que esperamos la respuesta de firebase y lo almacenamos en responseData.
        const responseData = await response.json();

        if(!response.ok){
            const error = new Error(responseData.message || 'Failed to send Request.');
            throw error;
        }

        // name sera el id generado por firebase. esto sera para datos locales, no almacenando en el server.
        newRequest.id = responseData.name;
        newRequest.coachId = payload.coachId;

        // normalmente se pone el nombre al cual queremos aplicar en mutations.js
        context.commit('addRequest', newRequest);
    },
    async fetchRequests(context) {
        const coachId = context.rootGetters.userId;
        const token = context.rootGetters.token;
        const response = await fetch(`https://vue-http-demo-45893-default-rtdb.firebaseio.com/requests/${coachId}.json?auth=` + token);
        const responseData = await response.json();

        if(!response.ok) {
            const error = new Error(responseData.message || 'Failed to fetch requests.');
            throw error;
        }

        const requests = [];

        for(const key in responseData){
            const request = {
                id: key,
                coachId: coachId,
                userEmail: responseData[key].userEmail,
                message: responseData[key].message
            };
            requests.push(request);
        }

        // de esta forma pasaremos al state de request nuestros requests totales de firebase 
        // y preparados para ser renderizados en pantalla.
        context.commit('sendRequests', requests);
    }
}