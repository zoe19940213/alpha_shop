<template class="">
  <nav class="nav w-100">
    <div class="nav_logo web-logo"></div>
    <div class="nav_bar">
      <ul class="nav_bar_list">
        <li class="bar_list_item"><a href="">男款</a></li>
        <li class="bar_list_item"><a href="">女款</a></li>
        <li class="bar_list_item"><a href="">最新消息</a></li>
        <li class="bar_list_item"><a href="">客製商品</a></li>
        <li class="bar_list_item"><a href="">聯絡我們</a></li>
      </ul>
    </div>
    <div class="nav_function">
      <div class="nav_function_search">
        <input type="text" class="search_bar d-none">
        <button class="search_icon">
          <font-awesome-icon icon="fa-solid fa-magnifying-glass" class="function_icon"/>
        </button>
      </div>
      <button class="nav_function_cart">
      <font-awesome-icon icon="fa-solid fa-cart-shopping" class="function_icon" />
      </button>
      <label for="view-mode" class="nav_function_mode">
        <font-awesome-icon icon="fa-solid fa-moon" class="function_icon"/>
        <font-awesome-icon icon="fa-solid fa-sun" class="function_icon"/>
      </label>
      <input type="checkbox" class="d-none" id="view-mode">
    </div>
  </nav>
</template>

<script>
export default {
  
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
  }
  /* -- dropdown -- */
  .nav_bar_toggle:checked {
    &~.nav_bar {
      transform: scale(1, 1);
      transition: transform 0.3s ease-in-out;
      .nav_bar_list {
        opacity: 1;
        transition: opacity 0.3s 0.3s;
      }
    }
    &~.nav_function {
      opacity: 1;
      transition: opacity 0.3s 0.3s;
    }
  }
}

</style>