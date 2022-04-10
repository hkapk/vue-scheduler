<template>
  <div>
    <h1>Days</h1>
    <div v-for="data in data" :key="data.date">
      <div>
        <span> Date: {{ data.date }}</span>
        <div v-for="(time, index) in data.times" :key="time.index">
          <span> Times: {{ time.time }} </span>
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
      q: '',
    }
  },
  async fetch() {
    this.data = await this.$content('data')
      .only(['date', 'times'])
      .sortBy('date')
      .where({ date: { $gte: '2021-02-10' } })
      .search(this.q)
      .fetch()
  },
}
</script>
