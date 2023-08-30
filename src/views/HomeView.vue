<template>
  <div class="home" id="box">
    <div v-for="(fish, index) in fishes"  :key="index" >
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
        id:1,
        img_url:"../assets/img/aigo.jpg",
        name:"アイゴ",
        isPoisonous: true
        },
        {
        id:2,
        img_url:"../assets/img/aigo.jpg",
        name:"アイゴ",
        isPoisonous: true
      },
      {
        id:3,
        img_url:"../assets/img/aigo.jpg",
        name:"アイゴ",
        isPoisonous: true
      },
      {
        id:4,
        img_url:"../assets/img/aigo.jpg",
        name:"アイゴ",
        isPoisonous: true
        },
        {
        id:5,
        img_url:"../assets/img/aigo.jpg",
        name:"アイゴ",
        isPoisonous: true
      },
      {
        id:6,
        img_url:"../assets/img/aigo.jpg",
        name:"アイゴ",
        isPoisonous: true
      },
      {
        id:7,
        img_url:"../assets/img/aigo.jpg",
        name:"アイゴ",
        isPoisonous: true
        },
        {
        id:8,
        img_url:"../assets/img/aigo.jpg",
        name:"アイゴ",
        isPoisonous: true
      },
      {
        id:9,
        img_url:"../assets/img/aigo.jpg",
        name:"アイゴ",
        isPoisonous: true
      },
      { 
        id:10,
        img_url:"../assets/img/aigo.jpg",
        name:"マグロ",
        isPoisonous: false
        },
        {
        id:11,
        img_url:"../assets/img/aigo.jpg",
        name:"アイゴ",
        isPoisonous: true
      },
      {
        id:12,
        img_url:"../assets/img/aigo.jpg",
        name:"アイゴ",
        isPoisonous: true
      }
    ]
  }
    }
  }

</script>

<style scoped>
#box{
  display: flex; /* flexbox */
  flex-wrap: wrap; /* 折返し指定 */
  gap: 20px 20px; /* 余白 */
  justify-content: center;
}



</style>
