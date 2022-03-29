<template>
  <div>
  <h1> ADD WEEKLY LESSON </h1>
  <button> Cart </button>
  <Swimmers />
  <Days />
  <Instructors />
  <WeeklySchedule />
  </div>
</template>

<script>
import WeeklySchedule from '../components/WeeklySchedule.vue'
import Swimmers from '../components/Swimmers.vue'
import Days from '../components/Days.vue'
import Instructors from '../components/Instructors.vue'
export default {
  components: {
    WeeklySchedule,
    Swimmers,
    Days,
    Instructors
  }
}
</script>


