<script>
export default {
  data () {
    return {
      data: [],
      q: ''
    }
  },
  async fetch () {
    this.data = await this.$content('data')
    .only(['date', 'times'])
    .sortBy('times')
    .where({ times: { $gte: '16:00:00' } })
    .fetch()
  }
}
</script>

<template>
  <pre> {{ data }} </pre>
</template>
