<script>
import axios from 'axios';
import {store} from './store.js';
import Header from "../src/components/Header.vue";
import Main from "../src/components/Main.vue";
import Footer from "../src/components/Footer.vue";
import Paginator from './components/subComponents/Paginator.vue';

export default{
  components:{
    Header,
    Main,
    Footer,
    Paginator,
  },
  data() {
    return {
      store,
      counter:0,
    }
  },
  methods: {
    getApi(){
      this.store.characters=[]
    
      axios.get(this.store.apiUrl,{
        params:{
          name: this.store.search,
          status:this.store.status,
          species:this.store.specie,
          page:this.store.page,
        }
      })
     .then(result => {
       this.store.characters = result.data.results;
       if (this.store.species.length === 0) {
        this.getSpecies();
        this.getStatuses();
       }
       
       this.store.pageTot = result.data.info.pages;
       console.log(this.store.species);
      })
    },
    getStatuses(){
      this.store.characters.forEach(element => {
        if(!this.store.statuses.includes(element.status)){
        this.store.statuses.push(element.status);
        } 
      });
    },
    getSpecies(){
      for (let i = 0; i < 42; i++) {
        axios.get(store.apiUrl,{
          params:{
            page:this.counter++
          }
        })
        .then(risposta => {
          risposta.data.results.forEach(element => {
            if(!this.store.species.includes(element.species)){
              this.store.species.push(element.species);
            }
          });
        })
    }
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
  <paginator @emitSearch ="getApi"/>
  <Main/>
  <paginator @emitSearch ="getApi"/>
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
