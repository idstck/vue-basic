<template>
  <div id="app" class="container mt-5">
    <h1>IDShop</h1>
    <p class="animated fadeInRight">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quasi dolores sunt dolorem omnis amet eaque odio! Velit eaque culpa, adipisci molestiae sed nihil, totam quisquam ad ut aspernatur architecto.</p>
    <font-awesome-icon icon="shopping-cart"></font-awesome-icon>
    <price value="4.23"></price>
  </div>
</template>

<script>
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import Price from './components/Price.vue';

export default {
  name: "app",
  components: {
    FontAwesomeIcon, 
    Price
  }
};
</script>
