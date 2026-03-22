<script setup lang="ts">
defineProps({
  text: {
    type: String,
    default:
      'Начинаем с простенького. Судя по мультфильму, Чебурашка и Гена много гуляли и ходили пешком. А вот если бы они устали, то могли бы спокойно воспользоваться любым другим способом передвижения, кроме одного. Какого?',
  },
})
</script>

<template>
  <p>{{ text }}</p>
</template>
<style scoped>
p {
  font-weight: 600;
  color: white;
  text-align: center;
  font-size: 22px;
  width: 50%;
  margin: 50px auto;
}
</style>
