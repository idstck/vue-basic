var app = new Vue({
    el: '#app',
    data: {
        slugText: 'The Quick #(*!&@ Brown 29'
    },
    computed: { 
        slugetize: function () {
            return this.slugText
                .toLowerCase()
                .replace(/[^\w ]+/g, '')
                .replace(/ +/g, '-');
        }
    },
});