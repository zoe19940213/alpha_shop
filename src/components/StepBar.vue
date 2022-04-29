<template>
  <section class="main_stepbar mx-3 mb-6">
    <div
      v-for="step in steps"
      :key="step.id"
      :class="['stepbar_bar_step', 
      { active: step.id === currentStep },
      { checked: step.isCompleted}]"
    >
      <div class="step_circle">
        <font-awesome-icon icon="fa-solid fa-check" 
          v-show="step.isCompleted" class="icon"/>
      </div>
      <span class="step_descript">{{ step.descript }}</span>
      <div v-show="step.id !== steps.length" class="step_line"></div>
    </div>
  </section>
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
  data() {
    return {};
  },
  method: {
    checkStep(step) {
      this.completeSteps.push(step.id);
    },
  }
};
</script>

<style lang="scss">
.main_stepbar {
  display: flex;
  justify-content: space-between;
  grid-column: 1 / 7;
  grid-row: 2 / 3;
  .stepbar_bar_step {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @include getStepNum(3);
    .step_circle {
      width: 1.5rem;
      height: 1.5rem;
      border: 1px solid $light-circle;
      border-radius: 50%;
      background: transparent;
      color: $light-circle;
      text-align: center;
      line-height: 1.3rem;
      font-size: 0.75rem;
    }
    .step_descript {
      margin-left: 0.8rem;
      display: inline-block;
      font-size: 1rem;
    }
    .step_line {
      height: 2px;
      width: calc((40vw - 1.5rem - 4.5rem - 12rem - 2.4rem - 120px) / 2);
      margin-left: 30px;
      background: $light-circle;
    }
    &.active,
    &.checked {
      .step_circle {
        @include settheme($themes) {
          border: 1px solid themed("circle-bg");
          background: themed("circle-bg");
        }
        color: $circle-text;
        .icon path {
          color: $circle-text;
        }
      }
      .step_line {
        @include settheme($themes) {
          background: themed("text");
        }
      }
    }
    &.checked .step_circle::after {
      content: "";
    }
  }
}
</style>