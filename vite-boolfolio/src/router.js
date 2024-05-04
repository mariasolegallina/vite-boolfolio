import { createRouter, createWebHistory } from 'vue-router';

// importazione dei componenti utilizzati come pagina
import index from './pages/projects/index.vue';
import SingleProject from './pages/projects/SingleProject.vue'
import ContactForm from './components/ContactForm.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        //questo array  contiene tutte le rotte  dell' applicazione
        {
            path: '/',
            name: 'projects',
            component: index
        },
        {
            path: '/projects/:id',
            name: 'single-project',
            component: SingleProject
        },
        {
            path: '/new-contact',
            name: 'new-contact',
            component: ContactForm
        }

    ]
});
export { router };