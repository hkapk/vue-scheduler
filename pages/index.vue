<template>
  <div>
  <Header />
  <Swimmers />
  <Days />
  <Instructors />
  <weeklySchedule />
  </div>
</template>

<script>
import WeeklySchedule from '../components/WeeklySchedule.vue'
import Swimmers from '../components/Swimmers.vue'
import Days from '../components/Days.vue'
import Instructors from '../components/Instructors.vue'
import Header from '../components/Header.vue'
export default {
  components: {
    Header,
    WeeklySchedule,
    Swimmers,
    Days,
    Instructors
  }
}
</script>


