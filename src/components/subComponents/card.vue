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
      <div>
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
      background-color: red;
      img{
        border-radius: 50%;
        overflow: hidden;
      }
    }

</style>