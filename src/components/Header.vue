<template>
  <div class="header">
    <div class="header-side">
      <component v-if="icon" :is="icon" />
      <h1>
        {{ title }}
      </h1>
    </div>
    <div class="header-side">
      <Button v-if="navTo" :to="navTo" :title="navText" color="gray" />
      <Button :title="cta" color="secondary" />
    </div>
  </div>
</template>

<script setup>

import Button from './Button.vue';

defineProps({
  title: {
    type: String,
    default: 'Title'
  },
  icon: {
    required: false
  },
  cta: {
    type: String,
    default: 'mdi-plus'
  },
  navText: {
    type: String,
    default: 'Home'
  },
  navTo: {
    type: String,
  }
})
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;

  .header-side {
    display: flex;
    align-items: center;

    h1 {
      text-transform: capitalize;
      font-size: 36px;
      font-weight: 700;
      line-height: 47px;
      letter-spacing: 0em;
      text-align: left;
      margin-left: 10px;
    }

    .secondary {
      margin-left: 12px;
    }
  }


}
</style>