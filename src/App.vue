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
      this.store.characters=[]
      axios.get(this.store.apiUrl,{
        params:{
          name: this.store.search,
        }
      
      })
    .then(result => {
      this.store.characters = result.data.results;
      console.log(this.store.characters);
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
  <Header @emitSearch ="getApi"/>
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
