var app = new Vue({
    el: '#app',
    data: {
        slugText: 'The Quick #(*!&@ Brown 29'
    },
    computed: {
        // now: function () {
        //     var date = new Date();
        //     return (
        //         String(date.getHours()) + 
        //         String(date.getMinutes()) +
        //         String(date.getSeconds())
        //     )
        // },
 
        slugetize: function () {
            return this.slugText
                .toLowerCase()
                .replace(/[^\w ]+/g, '')
                .replace(/ +/g, '-') + '-' + this.now();
        }
    },

    methods: {
        now: function () {
            var date = new Date();
            return (
                String(date.getHours()) + 
                String(date.getMinutes()) +
                String(date.getSeconds())
            )
        },
    }
});