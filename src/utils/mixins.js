export const priceFilter = {
  filters: {
    showPrice(price) {
      return price === 0 ? '免費' : `$${price.toLocaleString("en-US")}`;
    },
  },
}