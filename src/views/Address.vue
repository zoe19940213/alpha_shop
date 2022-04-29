<template>
  <div class="form_part" id="address">
    <h2 class="form_part_title">寄送地址</h2>
    <div class="form_part_content address">
      <div class="content_row title">
        <label>稱謂</label>
        <div class="select-wrapper">
          <select
            v-model="order.sallut"
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
          v-model="order.name"
          type="text"
          class="content_row_input"
          placeholder="請輸入姓名"
        />
      </div>
      <div class="content_row phone">
        <label>電話</label
        ><input
          v-model="order.tel"
          type="text"
          class="content_row_input"
          placeholder="請輸入行動電話"
        />
      </div>
      <div class="content_row Email">
        <label>Email</label
        ><input
          v-model="order.email"
          type="text"
          class="content_row_input"
          placeholder="請輸入Email"
        />
      </div>
      <div class="content_row city">
        <label>縣市</label>
        <div class="select-wrapper">
          <select
            v-model="order.city"
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
          v-model="order.address"
          type="text"
          class="content_row_input"
          placeholder="請輸入地址"
        />
      </div>
    </div>
  </div>
</template>

<script>
const STORAGE_KEY = "address";
export default {
  name: "Address",
  data() {
    return {
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
      order: {},
    };
  },
  methods: {
    load(){
      this.order = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {
      sallut: "先生",
      name: "",
      tel: "",
      email: "",
      city: "default",
      address: "",
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
  }
};
</script>

<style lang="scss" src="../assets/styles/main-part.scss">
</style>