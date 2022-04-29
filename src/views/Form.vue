<template>
  <div id="main-form">
    <main class="main w-100 pb-2">
      <h1 class="main_title mb-5 mx-3">結帳</h1>
      <StepBar :currentStep="currentStep" :steps="steps" />
      <section id="form-content" class="main_form mx-3 mb-8">
        <router-view @shipmentFeeUpdate="updateShipmentFee" />
      </section>
      <Cart
        ref="cart"
        :shipmentFee="shipmentFee"
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
      {{order}}
    </modal>
  </div>
</template>

<script>
const STORAGE_KEYS = ["address", "shipment", "payment"];

import StepBar from "../components/StepBar";
import Cart from "../components/Cart";
import StepButton from "../components/StepButton";
import { priceFilter } from "../utils/mixins";

export default {
  name: "Form",
  mixins: [priceFilter],
  components: {
    StepBar,
    Cart,
    StepButton,
  },
  data() {
    return {
      currentStep: 1,
      steps: [
        {
          id: 1,
          name: "address",
          descript: "寄送地址",
          isCompleted: false,
        },
        {
          id: 2,
          name: "shipment",
          descript: "運送方式",
          isCompleted: false,
        },
        {
          id: 3,
          name: "payment",
          descript: "付款資訊",
          isCompleted: false,
        },
      ],
      shipmentFee: 0,
      order: { 
        address: {},
        shipment: {},
        payment: {},
        totalPrice: 0 },
    };
  },
  methods: {
    getStep() {
      this.currentStep = this.steps.find(
        (step) => step.name === this.$route.name
      ).id;
    },
    isComplete() {
      this.steps = this.steps.map((step) => {
        if (step.id < this.currentStep) {
          return { ...step, isCompleted: true };
        } else {
          return { ...step, isCompleted: false };
        }
      });
    },
    getOrder() {
      STORAGE_KEYS.forEach((STORAGE_KEY) => {
        this.order[STORAGE_KEY] = {
          ...JSON.parse(localStorage.getItem(STORAGE_KEY)),
        };
      });
      
    },
    getShipmentFee() {
      this.shipmentFee = localStorage.getItem(STORAGE_KEYS[1])
        ? JSON.parse(localStorage.getItem(STORAGE_KEYS[1])).price
        : 0;
    },
    // respond to children
    updateShipmentFee(newFee) {
      this.shipmentFee = newFee;
    },
    refreshTotalPrice(price) {
      this.order.totalPrice = price;
    },
    handleStepChange(newStep) {
      this.$router.push({
        name: this.steps[newStep - 1].name,
      });
    },
    handleSubmitOrder() {
      this.getOrder()
      this.$modal.show("checkout-order")
      console.log(JSON.stringify(this.order, null, 2));
    },
    // status loading
    load() {
      this.getStep();
      this.isComplete();
      this.getShipmentFee();
    },
  },
  watch: {
    "$route.name"() {
      this.load();
    },
  },
  created() {
    this.load();
  },
};
</script>

<style lang="scss" src="../assets/styles/main-part.scss">
</style>