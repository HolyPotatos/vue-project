<script setup lang="ts">
defineProps({
  visible: {
    type: Boolean,
    default: true,
  },
})
defineEmits(['click'])
</script>
<template>
  <button v-if="visible" @click="$emit('click', $event)">
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
}
button:hover {
  transform: scale(1.05);
}
</style>
