var app = new Vue({
    el: '#app',
    data: {
        style: {
            label: ['font-weight-bold', 'mr-2']
        },
        maximum: 50,
        products: null,
        cart: []
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
            this.cart.push(product);
        }
    }
});