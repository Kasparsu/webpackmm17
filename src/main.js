require('./main.scss');
const axios = require('axios');

import Vue from 'vue';

import Button from "./Button.vue";
import Modal from "./Modal.vue";
import Tabs from "./Tabs.vue";
import Carousel from "./Carousel.vue";
import Search from "./Search.vue";

import Chat from "./Chat.vue";
import Message from "./Message.vue";
import MessageList from "./MessageList.vue";
import Textfield from "./Textfield.vue";
import Username from "./Username.vue";



Vue.component('my-button', Button);
Vue.component('modal', Modal);
Vue.component('tabs', Tabs);
Vue.component('carousel', Carousel);
Vue.component('search', Search);

Vue.component('chat', Chat);
Vue.component('message', Message);
Vue.component('message-list', MessageList);
Vue.component('textfield', Textfield);
Vue.component('username', Username);
let app = new Vue({
    el: '#app',
    data: {

    },
    methods:{

    }
});

