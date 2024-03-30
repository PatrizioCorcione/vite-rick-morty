<script>
import {store} from '../store.js';
export default {
  data(){
    return{
      store,
    }
  },

  methods: {


    
  },
  mounted() {
    
  }
}


</script>

<template>

  <div  class="text-center">
    <h1>Rick & Morty</h1>
    <input
    @keyup.enter="$emit('emitSearch')"
     v-model="store.search"
     type="text" placeholder="Trova tra i personaggi"
     >
    <select
    v-model="store.status"
    name="" id="">
      <option value="" disabled selected>Filtra per stato</option>
      <option
      v-for="status in store.statuses"
      :key="status"
      :value="status">{{status}}
      </option>
      
    </select>
    <select
    v-model="store.specie"
    name="" id="">
      <option value="" disabled selected>Filtra per specie</option>
      <option
      v-for="specie in store.species"
      :key="specie"
      :value="specie">{{specie}}
      </option>
      
    </select>
    <div
    @click="
    store.page=1,
    $emit('emitSearch')"
    class="btn btn-primary ">Cerca</div>
    <div class="btn btn-warning">Resetta</div>
  </div>
  
  
</template>



<style lang="scss" scoped>
div{
  margin: 20px;
  h1{

    color: #b23b00;
    font-size: 5rem;
    text-shadow: #ddf46d 0px 0px 10px;
  }
  input{
    margin: 10px;
    border-radius: 10px;
    border: 2px solid #88b6e4;
  }
  select{
    margin: 10px;
    padding: 5px;
    border-radius: 10px;
    border: 2px solid #f8f9fa;
  }
  .btn{
    margin: 10px;
    padding: 5px;
    border-radius: 10px;
    border: 2px solid #f8f9fa;
    cursor: pointer;
    &:hover{
      background-color: #17e554;
      color: black;
    }
  }
}
</style>