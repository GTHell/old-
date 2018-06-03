import Home from './components/Home/Home.vue';
import Contact from './components/Contact/Contact.vue';
import ShoppingCart from './components/ShoppingCart/ShoppingCart.vue';

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
    }
]