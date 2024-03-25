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
    </div>
  </div>
  
</template>



<style lang="scss" scoped>
@import '../../assets/scss/main.scss';
@import '../../assets/scss/partials/general';
.col{
  
  text-align: center;
  img{
    border: 5px solid #a7d3e9;
    box-shadow: 0px 0px 25px black;
    border-radius: 50%;
    overflow: hidden;
    &:hover{
      transform: scale(1.1);
      transition: 0.8s;
      border: 8px solid #a7d3e9;
      box-shadow: 0px 0px 28px black;
    }
  }
  .txt-character{
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
}

</style>