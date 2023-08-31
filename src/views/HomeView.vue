<template>
  <div id="box">
    <div v-for="(fish, index) in fishes"  :key="index" >
    <fish-card :id="fish.id" :image_name="fish.img_name" :fish_name="fish.name" :isPoisonous="fish.isPoisonous"></fish-card>
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
        img_name:"assets/img/aigo.jpg",
        name:"アイゴ",
        isPoisonous: true
        },
        {
        id:2,
        img_name:"assets/img/aigo.jpg",
        name:"アイゴ",
        isPoisonous: true
        },
        {
        id:3,
        img_name:"assets/img/aigo.jpg",
        name:"アイゴ",
        isPoisonous: true
        },
        {
          id:4,
          img_name:"assets/img/aigo.jpg",
          name:"マグロ",
          isPoisonous:false
        },
        {
        id:5,
        img_name:"assets/img/aigo.jpg",
        name:"アイゴ",
        isPoisonous: true
        },
        {
          id:6,
          img_name:"assets/img/aigo.jpg",
          name:"マグロ",
          isPoisonous:false
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
  background-image: url("@/assets/img/sea.jpeg");
  
}



</style>
