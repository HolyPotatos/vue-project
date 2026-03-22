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
})
</script>
<template>
  <div :class="{ 'img--correct': correct, 'img--wrong': correct === false }">
    <img :src="src" />
  </div>
</template>
<style scoped>
div {
  height: 250px;
  width: 200px;
  border-radius: 20px;
  margin-bottom: 50px;
  overflow: hidden;
}
img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
  user-select: none;
  pointer-events: none;
}
div:hover {
  transform: translate3d(-10px, -10px, 0px);
  box-shadow: 10px 10px 0 0 #004baa;
  cursor: pointer;
}
.img--correct {
  border: 10px solid #66ff31;
}
.img--wrong {
  border: 10px solid #ff0f8e;
}
</style>
