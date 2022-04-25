<template>
  <div id="main-adress">
    <main class="main w-100 pb-2">
    <h1 class="main_title mb-5 mx-3">結帳</h1>
    <StepBar />
    <section class="main_form mx-3 mb-8">
      <div class="form_part " id="address">
        <h2 class="form_part_title">寄送地址</h2>
        <div class="form_part_content address">
          <div class="content_row title">
            <label>稱謂</label>
            <div class="select-wrapper">
              <select name="customer-title" class="content_row_select">
                <option value="">先生</option>
                <option value="">小姐</option>
                <option value="">保密</option>
              </select>
            </div>
          </div>
          <div class="content_row name">
            <label>姓名</label><input type="text" class="content_row_input" placeholder="請輸入姓名">
          </div>
          <div class="content_row phone">
            <label>電話</label><input type="text" class="content_row_input" placeholder="請輸入行動電話">
          </div>
          <div class="content_row Email">
            <label>Email</label><input type="text" class="content_row_input" placeholder="請輸入Email">
          </div>
          <div class="content_row city">
            <label>縣市</label>
            <div class="select-wrapper">
              <select name="deliver_place" class="content_row_select" id="ship-city-select">
                <!--       render cities here         -->
              </select>
            </div>
          </div>
          <div class="content_row address">
            <label>地址</label><input type="text" class="content_row_input" placeholder="請輸入地址">
          </div>
        </div>
      </div>
    </section>
    <Cart />
    <StepButton />
    </main>
  </div>
</template>

<script>
import StepBar from '../components/StepBar'
import Cart from '../components/Cart'
import StepButton from '../components/StepButton'
export default {
  components:{
    StepBar,
    Cart,
    StepButton,
  }
}
</script>

<style lang="scss" src="../assets/styles/main-part.scss">
</style>