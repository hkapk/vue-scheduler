<template>
  <div>
  <h1> ADD WEEKLY LESSON </h1>
  <pre> {{ data }} </pre>
  </div>
</template>

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
    .fetch()
  }
}
</script>
