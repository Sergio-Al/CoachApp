export default {
    contactCoach(context, payload){
        const newRequest = {
            id: new Date().toISOString(),
            coachId: payload.coachId,
            userEmail: payload.email,
            message: payload.message
        };
        // normalmente se pone el nombre al cual queremos aplicar en mutations.js
        context.commit('addRequest', newRequest);
    }
}