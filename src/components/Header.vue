<script>
import {store} from '../store.js';
export default {
  data(){
    return{
      store,
      
    }
  }
}


</script>

<template>

  <div  class="text-center">
    <h1>Rick & Morty</h1>
    <input type="text" placeholder="Trova tra i personaggi">
    <select name="" id="">
      <option value="">Per tipologia</option>
      <option value="">Luogo</option>
      <option value="">Stato</option>
    </select>
    <div class="btn btn-primary ">Cerca</div>
    <div class="btn btn-warning">Resetta</div>
  </div>
  
</template>



<style lang="scss" scoped>
div{
  margin: 20px;
  h1{
    color: #f5631a;
    font-size: 50px;
    text-shadow: #ddf46d 0px 0px 5px;
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