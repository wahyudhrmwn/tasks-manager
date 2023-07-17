<script setup>
import { ref, computed } from 'vue';
import { storeToRefs } from 'pinia';
import Header from '../components/Header.vue';
import File from '../components/Icons/File.vue';
import { useTaksManagerStore } from '../stores/task-manger';
import Task from '../components/Task.vue';
import { useRoute } from 'vue-router';
import Filter from '../components/Filter.vue';

const store = useTaksManagerStore()
const { tasks, projects } = storeToRefs(store)
const { filterTasksByProjectsAndStates } = store
const route = useRoute()

const selectedProjects = ref(
  route.params.id ? [route.params.id] : []
);
const selectedStates = ref([]);

const filteredTasks = computed(() => {
  return filterTasksByProjectsAndStates(selectedProjects.value, selectedStates.value);
});



</script>

<template>
  <main class="container">
    <Header title="Task Manager" :icon="File" cta="+ Add New Task" nav-text="Projects" nav-to="/projects" />

    <div class="filters">
      <Filter title="Filter by project" :data="projects" v-model="selectedProjects" />
      <Filter title="Filter by state" :data="[{
        id: false,
        name: 'To-Do'
      }, {
        id: true,
        name: 'Done'
      }]" v-model="selectedStates" />
    </div>

    <div class="tasks">
      <Task v-for="(task, index) in filteredTasks" :key="index" :task="task" />
    </div>

  </main>
</template>

<style lang="scss" scoped>
.tasks {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>