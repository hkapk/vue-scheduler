<template>
  <div class="container border">
    <div class="row">
    <div class="col-sm-2" v-for="data in data" :key="data.date">
        <span>
          <div class="border-bottom m-2">{{ data.date }}</div>
        </span>
        <div v-for="(time) in data.times" :key="time.index">
          <span class="">
            <div class="col-sm-2">
            <b-button class="col m-1" variant="outline-primary" @click="addToCart(time.index)">{{ time.time }}</b-button>
            </div>
          </span>
      </div>
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
    addToCart() {
      let data = this.data
      // `this` inside methods points to the current active instance
      console.log(this.data, "data");
      alert(`added to cart`)

    },
  },
  async fetch() {
    this.data = await this.$content('data')
      .only(['date', 'times'])
      .sortBy('date')
      .where({ date: { $gt: '2021-02-10' } })
      .fetch()
  },
}
</script>
