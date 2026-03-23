<script setup lang="ts">
defineEmits(['click'])
</script>
<template>
  <button @click="$emit('click', $event)">
    <img src="/Polygon.svg" alt="Следующий вопрос" />
  </button>
</template>

<style scoped>
button {
  height: 50px;
  width: 50px;
  cursor: pointer;
  background-color: transparent;
  border: 0;
  margin: auto;
  transform: translate(-50%, -50%);
}
img:hover {
  transform: translate(0px, 7px);
  filter: none;
}
img {
  filter: drop-shadow(0px 7px 0px #58cc02);
}
</style>
