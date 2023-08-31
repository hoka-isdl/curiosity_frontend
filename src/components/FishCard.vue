<template>
    <div class="card" 
        @click="fishdetail()"
        @mouseover="toggleSelection"
        @mouseout="toggleSelection" 
        :class="{'hover': isSelected}">
        <ul>
            <div class="image-board"><img class="image" :src="require(`../${image_name}`)" :class="{'hover': isSelected}"/></div><br>
            <div class="name" :class="{'hover': isSelected}">{{ fish_name }}</div>
            <div class="tag-T" v-if="isPoisonous == true" :class="{'hover': isSelected}">☠️</div>
            <div class="tag-F" v-else :class="{'hover': isSelected}">☺️</div>
        </ul>
    </div>
</template>

<script>
export default{
    props:{
        id:{
            type:Number,
            required:true
        },
        image_name:{
            type:String,
            required:true
        } ,
        fish_name:{
            type:String,
            required:true
        },
        isPoisonous:{
            type:Boolean,
            required:true
        }
    },
    data() {
        return {
            isSelected:false
        }
    },
    methods:{
        fishdetail: function(){
            this.$router.push({ path: '/fishdetail/' + this.id});
        },
        toggleSelection(){
            this.isSelected = !this.isSelected
        }
    }
}
</script>

<style scoped>

.card{
    width: 371px; 
    height: 342px; 
    left: 0px; 
    top: 0px; 
    position: relative; 
    background: #F5F5F5; 
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); 
    border-radius: 30px;
    text-align: center;
}
.tag-F{
    width: 61px; 
    height: 26px; 
    left: 270px; 
    top: 300px; 
    position: absolute; 
    background: #18A0FB; 
    border-radius: 25px;
    text-align: center;
}

.tag-T{
    width: 61px; 
    height: 26px; 
    left: 270px; 
    top: 300px; 
    position: absolute; 
    background: #fd1515; 
    border-radius: 25px;
    text-align: center;
}


.image{
    width: 320px; 
    height: 225px; 
    left: 23px; 
    top: 28px; 
    position: absolute;
 
}

.name{
    width: 218px; 
    height: 46px; 
    left: 37px; 
    top: 256px; 
    position: absolute; 
    color: rgb(36, 36, 36); 
    font-size: 32px; 
    font-family: Avenir, Helvetica, Arial, sans-serif;
    font-weight: 400; 
    word-wrap: break-word
}

.image-board{
    width: 320px; 
    height: 225px; 
    overflow: hidden;
}

.name.hover{
    transition: .4s;
    left: 40px; 
    top: 265px; 
}
.card.hover{
  width:380px;
  height: 360px;
  transition:.4s;
  background-color: rgba(105, 175, 255, 0.485);
}

.image.hover{
    left: 30px; 
    top: 32px; 
    transition:.4s;
    transform:scale(1.03,1.03); 
    opacity: 0.6;
}

.tag-F.hover{
    opacity: 0.6;
    left: 280px; 
    top: 310px;
    transition:.4s;
}

.tag-T.hover{
    opacity: 0.6;
    left: 280px; 
    top: 310px;
    transition:.4s;
}
</style>