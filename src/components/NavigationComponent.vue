<script setup lang="ts">
defineProps({
  total: {
    type: Number,
    default: 10,
  },
  current: {
    type: Number,
    default: 3,
  },
})
</script>
<template>
  <div class="bar">
    <div v-for="n in total" :key="n" class="segment" :class="{ active: n <= current }">
      <div :class="{ mrk: n != 1 }"></div>
    </div>
  </div>
</template>
<style scoped>
.bar {
  display: grid;
  width: 80%;
  margin: 40px auto;
  height: 6px;
  background-color: #0096ec;
  border-radius: 20px;
  grid-template-columns: repeat(v-bind(total), 1fr);
}
.active {
  background-color: #6bff2f;
}
.segment {
  position: relative;
}
.segment:last-child {
  border-radius: 0 20px 20px 0;
}
.segment:first-child {
  border-radius: 20px 0 0 20px;
}
.mrk {
  position: absolute;
  left: -1px;
  top: 6px;
  width: 2px;
  height: 12px;
  background-color: #0096ec;
}
</style>
