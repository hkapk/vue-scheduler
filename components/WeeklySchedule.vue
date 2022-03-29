<script>
export default {
  name: "weeklySchedule",
  data() {
    return {
      data: []
    };
  },
   async fetch () {
    this.data = await this.$content('data')
    .only(['date', 'times'])
    .sortBy('date')
    .where({ date: { $gte: '2021-02-10' } })
    .fetch()
  }
}

</script>

<template>
   <pre> {{ data }} </pre>
</template>
