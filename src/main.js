require('./main.scss');
import Vue from 'vue';

import Button from "./Button.vue";
import Modal from "./Modal.vue";
import Tabs from "./Tabs.vue";
import Carousel from "./Carousel.vue";
import Search from "./Search.vue";

Vue.component('my-button', Button);
Vue.component('modal', Modal);
Vue.component('tabs', Tabs);
Vue.component('carousel', Carousel);
Vue.component('search', Search);

let app = new Vue({
    el: '#app',
    data: {
        images: [
            'https://picsum.photos/id/163/128/128',
            'https://picsum.photos/id/264/128/128',
            'https://picsum.photos/id/363/128/128',
            'https://picsum.photos/id/464/128/128',
            'https://picsum.photos/id/563/128/128',
            'https://picsum.photos/id/663/128/128',
            'https://picsum.photos/id/765/128/128',
            'https://picsum.photos/id/863/128/128',
            'https://picsum.photos/id/965/128/128',
            'https://picsum.photos/id/1063/128/128',
        ]
    }
});
