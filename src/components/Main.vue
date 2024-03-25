<script>
import {store} from '../store.js';
import Card from './subComponents/card.vue';
export default {
  components: { Card, },
  data(){
    return{
      store,
    }
  }
}


</script>

<template>
  
  <div class="container">
    <div class="row row-cols-4 ">
      <card
      v-for="character in this.store.characters"
      :key="character.id"
      :nameP="character.name"
      :statusP="character.status"
      :imageP="character.image"
      :speciesP="character.species"
      
      />
    </div>
  </div>
  
  
  
</template>



<style lang="scss" scoped>
@import '../assets/scss/main.scss';
.container{
  
  .row{
    
  }
}


</style>