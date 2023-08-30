<template>
    <div id="card">
        <ul>
            <img id="image" src="../assets/img/aigo.jpg" />
            <div>{{ fish_name }}</div>
            <div id="tag" v-if="isPoisonous == true">☠️</div>
            <div id="tag" v-else>無毒</div>
        </ul>
    </div>
</template>

<script>
export default{
    props:{
        image_url:{
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
    }
    
}
</script>

<style scoped>

#card{
    width: 371px; 
    height: 342px; 
    left: 0px; 
    top: 0px; 
    position: relative; 
    background: #F5F5F5; 
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); 
    border-radius: 30px;
}
#tag{
    width: 61px; 
    height: 26px; 
    left: 194px; 
    top: 308px; 
    position: relative; 
    background: #18A0FB; 
    border-radius: 25px;
}

#image{
    width: 320px; 
    height: 225px; 
    left: 23px; 
    top: 28px; 
    position: relative;
}

</style>