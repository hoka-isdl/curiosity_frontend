<script>
export default {
  name: 'FishDetail',
  data() {
        return {
          showContent: false,

          status: 'ready',     // 状況
          recorder: null,     // 音声にアクセスする "MediaRecorder" のインスタンス
          audioData: [],      // 入力された音声データ
          audioExtension: '',  // 音声ファイルの拡張子
          audio: new Audio(require('../assets/audio/1693396146.webm')),
          url: '',
          imgstatus:false,
        }
    },
  methods:{
    openModal: function(){
      this.showContent = true
    },
    closeModal: function(){
      this.showContent = false
    },
    startRecording() {
      this.status = 'recording';
      this.audioData = [];
      this.recorder.start();
    },
    stopRecording() {
      this.recorder.stop();
      this.status = 'ready';
    },
    getExtension(audioType) {
      let extension = 'wav';
      const matches = audioType.match(/audio\/([^;]+)/);

      if(matches) {
          extension = matches[1];
      }
      return '.'+ extension;
    },
    start: function(){
      this.audio.play()
    }
  },
  mounted() {
    navigator.mediaDevices.getUserMedia({ audio: true })
    .then(stream => {

        this.recorder = new MediaRecorder(stream);
        this.recorder.addEventListener('dataavailable', e => {

            this.audioData.push(e.data);
            this.audioExtension = this.getExtension(e.data.type);

        });
        this.recorder.addEventListener('stop', () => {

            const audioBlob = new Blob(this.audioData);
            // console.log(Math.floor(Date.now() / 1000) + this.audioExtension);
            const url = URL.createObjectURL(audioBlob);
            this.imgstatus=true;
            this.url = url;
            // const url = "";
            let a = document.createElement('a');
            a.href = url;
            a.download = Math.floor(Date.now() / 1000) + this.audioExtension;
            document.body.appendChild(a);
            a.click();
            console.log(a);

        });
        this.status = 'ready';

    });
  }
}
</script>

<template>
  <div class="Group7" id="box" style="width: 100%; height: 739px; position: relative">
  <div class="Rectangle32" style="width: 100%; height: 739px; left: 0px; top: 0px; position: absolute; background: #F5F5F5; box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); border-radius: 30px"></div>
  <div class="Speakerphone" @click="openModal()" style="width: 400px; height: 89px; left: 90%; top: 35px; position: absolute">
    <img src="../assets/img/speakerphone.png">
    <!-- <div class="Icon" style="width: 72.75px; height: 66.75px; left: 12.12px; top: 11.12px; position: absolute; border: 1px #545F71 solid"></div> -->
  </div>
  <div class="name-text-group">
        <div class="name-text">
          <label class="label">名前：</label>
          <label class="label">アイゴ</label>
        </div>
        <div class="name-text">
          <label class="label">別名：</label>
          <label class="label">アイゴ・アイ・バリ・バリコ</label>
        </div>
        <div class="name-text">
          <label class="label">科目：</label>
          <label class="label">スズキ目アイゴ科</label>
        </div>
      </div>
  <!-- <div style="width: 640px; height: 44px; left: 440px; top: 54px; position: absolute; color: black; font-size: 32px; font-family: Inter; font-weight: 400; word-wrap: break-word">名前：アイゴ</div>
  <div style="width: 640px; height: 44px; left: 440px; top: 114px; position: absolute; color: black; font-size: 32px; font-family: Inter; font-weight: 400; word-wrap: break-word">別名：アイゴ・アイ・バリ・バリコ</div>
  <div style="width: 640px; height: 44px; left: 440px; top: 174px; position: absolute; color: black; font-size: 32px; font-family: Inter; font-weight: 400; word-wrap: break-word">科目：スズキ目アイゴ科</div> -->
  <div style="width: 640px; height: 44px; left: 10%; top: 310px; position: absolute; color: black; font-size: 32px; font-family: Inter; font-weight: 400; word-wrap: break-word">アイゴの特徴</div>
  <div class="Rectangle54" style="width: 90%; height: 327px; left: 90px; top: 370px; position: absolute; background: white; border: 0.50px black solid"></div>
  <img class="Image1" style="width: 400px; height: 250px; left: 25px; top: 23px; position: absolute" src="../assets/img/aigo.jpeg" />
</div>
<div id="overlay" v-show="showContent">
    <div id="content">
      <div id="block">
        <img src="../assets/img/doraemon.png" style="width: 200px; height: 200px;">
        <p>何が聞きたいかな？？？？？</p>
      </div>
      <div style="text-align: center;">
        <button class="soundbutton" v-if="status=='ready'" @click="startRecording">音声開始</button>
        <button class="soundbutton" v-if="status=='recording'" @click="stopRecording">音声終了</button>
        <!-- <audio v-if="status=='end'" controls>
          <a href={{ this.url }}> Download audio </a>
        </audio> -->
      </div>
      <audio :src="url" v-if="imgstatus" controls>
        <!-- <a href={{ this.url }}> Download audio </a> -->
      </audio>
      <button v-on:click="start()">Close</button>
    </div>
    
  </div>
</template>

<style scoped>
.soundbutton{
  display:inline-block;
}
p{
  top:100%;
  left:30%;
  font-size: 22px; 
}
#block{
  display: flex;
}
#content {
  z-index: 2;
  width: 50%;
  padding: 1em;
  background: #fff;
}
#overlay{
  z-index:1;
  position:fixed;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background-color:rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;

}
#box{
  display: flex;
  flex-wrap: flex;
  gap: 25px 20px;
  justify-content: center;
}
.flex {
  display: flex; /*横並び*/
}
.fish-img {
  /* width: 320px;
  height: 225px; */
  flex-shrink: 0;
}
.name-text-group{
  width: 640px; 
  height: 240px; 
  left: 35%; 
  top: 70px; 
  position: absolute; 
  color: black; 
  font-size: 32px; 
  font-family: Inter; 
  font-weight: 400; 
  word-wrap: break-word;
}
.name-text{
  width: 640px; 
  height: 70px;
  flex-shrink: 0;
  color: #000;
  font-family: Inter;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.feature{
  position: relative;
  width: 300px;
  height: 44px;
  margin:50px 0 0 0;
  color: #000;
  font-family: Inter;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.box {
  width: 100%;
  height: 800px;
  border: 1px solid #000;
background: #FFF;
}
</style>