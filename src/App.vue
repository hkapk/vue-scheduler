<template>
<div class="container">
  <div class="row no-gutters m-4">
    <h1 class="col-12 col-sm-9 col-md-9 text-dark">ADD WEEKLY LESSON</h1>
    <button @click="navigateTo('cart')" class="button col-2 col-md-2 m-2"> CART ({{cart.length}})</button>
    </div>
    <div class="container m-2 p-4 border">
    <div class="row align-items-start">
    <button class="col text-primary" href="/Swimmers"> Swimmers </button>
    <button @click="navigateTo('courses')" class="col text-primary" href="/vue-scheduler/"> Days </button>
    <button class="col text-primary" href="/Instructors"> Instructors </button>
  </div>
  </div>
    
    <div v-if="page === 'cart'">
       <Cart :cart="cart" />
    </div>

    <div v-if="page === 'courses'">
    <WeeklySchedule v-on:addToCart="addToCart" />

    </div>
  </div>
</template>
<script>
import Cart from './components/Cart.vue'
import WeeklySchedule from './components/WeeklySchedule.vue'

export default {
  name: 'weeklySchedule',
  data() {
    return {
        firstTime: false,
        page: 'courses',
        cart: []
    };
  },
  methods: {
    //add to cart function here
    addToCart(time) {

     this.cart.push(time);
    },
    navigateTo(page) {
        this.page = page;
    },
    removeFromCart(course) {
        console.log("remove from cart Index:", this.cart.indexOf(course));
        this.cart.splice(this.cart.indexOf(course), 1);
    }
  },
components: {
  WeeklySchedule,
  Cart
}
};
</script>

<style>
button {
  border-color: blue;
  border-radius: 5px;
  color: blue;
}
.delete-button {
  border-color: red;
  border-radius: 5px;
  color: red;
}
.card {
  border-color: blue;
  border: 10px;
  margin: 10px;
}


</style>