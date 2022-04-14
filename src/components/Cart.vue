<template>
<div>
   <h1 class="container border"> Cart</h1>
        <div class="container border">
            <div class="card" v-for="(course, index) in cart" :key="index">  
              <p> {{course.time}}</p><button class="delete-button col-sm-1 m-1" variant="outline-primary" @click="removeFromCart(course)">Delete</button>    
               <div v-for="start_date in course.students" :key="start_date.index">
              {{ start_date.start_date }}
              </div>
            </div>
        </div>
</div>
</template>

<script>
export default {
  props: ["cart"]
};
</script>
