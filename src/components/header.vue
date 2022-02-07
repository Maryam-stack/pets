<template>
  <div>
    <v-app-bar
      color="deep-purple"
      dark
    >
    <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title>{{tittle}}</v-toolbar-title>

    </v-app-bar>
    <v-navigation-drawer
     v-model="drawer"
      absolute
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        ><router-link to="appGet">
          <v-list-item>
            <v-list-item-title>Pets List</v-list-item-title>
          </v-list-item>
          </router-link>
          <router-link to="petSearch">
          <v-list-item>
            <v-list-item-title>Pets Search</v-list-item-title>
          </v-list-item>
          </router-link>
        </v-list-item-group>
      </v-list>
 </v-navigation-drawer>

    
  </div>

</template>
<script>
  export default {
    data: () => ({
      group: null,
      drawer: false,
      tittle: 'Pets List',
    }),
    
  }
</script>