<script>
import {store} from 'store.js';
import Header from "../src/components/Header.vue";
import Main from "../src/components/Main.vue";
import Footer from "../src/components/Footer.vue";

export default{
  components:{
    Header,
    Main,
    Footer,
  },
  data() {
    return {
      store,
    }
  },
}
</script>

<template>

  

  <Header/>
  <Main/>
  <Footer/>

  
  
</template>

<style lang="scss">

@import './assets/scss/main.scss';

</style>
