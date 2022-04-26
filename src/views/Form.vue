<template>
  <div id="main-adress">
    <main class="main w-100 pb-2">
      <h1 class="main_title mb-5 mx-3">結帳</h1>
      <StepBar :currentStep="currentStep" :steps="steps" />
      <FormContent :currentStep="currentStep" />
      <Cart />
      <StepButton
        :currentStep="currentStep"
        :steps="steps"
        @stepChange="handleStepChange"
      />
    </main>
  </div>
</template>

<script>
import StepBar from "../components/StepBar";
import FormContent from "../components/FormContent";
import Cart from "../components/Cart";
import StepButton from "../components/StepButton";
export default {
  components: {
    StepBar,
    FormContent,
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
      this.getStep()
    },
  },
  created() {
    this.getStep();
  },
};
</script>

<style lang="scss" src="../assets/styles/main-part.scss">
</style>