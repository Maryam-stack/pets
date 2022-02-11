<template>
  <v-app>
    <v-main>
      <app-header/>
      <btn-add/>
        <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import appHeader from './components/header.vue';
import btnAdd from './components/new.vue';
//import petSearch from './components/searchpets.vue'
//import addNew from './components/add.vue';
//import appGet from './components/get.vue';

export default {
  name: 'App',

  components: {
    //appGet,
    appHeader,
    btnAdd,
    //petSearch,
    //addNew,
  },

  data: () => ({
    //
  }),
};
</script>
