<template>
  <section class="main_stepbar mx-3 mb-6">
      <div class="stepbar_bar_step active">
        <div class="step_circle"></div>
        <span class="step_descript">寄送地址</span>
        <div class="step_line"></div>
      </div>
      <div class="stepbar_bar_step ">
        <div class="step_circle"></div>
        <span class="step_descript">運送方式</span>
        <div class="step_line"></div>
      </div>
      <div class="stepbar_bar_step ">
        <div class="step_circle"></div>
        <span class="step_descript">付款資訊</span>
      </div>
    </section>
</template>

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
        i {
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