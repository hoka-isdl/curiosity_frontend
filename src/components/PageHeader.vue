<template>
  <div id="header">
    <h1>Curiosity図鑑</h1>
    <div id="menu-btn" v-on:click="toggle">
    <img src="../assets/img/hmb.png" style="height: 60px;">
    </div>
   <div id="overlay" v-show="isMenuVisible">
    <div id="menu" v-bind:class="{'is-active' : isMenuVisible }">
      <div id="menu__item" v-on:click="gotoTopPage" @click="toggle">TOP</div>
    </div>
  </div>
</div>
</template>

<script>
export default{
  data(){
    return{
      isMenuVisible:false
    }
  },
  methods:{
    toggle(){
      this.isMenuVisible = !this.isMenuVisible
    },
    gotoTopPage(){
            this.$router.push({ path: '/'});
        }
  }
}
</script>
<style scoped>

#header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  background-color: #0070e8;
  color: white;
  text-align: center;
  width: 100%;
  box-sizing: border-box; 
}

#overlay{

  z-index:1;
  position:fixed;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background-color:rgba(0,0,0,0.5);
  align-items: center;
  justify-content: center;

}
/*----------------------------
* メニュー開閉ボタン
*----------------------------*/
#menu-btn{
  position: absolute;
  top: 50px;
  right: 40px;
  z-index: 3;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #0070e8;
  color: #fff;
  
}

/*----------------------------
* メニュー本体
*----------------------------*/
#menu{
  position: fixed;
  top: 0;
  right: 0;
  z-index: 2;
  width: 20rem;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #0070e8;;
}
#menu__item{
  width: 100%;
  height: auto;
  padding: .5em 1em;
  text-align: center;
  color: #fff;
  box-sizing: border-box;
}

/*----------------------------
* アニメーション部分
*----------------------------*/

/* アニメーション前のメニューの状態 */
#menu{
  transform: translateX(100vw);
  transition: all .3s linear;
}
/* アニメーション後のメニューの状態 */
#menu.is-active{
  transform: translateX(0);
  transition: .4s;
}
</style>