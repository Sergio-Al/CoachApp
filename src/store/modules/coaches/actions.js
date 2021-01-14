export default {
    async registerCoach(context, data) {
        const userId = context.rootGetters.userId;
        const coachData = {
            firstName: data.first,
            lastName: data.last,
            description: data.desc,
            hourlyRate: data.rate,
            areas: data.areas
        };

        // fetch es una funcion nativa.
        const response = await fetch(`https://vue-http-demo-45893-default-rtdb.firebaseio.com/coaches/${userId}.json`, {
            // PUT sobreescribira si ya existe o creara si no existe.
            method: 'PUT',
            body: JSON.stringify(coachData)
        });

        // const responseData = await response.json();

        if(!response.ok) {
            // error ...
        }



        context.commit('registerCoach', {
            ...coachData,
            id: userId
        });
    }

};