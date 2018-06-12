import Home from './components/Home/Home.vue';
import Contact from './components/Contact/Contact.vue';
// Showcase
import ShoppingCart from './components/Showcase/ShoppingCart/ShoppingCart';
import CartItem from './components/Showcase/ShoppingCart/Cart';
// Experience
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
        path: '/showcase/shopping-cart/cart',
        component: CartItem
    },
    {
        path: '/experiences',
        component: Experience
    }
]