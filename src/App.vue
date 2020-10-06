<template>
  <v-app>
    <nav-bar-comp></nav-bar-comp>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import NavBarComp from './components/NavBarComp';

export default {
  name: 'App',

  components: {
    NavBarComp,
  },

  data: () => ({
    //
  }),
};
</script>
