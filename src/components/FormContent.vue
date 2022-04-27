<template>
  <section id="form-content" class="main_form mx-3 mb-8">
    <div v-show="currentStep === 1" class="form_part" id="address">
      <h2 class="form_part_title">寄送地址</h2>
      <div class="form_part_content address">
        <div class="content_row title">
          <label>稱謂</label>
          <div class="select-wrapper">
            <select 
              v-model="order.address.sallut"
              name="customer-title" class="content_row_select">
              <option 
                v-for="(gender, index) in genders" 
                :key="index">
                {{gender}}</option>
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
              <option 
                v-for="(city, index) in cities" 
                :key="index">
                {{city}}</option>
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
          :class="['content_row', 'mb-5', 'py-3',{active: order.shipment.id===shipment.id}]">
          <input
            v-model="order.shipment.id"
            type="radio"
            name="shipment"
            :value="shipment.id"
            :checked="order.shipment.id===shipment.id"
          />
          <div class="ship_descript">
            <p>{{shipment.name}}</p>
            <p>{{shipment.descript}}</p>
          </div>
          <p class="ship_price">{{shipment.price|showPrice}}</p>
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
            type="text" class="content_row_input" placeholder="MM/YY" />
        </div>
        <div class="content_row code">
          <label>CVC/CCV</label
          ><input 
            v-model="order.payment.security"
            type="text" class="content_row_input" placeholder="123" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {priceFilter} from '../utils/mixins'
export default {
  mixins:[priceFilter],
  props: {
    currentStep: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      genders:["先生", "小姐", "保密"],
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
      shipments:[
        {
          id: 1,
          name: '標準運送',
          descript:'約 3~7 個工作天',
          price: 0,
        },
        {
          id: 2,
          name: 'DHL 貨運',
          descript:'48小時內送達',
          price: 500,
        }
      ],
      order:{
        address:{
          sallut: '先生',
          name: '',
          tel:'',
          email: '',
          city: 'default',
          address: '',
        },
        shipment:{
          id: 1,
          name: '標準運送',
          descript:'約 3~7 個工作天',
          price: 0,
        },
        payment:{
          cardName: '',
          cardNo: '',
          cardDate: '',
          security: '',
        }
      }

    };
  },
  methods:{
  },
  watch:{
    'order.shipment.id'(newValue){
      this.order.shipment = 
      {...this.shipments.find(shipment => shipment.id === newValue)}
      this.$emit('shipmentPrice', this.order.shipment.price)
    }
  }
};
</script>

<style lang="scss" src="../assets/styles/main-part.scss">
</style>