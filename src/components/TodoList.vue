<script setup lang="ts">

import {computed, ref} from "vue";
import axios from "axios";


const text = ref<string>('')

const array = ref([])
const error = ref()


const submit = () => {
  axios.post('http://127.0.0.1:8000/todo/api/', {title: text.value})
      .then((response) => {
        array.value.push(response.data);
        text.value = ""
        console.log(response)
      }).catch((error) => {
    error.value = error.response.data
    console.log(error.response.data)
  }).finally(() => {

  })
}
</script>

<template>
  <div class="tw-flex tw-justify-center tw-mt-16">
    <div class="tw-w-1/3">
      <div class="tw-flex tw-flex-col ">
        <input type="text" placeholder="Enter your task" class="input" v-model="text"/>
        <button class="tw-mt-2" @click="submit">Add</button>
        <ol v-for="todo in array" :key="id" class="tw-mt-5">
          <li>
            {{ todo.title }}
          </li>
        </ol>
      </div>
    </div>
  </div>

</template>

<style scoped>
.input {
  border: 1px solid black;
  border-radius: 5px;
  padding: 5px;
}

button {
  background: purple;
  border-radius: 10px;
  color: white;
  padding: 4px 0px 4px 0px;
}
</style>