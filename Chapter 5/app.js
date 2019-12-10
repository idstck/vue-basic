var app = new Vue({
    el: '#app',
    data: {
        style: {
            label: ['font-weight-bold', 'mr-2'],
            inputWidth: 60,
            sliderStatus: false,
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
    filters: {
        currencyFormat: function (value) {
            return 'Rp' + Number.parseFloat(value).toFixed(2);
        }
    },
    computed: {
        sliderState: function() {
            return this.style.sliderStatus ? 'd-flex' : 'd-none';
        },
        cartTotal: function () {
            let sum = 0;
            for (key in this.cart) {
                sum = sum + (this.cart[key].product.price * this.cart[key].qty);
            }
            return sum;
        },
        cartQty: function () {
            let qty = 0;
            for (key in this.cart) {
                qty = qty + this.cart[key].qty;
            }
            return qty;
        }
    },
    methods: {
        before: function (el) {
            el.className = 'd-none'
        },
        enter: function (el) {
            var delay = el.dataset.index * 100;
            setTimeout(function() {
                el.className = 'row d-flex mb-3 align-items-center animated fadeInRight'
            }, delay)
        },
        leave: function (el) {
            var delay = el.dataset.index * 100;
            setTimeout(function() {
                el.className = 'row d-flex mb-3 align-items-center animated fadeOutRight'
            }, delay)
        },
        addItem: function(product) {
            var productIndex;
            var productExist = this.cart.filter(function(item, index) {
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
});