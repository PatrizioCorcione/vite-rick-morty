<script>
import axios from 'axios';
import {store} from './store.js';
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
  methods: {
    getApi(){
      axios.get(this.store.apiUrl)
    .then(result => {
      this.store.characters = result.data.results;
    })
    },
  },
  
  mounted() {
    this.getApi();
    
  },
}
</script>

<template>

  
<body>
  <Header/>
  <Main/>
  <Footer/>
</body>
 

  
  
</template>

<style lang="scss">

@import './assets/scss/main.scss';
body{
  background-image: url(../src/assets/img/10.webp);
  background-size: cover;
  background-attachment: fixed;
}

</style>
