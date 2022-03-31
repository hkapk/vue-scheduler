<script>
export default {
  name: 'studentList',
  data() {
    return {
      data: [],
      q: '',
    }
  },
  async fetch() {
    this.data = await this.$content('data/schedule_request')
      .only(['students'])
      .sortBy('first_name')
      .fetch()
  },
}
</script>

<template>
  <div>
    <h1>Swimmers</h1>
    <input type="search" v-model="q" @input="$fetch" />
    <ul>
      <li v-for="data in data" :key="data.first_name">
        {{ data }}
      </li>
    </ul>
    <pre> {{ data }} </pre>
  </div>
</template>
