require('./main.scss');
const axios = require('axios');

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
        options: []
    },
    methods:{
        searchMovies(query){
            axios.get('https://api.themoviedb.org/3/search/movie?api_key=<api-key-here>&language=en-US&query='+ query +'&page=1&include_adult=false').then(response => {
                this.options = response.data.results.map(movie => movie.original_title);
            })
        }
    }
});
