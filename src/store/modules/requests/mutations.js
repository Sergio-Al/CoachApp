export default {
    addRequest(state, payload) {
        state.requests.push(payload);
    },
    sendRequests(state, payload){
        state.requests = payload;
    }
}