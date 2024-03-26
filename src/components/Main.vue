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
    <div v-if="store.characters.length > 0" class="row row-cols-4 ">
      <card
      
      v-for="character in this.store.characters"
      :key="character.id"
      :nameP="character.name"
      :statusP="character.status"
      :imageP="character.image"
      :speciesP="character.species"
      
      />
    </div>
    <p v-else> Nessun risultato</p>
  </div>
  
  
  
</template>



<style lang="scss" scoped>
@import '../assets/scss/main.scss';
p{
  text-align: center;
  font-size: 2rem;
  color: #b23b00;
  text-shadow: #ddf46d 0px 0px 10px;
}



</style>