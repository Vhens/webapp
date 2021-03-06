import Vue from 'vue';
import VueRouter from 'vue-router';

import goods from 'components/goods/Goods.vue';
import ratings from 'components/ratings/Ratings.vue';
import seller from 'components/seller/Seller.vue';
Vue.use(VueRouter);

const routes=[
    {
        path:'/goods',
        component:goods
    },
    {
        path:'/ratings',
        component:ratings
    },
    {
        path:'/seller',
        component:seller
    }
];
const router=new VueRouter({
    mode:'history',
    routes
});

export default router;
