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
  <div>
    <div
    v-if="store.page > 1"
    @click="store.page -= 1,
    $emit('emitSearch')
    "
    class="btn btn-primary ">
      <-
    </div>
    <div
    v-if="store.page < store.pageTot"
    @click="store.page += 1,
    $emit('emitSearch')
    "
    class="btn btn-primary ">
      ->
    </div>
  </div>
</template>



<style lang="scss" scoped>

</style>