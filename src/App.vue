<template>
  <v-app color="grey lighten-4">
    <Navbar />
    <v-content class="mx-4 mb-2 mt-2">
      <!-- <Leipzig /> -->
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar';
//import Leipzig from '@/components/Leipzig';

export default {
  name: 'App',

  components: {
    Navbar,
    //Leipzig,
  },

  data: () => ({
    //
  }),
};
</script>
