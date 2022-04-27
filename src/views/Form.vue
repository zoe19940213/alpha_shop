<template>
  <div id="main-adress">
    <main class="main w-100 pb-2">
      <h1 class="main_title mb-5 mx-3">結帳</h1>
      <StepBar :currentStep="currentStep" :steps="steps" />
      <section id="form-content" class="main_form mx-3 mb-8">
        <div v-show="currentStep === 1" class="form_part" id="address">
          <h2 class="form_part_title">寄送地址</h2>
          <div class="form_part_content address">
            <div class="content_row title">
              <label>稱謂</label>
              <div class="select-wrapper">
                <select
                  v-model="order.address.sallut"
                  name="customer-title"
                  class="content_row_select"
                >
                  <option v-for="(gender, index) in genders" :key="index">
                    {{ gender }}
                  </option>
                </select>
              </div>
            </div>
            <div class="content_row name">
              <label>姓名</label
              ><input
                v-model="order.address.name"
                type="text"
                class="content_row_input"
                placeholder="請輸入姓名"
              />
            </div>
            <div class="content_row phone">
              <label>電話</label
              ><input
                v-model="order.address.tel"
                type="text"
                class="content_row_input"
                placeholder="請輸入行動電話"
              />
            </div>
            <div class="content_row Email">
              <label>Email</label
              ><input
                v-model="order.address.email"
                type="text"
                class="content_row_input"
                placeholder="請輸入Email"
              />
            </div>
            <div class="content_row city">
              <label>縣市</label>
              <div class="select-wrapper">
                <select
                  v-model="order.address.city"
                  name="deliver_place"
                  class="content_row_select"
                  id="ship-city-select"
                >
                  <option value="default" selected disabled>請輸入縣市</option>
                  <option v-for="(city, index) in cities" :key="index">
                    {{ city }}
                  </option>
                </select>
              </div>
            </div>
            <div class="content_row address">
              <label>地址</label
              ><input
                v-model="order.address.address"
                type="text"
                class="content_row_input"
                placeholder="請輸入地址"
              />
            </div>
          </div>
        </div>
        <div v-show="currentStep === 2" class="form_part" id="shipment">
          <h2 class="form_part_title">運送方式</h2>
          <div class="form_part_content shipment">
            <div
              v-for="shipment in shipments"
              :key="shipment.id"
              :class="[
                'content_row',
                'mb-5',
                'py-3',
                { active: order.shipment.id === shipment.id },
              ]"
            >
              <input
                v-model="order.shipment.id"
                type="radio"
                name="shipment"
                :value="shipment.id"
                :checked="order.shipment.id === shipment.id"
              />
              <div class="ship_descript">
                <p>{{ shipment.name }}</p>
                <p>{{ shipment.descript }}</p>
              </div>
              <p class="ship_price">{{ shipment.price | showPrice }}</p>
            </div>
          </div>
        </div>
        <div v-show="currentStep === 3" class="form_part" id="payment">
          <h2 class="form_part_title">付款資訊</h2>
          <div class="form_part_content payment">
            <div class="content_row name">
              <label>持卡人姓名</label
              ><input
                v-model="order.payment.cardName"
                type="text"
                class="content_row_input"
                placeholder="John Doe"
              />
            </div>
            <div class="content_row card">
              <label>卡號</label
              ><input
                v-model="order.payment.cardNo"
                type="text"
                class="content_row_input"
                placeholder="1111 2222 3333 4444"
              />
            </div>
            <div class="content_row limit">
              <label>有效期限</label
              ><input
                v-model="order.payment.cardDate"
                type="text"
                class="content_row_input"
                placeholder="MM/YY"
              />
            </div>
            <div class="content_row code">
              <label>CVC/CCV</label
              ><input
                v-model="order.payment.security"
                type="text"
                class="content_row_input"
                placeholder="123"
              />
            </div>
          </div>
        </div>
      </section>
      <Cart
        ref="cart"
        :shipmentFee="order.shipment.price"
        :init-cart-items="order.cartItems"
        @cartModified="refreshTotalPrice"
      />
      <StepButton
        :currentStep="currentStep"
        :steps="steps"
        @stepChange="handleStepChange"
        @submitOrder="handleSubmitOrder"
      />
    </main>
    <modal name="checkout-order">
      <ul class="m-3 p-3">
        <li v-for="(part,key) in order" :key="key" class="mb-2">
          <h5>{{key}} </h5>
          <p>{{part}}</p>
        </li>
      </ul>
    </modal>
  </div>
</template>

<script>
const STORAGE_KEY = "checkout";

import StepBar from "../components/StepBar";
import Cart from "../components/Cart";
import StepButton from "../components/StepButton";
import { priceFilter } from "../utils/mixins";

export default {
  mixins: [priceFilter],
  components: {
    StepBar,
    Cart,
    StepButton,
  },
  data() {
    return {
      currentStep: 0,
      steps: [
        {
          id: 1,
          name: "address",
          descript: "寄送地址",
        },
        {
          id: 2,
          name: "shipment",
          descript: "運送方式",
        },
        {
          id: 3,
          name: "payment",
          descript: "付款資訊",
        },
      ],
      genders: ["先生", "小姐", "保密"],
      cities: [
        "基隆市",
        "台北市",
        "新北市",
        "桃園市",
        "新竹縣",
        "新竹市",
        "苗栗縣",
        "台中市",
        "南投縣",
        "彰化縣",
        "雲林縣",
        "嘉義縣",
        "嘉義市",
        "台南市",
        "高雄市",
        "屏東縣",
        "宜蘭縣",
        "花蓮縣",
        "台東縣",
        "澎湖縣",
        "金門縣",
        "連江縣",
      ],
      shipments: [
        {
          id: 1,
          name: "標準運送",
          descript: "約 3~7 個工作天",
          price: 0,
        },
        {
          id: 2,
          name: "DHL 貨運",
          descript: "48小時內送達",
          price: 500,
        },
      ],
      order: {},
    };
  },
  methods: {
    getStep() {
      this.currentStep = this.steps.find(
        (step) => step.name === this.$route.params.step
      ).id;
    },
    handleStepChange(newStep) {
      this.$router.push({
        name: "step-address",
        params: { step: this.steps[newStep - 1].name },
      });
      this.getStep();
    },
    refreshTotalPrice(price) {
      this.order.totalPrice = price
    },
    handleSubmitOrder() {
      this.$modal.show('checkout-order')
      console.log(JSON.stringify(this.order,null, 2))
    }
  },
  watch: {
    "order.shipment.id"(newValue) {
      const {id, price} = this.shipments.find((shipment) => shipment.id === newValue)
      this.order.shipment = { id, price}
    },
    order: {
      handler() {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(this.order));
      },
      deep: true,
    },
  },
  created() {
    this.getStep();
    this.order = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {
      address: {
        sallut: "先生",
        name: "",
        tel: "",
        email: "",
        city: "default",
        address: "",
      },
      shipment: {
        id: 1,
        price: 0,
      },
      payment: {
        cardName: "",
        cardNo: "",
        cardDate: "",
        security: "",
      },
      totalPrice: 0
    };
  },
};
</script>

<style lang="scss" src="../assets/styles/main-part.scss">
</style>