<template>
  <div id="main-payment">
    <main class="main w-100 pb-2">
    <h1 class="main_title mb-5 mx-3">結帳</h1>
    <StepBar />
    <section class="main_form mx-3 mb-8">
      <div class="form_part" id="payment">
        <h2 class="form_part_title">付款資訊</h2>
        <div class="form_part_content payment">
          <div class="content_row name">
            <label>持卡人姓名</label><input type="text" class="content_row_input" placeholder="John Doe">
          </div>
          <div class="content_row card">
            <label>卡號</label><input type="text" class="content_row_input" placeholder="1111 2222 3333 4444">
          </div>
          <div class="content_row limit">
            <label>有效期限</label><input type="text" class="content_row_input" placeholder="MM/YY">
          </div>
          <div class="content_row code">
            <label>CVC/CCV</label><input type="text" class="content_row_input" placeholder="123">
          </div>
        </div>
      </div>
    </section>
    <Cart />
    </main>
  </div>
</template>

<script>
import StepBar from '../components/StepBar'
import Cart from '../components/Cart'
export default {
  components:{
    StepBar,
    Cart
  }
}
</script>

<style lang="scss" src="../assets/styles/main-part.scss">
</style>