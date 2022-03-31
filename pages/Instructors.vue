<template>
  <div>
    <h1>Instructors</h1>
    <input type="search" v-model="q" @input="$fetch" />
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
