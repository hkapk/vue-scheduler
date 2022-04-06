<template>
  <div>
    <div v-for="data in data" :key="data.date">
      <div>
        <span>
          <p>{{ data.date }}</p>
        </span>
        <div v-for="(time, index) in data.times" :key="time.index">
          <span>
            <button @click="greet">{{ time.time }}</button>
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
    }
  },
  methods: {
    //add to cart function here
    greet(event) {
      // `this` inside methods points to the current active instance
      alert(`Course Added!`)
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
