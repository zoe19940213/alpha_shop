<template>
  <div class="main_step_btn mx-3 my-8">
    <button
      @click.prevent.stop="handleNextBtn"
      class="step_btn next"
      id="next-step"
    >
      {{ nextButtonShow }}
      <img src="https://imgpile.com/images/5CYzQW.png" alt="" class="ml-4" />
    </button>
    <button
      v-show="currentStep !== 1"
      @click.prevent.stop="handlePrevBtn"
      class="step_btn prev"
      id="prev-step"
    >
      <img src="https://imgpile.com/images/5PdWou.png" alt="" class="mr-4" />
      上一步
    </button>
  </div>
</template>

<script>
export default {
  props: {
    currentStep: {
      type: Number,
      required: true,
    },
    steps: {
      type: Array,
      required: true,
    },
  },
  computed: {
    nextButtonShow() {
      return this.currentStep === this.steps.length ? "確認送出" : "下一步";
    },
  },
  methods: {
    handleNextBtn() {
      if (this.currentStep !== this.steps.length) {
        this.$emit("stepChange",this.currentStep + 1 );
      } else {
        this.$emit("submitOrder");
      }
    },
    handlePrevBtn() {
      if (this.currentStep !== 1) {
        this.$emit("stepChange", (this.currentStep - 1));
      } else {
        return;
      }
    },
  },
};
</script>

<style lang="scss">
.main_step_btn {
  grid-column: 1 / 7;
  grid-row: 8 / 9;
  margin: 0 0.75rem;
  border-top: 1px solid $lignt-border;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  .step_btn {
    margin-top: 1.5rem;
    width: 180px;
    height: 46px;
    border-radius: 8px;
    img {
      height: 0.7em;
    }
    &.next {
      background: $step-button-bg;
      color: white;
      @include hovereffect(white, #ff95bf);
    }
    &.prev {
      text-align: start;
    }
  }
}
</style>