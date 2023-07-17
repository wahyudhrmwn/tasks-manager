<script setup>
import Header from '../components/Header.vue';
import File from '../components/Icons/File.vue';
import { useTaksManagerStore } from '../stores/task-manger';
import { useFilter } from '../composables/useFilter';
import Project from '../components/Project.vue';

const { projects, tasks } = useTaksManagerStore()
const { filteredTasks } = useFilter()

</script>

<template>
  <main class="container">
    <Header title="Project Overview" cta="+ Add New Project" nav-text="Home" nav-to="/tasks" />

    <div class="projects">
      <Project v-for="(project, index) in projects" :key="index" :project="project" />
    </div>

  </main>
</template>

<style lang="scss" scoped>
.projects {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 20px;
}
</style>