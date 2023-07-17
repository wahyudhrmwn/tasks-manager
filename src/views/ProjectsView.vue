<script setup>
import { ref, computed } from 'vue';
import { storeToRefs } from 'pinia';
import Header from '@/components/Header.vue';
import { useTaksManagerStore } from '@/stores/task-manger';
import Project from '@/components/Project.vue';
import { useModalStore } from '@/stores/modal';
import Filter from '@/components/Filter.vue';

const store = useTaksManagerStore()
const { filterProjectsByStates } = store

const { openAddProjectModal } = useModalStore();
const selectedStates = ref([]);

const filteredProjects = computed(() => {
  return filterProjectsByStates(selectedStates.value);
});


</script>

<template>
  <main class="container">
    <Header title="Project Overview" cta="+ Add New Project" nav-text="Home" nav-to="/tasks"
      @click="openAddProjectModal" />

    <div class="filters">
      <Filter title="Filter by state" :data="[{
        id: false,
        name: 'Open'
      }, {
        id: true,
        name: 'Complete'
      }]" v-model="selectedStates" />
    </div>

    <div class="projects" v-if="filteredProjects && filteredProjects.length">
      <Project v-for="(project, index) in filteredProjects" :key="index" :project="project" />
    </div>
    <p v-else>
      No projects yet. Click on the button above to add one.
    </p>

  </main>
</template>

<style lang="scss" scoped>
.projects {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 20px;
}
</style>