export default {
    coaches(state) {
        return state.coaches;
    },
    hasCoaches(state){
        return state.coaches && state.coaches.length > 0;
    },
    // pasamos valores nulos '_' represento a "state" y '_2' represento a "rootState".
    isCoach(_, getters, _2, rootGetters) {
        const coaches = getters.coaches;
        const userId = rootGetters.userId;
        // some devolvera true si al menos un coach id de los coaches es igual al requerido userId.
        return coaches.some(coach => coach.id === userId);
    }
};