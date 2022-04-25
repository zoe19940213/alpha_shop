<template>
  <section class="main_cart mx-3">
      <h3 class="cart_title px-4">購物籃</h3>
      <div class="cart_content px-4 pt-5" id="cart-list">
        <!--    render cart items    -->
      </div>
      <div class="cart_calculate px-4">
        <p>
          <span>運費</span>
          <span class="highlight" id="shipment-fee">免費</span>
        </p>
        <p>
          <span>小計</span>
          <span class="highlight" id="total-amount">$5,298</span>
        </p>
      </div>
    </section>
</template>

<style lang="scss">
.main_cart {
  padding: 2rem 0.5rem;
  grid-column: 8 / 13;
  grid-row: 2 / 9;    
  border-radius: 5px;
  @include settheme($themes) {
    background: themed("cart-bg");
    border: 1px solid themed("cart-border");
  }
  .cart_content {
    display: flex;
    flex-direction: column;
    .cart_content_item {
      width: 100%;
      margin-bottom: 2rem;
      display: grid;
      grid-gap: 1rem;
      grid-template-areas:
        "image name"
        "image amount"
        "image price";
      img {
        width: 100px;
        grid-area: image;
      }
      .item_name {
        font-weight: 400;
        text-align: end;
        grid-area: name;
      }
      .item_amount {
        grid-area: amount;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        span {
          margin: 0 2rem;
        }
        .amount_btn {
          width: 26px;
          height: 27px;
          display: inline-block;
          border-radius: 50%;
          i {
            color: black;
          }
          @include settheme($themes) {
            background: themed("cart-border");
            @include hovereffect($light-text, themed("cart-border"));
          }
        }
      }
      .item_price {
        text-align: end;
        grid-area: price;
      }
    }
  }
  .cart_calculate {
    p {
      margin-bottom: 1rem;
      padding: 1rem 0;
      @include settheme($themes) {
        border-top: 1px solid themed("cart-border");
      }
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>