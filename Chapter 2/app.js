var data = {
    imgClass: 'img-fluid',
    products: [
        {
            "id": "429",
            "name": "Strawberry Mineral Water",
            "description": "An 8-ounce serving of our refreshing H+ Sport strawberry mineral water fulfills a day's nutritional requirements for over 12 vitamins and minerals.",
            "price": "2.80",
            "image_title": "mineral-water-strawberry_600px",
            "image": "https://hplussport.com/wp-content/uploads/2015/12/mineral-water-strawberry_600px.png"
        },
        {
            "id": "440",
            "name": "Multi-Vitamin (90 capsules)",
            "description": "A daily dose of our Multi-Vitamins fulfills a day's nutritional needs for over 12 vitamins and minerals.",
            "price": "9.99",
            "image_title": "multi-vitamin_600px",
            "image": "https://hplussport.com/wp-content/uploads/2016/12/multi-vitamin_600px.png"
        },
        {
            "id": "528",
            "name": "Skater Graphic T-Shirt",
            "description": "Hip at the skate park or around down, our pre-shrunk organic cotton graphic T-shirt has you covered.",
            "price": "33",
            "image_title": "skater-knit-shirt_lynda_29939",
            "image": "https://hplussport.com/wp-content/uploads/2016/12/skater-knit-shirt_LYNDA_29939.jpg"
        },
        {
            "id": "479",
            "name": "In the Kitchen with H+ Sport",
            "description": "Henry Twill, founder and CEO of H+ Sport, teams up with celebrity nutritionist Jill Bayner, CNS, to bring you recipes and tips designed to maximize your athletic performance, whileÂ minimizing your time in the kitchen.",
            "price": "24.99",
            "image_title": "in-the-kitchen-with-h-book-cover",
            "image": "https://hplussport.com/wp-content/uploads/2016/12/In-the-Kitchen-with-H-book-cover.png"
        },
    ]
}

var app = new Vue({
    el: '#app',
    data: data
})