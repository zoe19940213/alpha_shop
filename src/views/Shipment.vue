<template>
  <div class="form_part" id="shipment">
    <h2 class="form_part_title">運送方式</h2>
    <div class="form_part_content shipment">
      <div
        v-for="shipment in shipments"
        :key="shipment.id"
        :class="[
          'content_row',
          'mb-5',
          'py-3',
          { active: order.id === shipment.id },
        ]"
      >
        <input
          v-model="order.id"
          type="radio"
          name="shipment"
          :value="shipment.id"
          :checked="order.id === shipment.id"
        />
        <div class="ship_descript">
          <p>{{ shipment.name }}</p>
          <p>{{ shipment.descript }}</p>
        </div>
        <p class="ship_price">{{ shipment.price | showPrice }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { priceFilter } from "../utils/mixins";
const STORAGE_KEY = "shipment"
const dummyData = {
  shipments: [
    {
      id: 1,
      name: "標準運送",
      descript: "約 3~7 個工作天",
      price: 0,
    },
    {
      id: 2,
      name: "DHL 貨運",
      descript: "48小時內送達",
      price: 500,
    },
  ],
};
export default {
  name: "Shipment",
  mixins: [priceFilter],
  data() {
    return {
      shipments: [],
      order:{}
    };
  },
  methods:{
    fecthShipments(){
      this.shipments = dummyData.shipments
    },
    shipmentFeeUpdate(){
      this.order.price = this.shipments.find(shipment=>
        shipment.id === this.order.id).price
      this.$emit("shipmentFeeUpdate", this.order.price)
    },
    load(){
      this.order = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {
      id: 1,
      price: 0,
    }
    },
    save(){
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.order))
    }
  },
  created(){
    this.fecthShipments()
    this.load()
    this.save()
  },
  updated(){
    this.shipmentFeeUpdate()
    this.save()
  }
};
</script>

<style lang="scss" src="../assets/styles/main-part.scss">
</style>