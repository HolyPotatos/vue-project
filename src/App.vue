<script setup lang="ts">
import NavigationComponent from './components/NavigationComponent.vue'
import QuestionComponent from './components/QuestionComponent.vue'
import AnswersComponent from './components/AnswersComponent.vue'
import NextComponent from './components/NextComponent.vue'
import ResultComponent from './components/ResultComponent.vue'

import data from './data/data.json'
import { computed, ref } from 'vue'

const current = ref(1)
const currentQuestion = computed(() => data[current.value - 1])
const choice = ref<number>()
const correct = ref(0)
const choiceHandler = (value: number) => {
  choice.value = value
  if(currentQuestion.value?.correct === value + 1){
    correct.value += 1
  }
}
</script>

<template>
  <div style="position: relative">
    <img src="/flowers-left.svg" alt="" class="decor decor-left" />
    <img src="/flowers-right.svg" alt="" class="decor decor-right" />
    <div class="container">
      <NavigationComponent :total="data.length" :current="current" />
      <div class="question">
        <div style="flex: 1"></div>
        <QuestionComponent v-if="currentQuestion" :text="currentQuestion.text" style="flex: 2.2" />
        <div class="btn">
          <NextComponent v-if="choice !== undefined" @click="() => {
            choice = undefined
            current += 1
          }"/>
        </div>
      </div>
      <AnswersComponent v-if="currentQuestion"
                        @click="choiceHandler"
                        :correct="currentQuestion.correct"
                        :choice="choice"
                        :answers="currentQuestion.answers"
                        :id="currentQuestion.id"/>
      <ResultComponent v-if="!currentQuestion" :total="data.length" :correct="correct"/>
    </div>
  </div>
</template>

<style scoped>
.container {
  position: relative;
  background: linear-gradient(45deg, #003dce, #15aaff, #003dce);
  box-shadow: 7px 7px 0 0 #0060d9;
  border-radius: 51px;
  height: 600px;
  min-width: 1024px;
  padding: 5px 40px;
  z-index: 10;
}
div.answers {
  width: 90%;
  margin: 0 auto;
  padding: 40px 0;
  border-radius: 0;
}
div.question {
  display: flex;
  align-items: center;
}
div.btn {
  display: flex;
  flex: 1;
}
.decor {
  position: absolute;
  top: 50%;
  z-index: 1;
  pointer-events: none;
}
.decor-left {
  left: 0;
  transform: translate(-50%, -35%) scale(0.8);
}
.decor-right {
  right: 0;
  transform: translate(50%, -80%) scale(0.8);
}
</style>
