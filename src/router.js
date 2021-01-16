import { createRouter, createWebHistory } from 'vue-router';

import CoachDetail from './pages/coaches/CoachesDetails.vue';
import CoachesList from './pages/coaches/CoachesList.vue';
import CoachRegistration from './pages/coaches/CoachesRegister.vue';
import ContactCoach from './pages/requests/ContactCoach.vue';
import RequestsRecieved from './pages/requests/RequestRecieved.vue';
import NotFound from './pages/NotFound.vue';
import UserAuth from './pages/auth/UserAuth.vue';
import store from './store/index.js';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/coaches' },
        { path: '/coaches', component: CoachesList },
        {
            path: '/coaches/:id',
            component: CoachDetail,
            // props true asegura que el placeholder dinamico (:id) se pasara como prop al componente "coachDetail"
            props: true,
            children: [
                { path: 'contact', component: ContactCoach }, // /coaches/c1/contact
            ]
        },
        // los nombres del meta 'requiresAuth' son opcionales.
        { path: '/register', component: CoachRegistration, meta: { requiresAuth: true } },
        { path: '/requests', component: RequestsRecieved, meta: { requiresAuth: true } },
        { path: '/auth', component: UserAuth, meta: { requiresUnauth: true } },
        { path: '/:notFound(.*)', component: NotFound }
    ]
});

router.beforeEach(function (to, _, next) {
    if (to.meta.requiresAuth && !(store.getters.isAutheticated)) {
        console.log('going to auth');
        next('/auth');
    } else if (to.meta.requiresUnauth && store.getters.isAutheticated) {
        next('/coaches');
    } else {
        next();
    }
})

export default router;
