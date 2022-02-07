<template>
  <v-app>
    <v-main>
      <app-header/>
      <v-col class="text-right">
        <v-btn
          outlined
          rounded
        >
        Add New
        </v-btn>
        </v-col>
        <router-view></router-view>
        <!--<app-get/>
      <add-New/>
     <pet-Search/>-->
    </v-main>
  </v-app>
</template>

<script>
import appHeader from './components/header.vue';
//import petSearch from './components/searchpets.vue'
//import addNew from './components/add.vue';
//import appGet from './components/get.vue';

export default {
  name: 'App',

  components: {
    //appGet,
    appHeader,
    //petSearch,
    //addNew,
  },

  data: () => ({
    //
  }),
};
</script>
