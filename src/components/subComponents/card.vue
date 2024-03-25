<script>
import {store} from '../../store.js';
export default {
  data(){
    return{
      store,
    }
    
  },
  props:{
    nameP: String,
    statusP: String,
    imageP: String,
    speciesP: String,
  },
}


</script>

<template>

  <div class="col">
    <div>
      <img :src="imageP" :alt='nameP'>
      <div class="txt-character">
        <h5>{{nameP}}</h5>
        <p>{{speciesP}}</p>
        <p>{{statusP}}</p>
        
      </div>
      <div class="fake-hr"></div>
    </div>
  </div>
  
</template>



<style lang="scss" scoped>
@import '../../assets/scss/main.scss';
@import '../../assets/scss/partials/general';
.col{
  
  text-align: center;
  img{
    border: 5px solid #0082b1;
    box-shadow: 0px 0px 25px rgb(42, 180, 255);
    border-radius: 50%;
    overflow: hidden;
    &:hover{
      transform: scale(1.1);
      transition: 0.8s;
      border: 8px solid #a7d3e9;
      box-shadow: 0px 0px 28px rgb(162, 236, 255);
    }
  }
  .txt-character{
    background-color: #a7d3e9;
    font-weight: bold;
    border: 5px solid #e2e182;
    box-shadow: 0px 0px 8px black;
    border-radius: 30px;
    overflow: hidden;
    margin: 20px;
    height: 140px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
  }
  .fake-hr{
        width: 110%;
        height: 5px;
        background-color: rgb(197, 232, 0);
        margin: 20px 0px;
      }
}

</style>