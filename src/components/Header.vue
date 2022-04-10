<template>
<div class="container">
  <div class="row no-gutters m-4">
    <h1 class="col-12 col-sm-9 col-md-9 text-dark">ADD WEEKLY LESSON</h1>
    <b-button class="col-2 col-md-2 m-2" href="/Cart"> <b-icon icon="cart" font-scale="1"></b-icon> CART </b-button>
    </div>
    <div class="container m-2 p-4 border">
    <div class="row align-items-start">
    <a class="col text-primary" href="/Swimmers"> Swimmers </a>
    <a class="col text-primary" href="/Days"> Days </a>
    <a class="col text-primary" href="/Instructors"> Instructors </a>
  </div>
  </div>
  </div>
</template>

<script>
export default {
    name: 'weeklySchedule',
  data() {
    return {
      data: [],
    };
  },
  methods: {
    //add to cart function here
    countStudents() {
      let data = this.data
      // `this` inside methods points to the current active instance
      console.log(this.data, "data");
      alert(`number of students button`)

    },
  },
  async fetch() {
    this.data = await this.$content('data')
      .only(['students'])
      .sortBy('first_name')
      .where({ first_name: { $gt: 'First' } })
      .fetch()
  },
}
</script>
