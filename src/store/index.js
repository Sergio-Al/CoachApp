import {createStore} from 'vuex';

import coachesModule from './modules/coaches/index.js';
import requestModule from './modules/requests/index.js';


const store = createStore({
    modules: {
        coaches: coachesModule,
        requests: requestModule
    },
    state() {
        return {
            // esto significa que somos el coach 'c3' que estamos esperando sus requests 
            userId: 'c3'
        };
    },
    getters: {
        userId(state){
            return state.userId;
        }
    }
});

export default store;