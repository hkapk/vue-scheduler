<template>
  <div>
    <h1>Cart</h1>
      <div>
        <div v-for="data in data" :key="data.date">
          <div>
            <span> Date: {{ data.date }}</span>
            <div v-for="(time, index) in data.times" :key="time.index">
              <span> Times: {{ time.time }} </span>
            </div>
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
        async fetch() {
          this.data = await this.$content('data')
            .only(['date', 'times'])
            .sortBy('date')
            .where({ date: { $gt: '2021-02-10' } })
            .fetch()
        },
      }
    </script>
