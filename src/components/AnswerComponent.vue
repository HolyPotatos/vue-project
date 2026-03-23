<script setup lang="ts">
defineProps({
  src: {
    type: String,
  },
  id: {
    type: Number,
    default: -1,
  },
  correct: {
    type: Boolean,
    default: undefined,
  },
  disabled:{
    type: Boolean,
    default: false
  }
})
</script>
<template>
  <div :class="{ 'img--correct': correct,
                 'img--wrong': correct === false,
                 'img--disabled': disabled}">
    <img role="button" tabindex="0" :src="src" />
  </div>
</template>
<style scoped>
div {
  position: relative;
  height: 250px;
  width: 200px;
  border-radius: 20px;
  margin: 0 20px 50px 20px;
}
img {
  height: 100%;
  width: 100%;
  border-radius: 20px;
  object-fit: cover;
  object-position: center;
  user-select: none;
  pointer-events: none;
}
div:hover {
  transform: translate(-10px, -10px);
  box-shadow: 10px 10px 0 0 #004baa;
  cursor: pointer;
}
.img--disabled, .img--correct,  .img--wrong{
  transform: none;
  pointer-events: none;
}
.img--correct {
  outline: 10px solid #66ff31;
}
.img--wrong {
  outline: 10px solid #ff0f8e;
}
.img--correct::after,
.img--wrong::after {
  position: absolute;
  top: -65px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 40px;
  font-weight: bold;
}
.img--correct::after {
  content: '✔';
  color: #66ff31;
}
.img--wrong::after {
  content: '✖';
  color: #ff0f8e;
}
</style>
