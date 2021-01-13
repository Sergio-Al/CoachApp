import { createRouter, createWebHistory } from 'vue-router';

import CoachDetail from './pages/coaches/CoachesDetails.vue';
import CoachesList from './pages/coaches/CoachesList.vue';
import CoachRegistration from './pages/coaches/CoachesRegister.vue';
import ContactCoach from './pages/requests/ContactCoach.vue';
import RequestsRecieved from './pages/requests/RequestRecieved.vue';
import NotFound from './pages/NotFound.vue';

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
        { path: '/register', component: CoachRegistration },
        { path: '/requests', component: RequestsRecieved },
        { path: '/:notFound(.*)', component: NotFound }
    ]
});

export default router;
