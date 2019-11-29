<template>
    <div>
        <div class="tabs">
            <ul>
                <li
                        v-for="(el,index) in titles"
                        :class="{'is-active': active==index}"
                        @click="active=index"
                ><a>{{el}}</a></li>
            </ul>
        </div>
        <div v-for="(el,index) in content" class="section" :class="{'closed': active!=index}">
            {{el}}
        </div>
        <slot/>
    </div>
</template>

<script>
    export default {
        name: "Tabs",
        data(){
            return {
                active: 0,
                content: [],
                titles: []
            }
        },
        mounted() {
            let slots = this.$slots.default.filter(e => e.tag == 'div');
            this.content = slots.map(e => e.elm.lastChild.innerHTML);
            this.titles = slots.map(e => e.elm.firstChild.innerHTML);
            this.$slots.default = [];
        }

    }
</script>

<style scoped>
    .section{
        overflow: hidden;
        transition: all .5s ease-in-out;
        padding: 0;
        height: 50px;
    }
    .closed {
        height: 0;
        padding: 0;
    }
</style>