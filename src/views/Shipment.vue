<template>
  <div id="main-shipment">
    <main class="main w-100 pb-2">
    <h1 class="main_title mb-5 mx-3">結帳</h1>
    <StepBar />
    <section class="main_form mx-3 mb-8">
      <div class="form_part" id="shipment">
        <h2 class="form_part_title">運送方式</h2>
        <div class="form_part_content shipment">
          <div class="content_row mb-5 py-3 active">
            <input type="radio" name="shipment" value="normal" data-price="0" checked>
            <div class="ship_descript">
              <p>標準運送</p>
              <p>約 3~7 個工作天</p>
            </div>
            <p class="ship_price">免費</p>
          </div>
          <div class="content_row py-3">
            <input type="radio" name="shipment" value="dhl" data-price="500">
            <div class="ship_descript">
              <p class="highlight">DHL 貨運</p>
              <p>48小時內送達</p>
            </div>
            <p class="ship_price">$500</p>
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