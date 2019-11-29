<template>
    <div>
        <div class="section search-bar">
            <input v-model="searchText" class="input" type="text" @input="filter">
            <button class="button" @click="$emit('submit')">Submit</button>
        </div>
        <div class="section suggestions" v-if="results.length!=0">
            <ul>
                <li v-for="option in results">{{option}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Search",
        data(){
          return {
              searchText: ''
          }
        },
        methods: {
            filter(){

            }
        },
        computed: {
            results(){
                let options = ['apple', 'pineapple', 'pear', 'orange', 'cherry', 'mango', 'watermelone'];
                return options.filter((option)=> {
                    if(this.searchText.length){
                        let sub = option.substr(0, this.searchText.length);
                        return sub == this.searchText;
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