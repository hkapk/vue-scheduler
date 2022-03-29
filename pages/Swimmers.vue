<template>
<div>
  <h1> Swimmers </h1>
  <input type="search" v-model="q" @input="$fetch"/>
   <pre> {{ data }} </pre>
   </div>
</template>

<script>
export default {
  name: "studentList",
  data() {
    return {
      data: [],
      q: ''
    };
  },
   async fetch () {
    this.data = await this.$content('data/schedule_request')
    .only('students')
    .fetch()
  }
}

</script>

