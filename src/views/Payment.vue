<template>
  <div class="form_part" id="payment">
    <h2 class="form_part_title">付款資訊</h2>
    <div class="form_part_content payment">
      <div class="content_row name">
        <label>持卡人姓名</label
        ><input
          v-model="order.cardName"
          type="text"
          class="content_row_input"
          placeholder="John Doe"
        />
      </div>
      <div class="content_row card">
        <label>卡號</label
        ><input
          v-model="order.cardNo"
          type="text"
          class="content_row_input"
          placeholder="1111 2222 3333 4444"
        />
      </div>
      <div class="content_row limit">
        <label>有效期限</label
        ><input
          v-model="order.cardDate"
          type="text"
          class="content_row_input"
          placeholder="MM/YY"
        />
      </div>
      <div class="content_row code">
        <label>CVC/CCV</label
        ><input
          v-model="order.security"
          type="text"
          class="content_row_input"
          placeholder="123"
        />
      </div>
    </div>
  </div>
</template>

<script>
const STORAGE_KEY = "payment";
export default {
  name: "Payment",
  data() {
    return {
      order: {},
    };
  },
  methods: {
    load(){
      this.order = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {
      cardName: "",
      cardNo: "",
      cardDate: "",
      security: "",
    };
    },
    save() {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.order));
    },
  },
  created() {
    this.load()
    this.save()
  },
  updated() {
    this.save();
  },
  
};
</script>

<style lang="scss" src="../assets/styles/main-part.scss">
</style>