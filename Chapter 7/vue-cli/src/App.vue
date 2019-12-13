<template>
  <div id="app" class="container">
    <h1>IDShop</h1>
    <product-list v-bind:maximum="maximum" :products="products"></product-list>
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
      products: []
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
};
</script>
