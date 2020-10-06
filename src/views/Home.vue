<template>
  <div class="home">
    <v-row>
      <v-col cols="4" v-for="(curso, index) in cursos" :key="index">
         <v-card class="mx-auto" max-width="344">
          <v-img :src="curso.img" height="300px"></v-img>
          <v-card-title>{{curso.title}}</v-card-title>
          <v-card-subtitle>{{curso.description}}</v-card-subtitle>
          <v-btn color="red darken-1" class="mb-5 ml-4" dark to="/depto/1">Buscar</v-btn>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Home',
  components: {
  },
  methods: {

  },
  computed: {
    ...mapState(['cursos'])
  }
}
</script>
