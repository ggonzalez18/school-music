<template>
  <div>
 <v-bottom-navigation
    class="pt-5 yellow darken-2"
      :value="activeBtn" grow color="orange darken-4" dark src="https://royalschoolofmusic.es/wp-content/uploads/2019/09/notes-de-musique-partition-1280x720.jpg">
      <v-btn class="pb-5" to="/">
        <span>Home</span><v-icon large>mdi-music</v-icon>
      </v-btn>
      <!-- <v-btn class="pb-5" to="/search">
        <span>Buscar</span>
        <v-icon>mdi-magnify</v-icon>
      </v-btn> -->
    </v-bottom-navigation>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeBtn: 0,
        }
  },
}
</script>

<style>

</style>