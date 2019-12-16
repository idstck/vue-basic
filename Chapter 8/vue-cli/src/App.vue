<template>
  <div id="app" class="container">
    <h1>IDShop</h1>
    <navbar :cart="cart" :cartQty="cartQty" :cartTotal="cartTotal" @toggle="toggleSliderStatus" @delete="deleteItem"></navbar>
    <price-slider :sliderStatus="style.sliderStatus" :maximum.sync="maximum"></price-slider>
    <product-list :maximum="maximum" :products="products" @add="addItem"></product-list>
  </div>
</template>

<script>
import ProductList from './components/ProductList.vue';
import PriceSlider from './components/PriceSlider.vue';
import Navbar from './components/Navbar.vue';

export default {
  name: "app",
  data: function() {
    return {
      maximum: 50,
      products: [],
      cart: [],
      style: {
        sliderStatus: false,
      },
    }
  },
  components: {
    ProductList,
    PriceSlider,
    Navbar
  },
  mounted: function() {
    fetch('https://hplussport.com/api/products/order/price')
        .then(response => response.json())
        .then(data => {
            this.products = data;
        });
  },
  computed: {
    cartTotal: function () {
        let sum = 0;
        for (let key in this.cart) {
            sum = sum + (this.cart[key].product.price * this.cart[key].qty);
        }
        return sum;
    },
    cartQty: function () {
        let qty = 0;
        for (let key in this.cart) {
            qty = qty + this.cart[key].qty;
        }
        return qty;
    }
  },
  methods: {
    toggleSliderStatus: function() {
      this.style.sliderStatus = !this.style.sliderStatus;
    },
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
    deleteItem: function(id) {
      if(this.cart[id].qty > 1) {
          this.cart[id].qty--;
      } else {
          this.cart.splice(id, 1);
      }
    }
  }
};
</script>
