<script setup lang="ts">
import AnswerComponent from './AnswerComponent.vue';
const props = defineProps<{
answers: string[]
id: number
choice: number | undefined
correct: number
}>()
const emit = defineEmits<{
  click: [value: number]
}>()
const checkAnswers = (index: number) => {
  if (props.choice === undefined) return undefined
  if (index + 1 === props.correct) return true
  if (index === props.choice) return false
  return undefined
}
</script>
<template>
  <div>
    <AnswerComponent v-for="(src, n) in answers"
                     :key="n"
                     :src="src"
                     :id="id"
                     :correct="checkAnswers(n)"
                     :disabled="choice !== undefined"
                     @click="emit('click', n)"/>
  </div>
</template>
<style scoped>
div {
  display: flex;
  justify-content: space-evenly;
}
</style>
