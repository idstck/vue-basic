<template>
    <div>
        <h1>IDShop</h1>
        <navbar :cart="cart" :cartQty="cartQty" :cartTotal="cartTotal"></navbar>
        <price-slider :sliderStatus=" sliderStatus"></price-slider>
        <product-list :maximum="maximum" :products="products"></product-list>
    </div>
</template>

<script>
import ProductList from './ProductList.vue';
import PriceSlider from './PriceSlider.vue';
import Navbar from './Navbar.vue';

export default {
    name: "products",
    props: [
        "products", 
        "maximum", 
        "cart", 
        "cartQty", 
        "cartTotal", 
        "sliderStatus", 
        "sliderState"
    ],
    components: {
        Navbar,
        PriceSlider,
        ProductList,
    }
}
</script>