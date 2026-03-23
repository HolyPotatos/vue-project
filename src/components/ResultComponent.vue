<script setup lang="ts">
defineProps<{
  total:number
  correct:number
}>()
</script>
<template>
  <div>
    Вы прошли тест на {{ correct }}/{{ total }}
  </div>
</template>
<style scoped>
div{
  display: flex;
  padding-bottom: 70px;
  justify-content: center;
  align-items: center;
  height: 300px;
  width: 800px;
  font-weight: 600;
  color: white;
  text-align: center;
  font-size: 22px;
  margin: 80px auto;
  white-space: pre-wrap;
}
</style>
