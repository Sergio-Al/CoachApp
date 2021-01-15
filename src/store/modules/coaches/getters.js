export default {
    coaches(state) {
        return state.coaches;
    },
    hasCoaches(state){
        return state.coaches && state.coaches.length > 0;
    },
    // pasamos valores nulos '_' represento a "state" y '_2' represento a "rootState"
    // ponemos de esta forma porque la funcion lo requiere, pero nosotros no trabajaremos con esos valores.
    isCoach(_, getters, _2, rootGetters) {
        const coaches = getters.coaches;
        const userId = rootGetters.userId;
        // some devolvera true si al menos un coach id de los coaches es igual al requerido userId.
        // some es una funcion nativa de javascript para mayor informacion se puede acceder por internet.
        return coaches.some(coach => coach.id === userId);
    },
    shouldUpdate(state) {
        const lastFetch = state.lastFetch;
        if(!lastFetch) {
            return true;
        }
        const currentTimeStamp = new Date().getTime();
        // devolvera true si paso mas de un minuto y falso si no es asi.
        return (currentTimeStamp - lastFetch) / 1000 > 60;
    }
};