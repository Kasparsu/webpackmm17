<template>
    <div>
        <div class="section search-bar">
            <input v-model="searchText" class="input" type="text" @input="debounce">
            <button class="button" @click="$emit('submit', searchText)">Submit</button>
        </div>
        <div class="section suggestions" v-if="results.length!=0">
            <ul>
                <li @click="searchText=option" v-for="option in options">{{option}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Search",
        props: ['options'],
        data(){
          return {
              searchText: '',
              timeout: null
          }
        },
        methods: {
            debounce(){
                clearTimeout(this.timeout);
                this.timeout = setTimeout(()=> {
                    if(this.searchText != '') {
                        this.$emit('changed', this.searchText)
                    }
                },1000);

            }
        },
        computed: {
            results(){
                return this.options.filter((option)=> {
                    if(this.searchText.length){
                        let sub = option.substr(0, this.searchText.length);
                        return sub.toLowerCase() == this.searchText.toLowerCase();
                    }
                    return false;
                });
            }
        }
    }
</script>

<style scoped>
    .search-bar {
        display: flex;
        padding-bottom: 0;
    }
    .suggestions {
        padding-top: 0;
    }
    .suggestions ul {
        border-style: solid;
        border-color: #dbdbdb;
        border-radius: 4px;
        border-top: none;
        border-top-left-radius: 0;
        border-top-right-radius: 0;
    }

</style>