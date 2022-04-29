<template>
  <section class="main_cart mx-3">
    <h3 class="cart_title px-4">購物籃</h3>
    <div class="cart_content px-4 pt-5" id="cart-list">
      <div v-for="item in cartItems" :key="item.id" class="cart_content_item">
        <img :src="item.image" alt="" />
        <h4 class="item_name">{{ item.descrip }}</h4>
        <div class="item_amount">
          <button
            @click.prevent.stop="minusAmount(item.id)"
            class="amount_btn minus"
          >
            <font-awesome-icon icon="fa-solid fa-minus" />
          </button>
          <span>{{ item.amount }}</span>
          <button
            @click.prevent.stop="plusAmount(item.id)"
            class="amount_btn plus"
          >
            <font-awesome-icon icon="fa-solid fa-plus" />
          </button>
        </div>
        <h5 class="item_price">{{ item.subtotal | showPrice }}</h5>
      </div>
    </div>
    <div class="cart_calculate px-4">
      <p>
        <span>運費</span>
        <span class="highlight" id="shipment-fee">{{
          shipmentFee | showPrice
        }}</span>
      </p>
      <p>
        <span>小計</span>
        <span class="highlight" id="total-amount">{{
          totalPrice | showPrice
        }}</span>
      </p>
    </div>
  </section>
</template>

<script>
const STORAGE_KEY = "cartitems";
import { priceFilter } from "../utils/mixins";

export default {
  mixins: [priceFilter],
  props: {
    shipmentFee: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      cartItems: [],
      totalPrice: 0
    };
  },
  methods: {
    subtotalCalculate() {
      this.cartItems = this.cartItems.map((item) => ({
        ...item,
        subtotal: item.price * item.amount,
      }));
      this.calculateTotalPrice()
    },
    plusAmount(itemId) {
      this.cartItems = this.cartItems.map((item) => {
        if (item.id === itemId) {
          return {
            ...item,
            amount: item.amount + 1,
          };
        } else {
          return item;
        }
      });
      this.subtotalCalculate();
    },
    minusAmount(itemId) {
      this.cartItems = this.cartItems.map((item) => {
        if (item.id === itemId && item.amount > 1) {
          return {
            ...item,
            amount: item.amount - 1,
          };
        } else {
          return item;
        }
      });
      this.subtotalCalculate();
    },
    calculateTotalPrice(){
      this.totalPrice = 
        this.cartItems.reduce((pre, curr) => pre + curr.subtotal, 0) + this.shipmentFee ;
    },
    submitTotalPrice() {
      this.$emit("cartModified", this.totalPrice);
    },
    load(){
      this.cartItems = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [
        {
          id: 1,
          descript: "破壞補丁修身牛仔褲",
          amount: 1,
          price: 3999,
          image: "https://imgpile.com/images/5Cspl4.png",
        },
        {
          id: 2,
          descript: "刷色直筒牛仔褲",
          amount: 1,
          price: 1299,
          image: "https://imgpile.com/images/5CsSF2.png",
        },
      ];
      this.subtotalCalculate();
    },
    save(){
      this.submitTotalPrice()
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.cartItems));
    },
  },
  created() {
    this.load()
    this.save()
  },
  updated() {
    this.save()
  },
};
</script>

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