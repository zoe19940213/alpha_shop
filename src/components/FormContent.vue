<template>
  <section id="form-content" class="main_form mx-3 mb-8">
    <div class="form_part" id="address">
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
          <label>姓名</label
          ><input
            type="text"
            class="content_row_input"
            placeholder="請輸入姓名"
          />
        </div>
        <div class="content_row phone">
          <label>電話</label
          ><input
            type="text"
            class="content_row_input"
            placeholder="請輸入行動電話"
          />
        </div>
        <div class="content_row Email">
          <label>Email</label
          ><input
            type="text"
            class="content_row_input"
            placeholder="請輸入Email"
          />
        </div>
        <div class="content_row city">
          <label>縣市</label>
          <div class="select-wrapper">
            <select
              name="deliver_place"
              class="content_row_select"
              id="ship-city-select"
            >
              <!--       render cities here         -->
            </select>
          </div>
        </div>
        <div class="content_row address">
          <label>地址</label
          ><input
            type="text"
            class="content_row_input"
            placeholder="請輸入地址"
          />
        </div>
      </div>
    </div>
    <div class="form_part d-none" id="shipment">
      <h2 class="form_part_title">運送方式</h2>
      <div class="form_part_content shipment">
        <div class="content_row mb-5 py-3 active">
          <input
            type="radio"
            name="shipment"
            value="normal"
            data-price="0"
            checked
          />
          <div class="ship_descript">
            <p>標準運送</p>
            <p>約 3~7 個工作天</p>
          </div>
          <p class="ship_price">免費</p>
        </div>
        <div class="content_row py-3">
          <input type="radio" name="shipment" value="dhl" data-price="500" />
          <div class="ship_descript">
            <p class="highlight">DHL 貨運</p>
            <p>48小時內送達</p>
          </div>
          <p class="ship_price">$500</p>
        </div>
      </div>
    </div>
    <div class="form_part d-none" id="payment">
      <h2 class="form_part_title">付款資訊</h2>
      <div class="form_part_content payment">
        <div class="content_row name">
          <label>持卡人姓名</label
          ><input
            type="text"
            class="content_row_input"
            placeholder="John Doe"
          />
        </div>
        <div class="content_row card">
          <label>卡號</label
          ><input
            type="text"
            class="content_row_input"
            placeholder="1111 2222 3333 4444"
          />
        </div>
        <div class="content_row limit">
          <label>有效期限</label
          ><input type="text" class="content_row_input" placeholder="MM/YY" />
        </div>
        <div class="content_row code">
          <label>CVC/CCV</label
          ><input type="text" class="content_row_input" placeholder="123" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props:{

  }
};
</script>

<style lang="scss" src="../assets/styles/main-part.scss">
</style>