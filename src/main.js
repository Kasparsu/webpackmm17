require('./main.scss');
import Vue from 'vue';

import Button from "./Button.vue";
import Modal from "./Modal.vue";

Vue.component('my-button', Button);
Vue.component('modal', Modal);

let app = new Vue({
    el: '#app',
    data: {
        isOpen: false
    }
});
