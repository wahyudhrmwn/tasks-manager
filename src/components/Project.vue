<template>
  <div class="project">
    <router-link :to="`/tasks/${project.id}`">
      View tasks
    </router-link>
    <h3>
      {{ project.name }}
    </h3>
    <p>
      {{ project.description }}
    </p>
    <div class="progress-bar">
      <div class="progress-bar-fill" :style="{
        width: project.completedPercentage + '%'
      }"></div>
    </div>
    <span>
      {{ project.completedPercentage }}% completed
    </span>
  </div>
</template>

<script setup>

defineProps({
  project: {
    type: Object,
    required: true
  }
})

</script>

<style lang="scss" scoped>
.project {
  display: flex;
  flex-direction: column;
  background-color: var(--white-color);
  color: var(--black-color);
  padding: 24px;
  border-radius: 12px;
  position: relative;
  max-width: 646px;
  width: 100%;

  &:hover {
    a {
      opacity: 1;
    }
  }

  a {
    position: absolute;
    top: 7px;
    right: 7px;
    color: #5297FF;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: left;

  }

  h3 {
    font-size: 16px;
    font-weight: 700;
    line-height: 21px;
    letter-spacing: 0em;
    text-align: left;
  }

  p {
    margin-top: 12px;
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: left;
  }

  .progress-bar {
    margin-top: 16px;
    width: 100%;
    height: 7px;
    background-color: #385682;
    border-radius: 100px;
    overflow: hidden;
  }

  .progress-bar-fill {
    height: 100%;
    background-color: #5297FF;
    border-radius: 100px;
  }

  span {
    text-align: center;
    margin-top: 10px;
    font-size: 10px;
    font-weight: 400;
    line-height: 13px;
    letter-spacing: 0em;
    text-align: center;
  }

}
</style>