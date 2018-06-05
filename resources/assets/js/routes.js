import Home from './components/Home/Home.vue';
import Contact from './components/Contact/Contact.vue';
import ShoppingCart from './components/Showcase/ShoppingCart/ShoppingCart';
import Experience from './components/Experience/ExperienceIndex';

export default [
    {
        path: '/',
        component: Home
    },
    {
        path: '/contact',
        component: Contact
    },
    {
        path: '/showcase/shopping-cart',
        component: ShoppingCart
    },
    {
        path: '/experiences',
        component: Experience
    }
]