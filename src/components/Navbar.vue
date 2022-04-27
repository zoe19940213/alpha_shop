<template class="">
  <nav class="nav w-100">
    <div class="nav_logo web-logo"></div>
    <div class="nav_bar">
      <ul class="nav_bar_list">
        <li
          v-for="(item,index) in navlist" 
          :key="index"
          class="bar_list_item"><a href="">{{item}}</a></li>
      </ul>
    </div>
    <div class="nav_function">
      <div class="nav_function_search">
        <button class="search_icon">
          <font-awesome-icon icon="fa-solid fa-magnifying-glass" class="function_icon icon"/>
        </button>
        <input type="text" class="search_bar mr-3">
      </div>
      <button class="nav_function_cart">
      <font-awesome-icon icon="fa-solid fa-cart-shopping" class="function_icon icon" />
      </button>
      <label for="view-mode" class="nav_function_mode">
        <font-awesome-icon 
          v-if="darkmode"
          icon="fa-solid fa-sun" class="function_icon icon"/>
          <font-awesome-icon 
          v-else
          icon="fa-solid fa-moon" class="function_icon icon"/>
      </label>
      <input 
        v-model="darkmode"
        type="checkbox" class="d-none" id="view-mode">
    </div>
  </nav>
</template>

<script>
export default {
  data(){
    return{
      darkmode: false,
      navlist: ["男款", "女款", "最新消息", "客製商品", "聯絡我們"]
    }
  },
  watch:{
    darkmode(){
      this.$emit('modeSwitch', this.darkmode)
    }
  }
}
</script>

<style lang="scss">

nav {
  position: fixed;
  z-index: 5;
  top: 0;
  height: 60px;
  padding: 0 10%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @include settheme($themes) {
    background: themed("body-bg");
  }
  /* -- for logo -- */
  .nav_logo {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  /* -- nav bar -- */
  .nav_bar {
    .nav_bar_list {
      width: calc(80vw * 0.3);
      display: flex;
      justify-content: space-between;
      .bar_list_item {
        a {
          @include settheme($themes) {
            color: themed("text");
          }
          &:hover {
            color: $light-text;
          }
        }
      }
    }
  }
  .nav_function {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    &>button,
    .nav_function_mode {
      margin-left: 2rem;
    }
    .nav_function_mode {
      @include hovereffect($light-text, transparent);
    }
    .function_icon {
      font-size: 1.3rem;
    }
    .search_bar{
      position: absolute;
      right: 290px;
      transform: scale(0,1);
      transform-origin: right;
      transition: transform .3s;
      &:hover, &:focus{
        transform: scale(1,1);
      }
    }
    .search_icon:hover ~ .search_bar{
      transform: scale(1,1)
    }
  }
}

</style>