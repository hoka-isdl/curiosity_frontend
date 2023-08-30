<template>
  <div class="home">
    <div v-for="(fish, index) in fishes"  :key="index">
    <fish-card :image_url="fish.img_url" :fish_name="fish.name" :isPoisonous="fish.isPoisonous"></fish-card>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import FishCard from '../components/FishCard.vue'
export default {
  name: 'HomeView',
  components: {
    FishCard
  },

  data(){
    return{
      fishes: [
        {
        img_url:"../assets/img/logo.png",
        name:"アイゴ",
        isPoisonous: true
        },
        {
        img_url:"../assets/img/aigo.jpg",
        name:"アイゴ",
        isPoisonous: true
      }
    ]
  }
    }
  }

</script>

<style>
</style>
