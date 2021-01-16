export default {
    userId(state) {
        return state.userId;
    },
    token(state) {
        return state.token;
    },
    isAutheticated(state) {
        console.log(!!state.token);
        return !!state.token;
    }
}