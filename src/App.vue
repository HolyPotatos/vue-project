<script setup lang="ts">
import NavigationComponent from './components/NavigationComponent.vue'
import QuestionComponent from './components/QuestionComponent.vue'
import AnswersComponent from './components/AnswersComponent.vue'
import NextComponent from './components/NextComponent.vue'
</script>

<template>
  <div style="position: relative">
    <img src="/flowers-left.svg" alt="" class="decor decor-left" />
    <img src="/flowers-right.svg" alt="" class="decor decor-right" />
    <div class="container">
      <NavigationComponent :total="10" :current="2" />
      <div class="question">
        <div style="flex: 1"></div>
        <QuestionComponent style="flex: 2.2" />
        <div class="btn">
          <NextComponent :visible="true" />
        </div>
      </div>
      <div class="answers">
        <AnswersComponent src="/ans1.jpg" :id="11" />
        <AnswersComponent src="/ans2.jpg" :id="12" :correct="true" />
        <AnswersComponent src="/ans3.jpg" :id="13" :correct="false" />
        <AnswersComponent src="/ans4.jpg" :id="14" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  position: relative;
  background: linear-gradient(45deg, #003dce, #15aaff, #003dce);
  box-shadow: 7px 7px 0 0 #0060d9;
  border-radius: 51px;
  padding-top: 5px;
  z-index: 10;
}
div.answers {
  display: flex;
  justify-content: space-between;
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
  transform: translate(-58%, -37%);
}
.decor-right {
  right: 0;
  transform: translate(50%, -90%);
}
</style>
