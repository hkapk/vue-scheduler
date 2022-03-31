<script>
export default {
  async asyncData({ $content }) {
    const scheduleData = await $content('data').fetch()
    return { scheduleData }
  },
}
</script>

<template>
  <article>
    <nuxt-content :document="scheduleData" />
    test
    <pre> {{ scheduleData }} </pre>
  </article>
</template>
