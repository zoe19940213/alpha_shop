<template>
  <div id="alpha-shop" 
    :class="theme">
    <Navbar @modeSwitch="modeSwitch"/>
    <router-view/>
    <Footer />
    <div class="fill-background"></div>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default {
  name: 'App',
  components:{
    Navbar,
    Footer,
  },
  data(){
    return{
      theme: 'theme-normal'
    }
  },
  methods:{
    modeSwitch(mode){
      this.theme = mode? 'theme-dark': 'theme-normal'
    }
  }
}
</script>

