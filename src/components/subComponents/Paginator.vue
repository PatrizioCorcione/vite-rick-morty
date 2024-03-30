<script>
import {store} from '../../store';

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
  <div class="my-5">
    <div
    :class="{'disabled':store.page <= 1}"
    @click="store.page--,
    $emit('emitSearch')
    "
    class="btn btn-primary ">
      <-
    </div>
    <span>Pagina {{ store.page }} di {{ store.pageTot }}</span>
    <div
    :class="{'disabled':store.page >= store.pageTot}"
    @click="store.page++,
    $emit('emitSearch')
    "
    class="btn btn-primary ">
      ->
    </div>
  </div>
</template>



<style lang="scss" scoped>
div{
  div{
    display: flex;
    justify-content: center;
  }
  span{
    padding: 5px;
    background-color: #0082b1;
    border-radius: 5px;
    width: 15%;
    font-size: 1.5rem;
    color: yellowgreen;
    text-align: center;
  }
}

</style>