<template>
  <div id="app" class="container">
    <h1>IDShop</h1>
    <product-list v-bind:maximum="maximum" :products="products" @add="addItem"></product-list>
  </div>
</template>

<script>
// import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import ProductList from './components/ProductList.vue';

export default {
  name: "app",
  data: function() {
    return {
      maximum: 50,
      products: [],
      cart: []
    }
  },
  components: {
    // FontAwesomeIcon, 
    ProductList
  },
  mounted: function() {
    fetch('https://hplussport.com/api/products/order/price')
        .then(response => response.json())
        .then(data => {
            this.products = data;
        });
  },
  methods: {
    addItem: function(product) {
        let productIndex;
        let productExist = this.cart.filter(function(item, index) {
            if (item.product.id == Number(product.id)) {
                productIndex = index;
                return true;
            } else {
                return false;
            }
        });

        if (productExist.length) {
            this.cart[productIndex].qty++
        } else {
            this.cart.push({product: product, qty: 1});
        }
    },
  }
};
</script>
