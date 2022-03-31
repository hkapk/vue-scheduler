<template>
  <div>
    <h1>Cart</h1>
    <ul>
      <li v-for="data in data" :key="data.date">
        Date:
        {{ data.date }}
      </li>
    </ul>
    <pre> {{ data }} </pre>
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
