<script setup lang="ts">
defineProps({
  text: {
    type: String,
    default:
      'Начинаем с простенького.\nСудя по мультфильму, Чебурашка и Гена много гуляли и ходили пешком. А вот если бы они устали, то могли бы спокойно воспользоваться любым другим способом передвижения, кроме одного. \nКакого?',
  },
})
</script>

<template>
  <div>
    <p>{{ text }}</p>
  </div>
</template>
<style scoped>
div{
  height: 230px;
}
p {
  font-weight: 600;
  color: white;
  text-align: center;
  font-size: 22px;
  margin: 80px auto;
  white-space: pre-wrap;
}
</style>
