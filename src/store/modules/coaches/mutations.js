export default {
    // este es el componente que se ejecuta al ser llamado desde el exterior, actions es solo como un puente entre ambos.
    registerCoach(state, payload) {
        state.coaches.push(payload);
    },
    setCoaches(state, payload) {
        state.coaches = payload;
    }

};