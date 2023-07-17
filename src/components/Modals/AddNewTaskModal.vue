<template>
  <div class="inner">
    <h2>Add New Task</h2>
    <ModalCloseButton />

    <div class="form">
      <div class="form-item">
        <label for="title">
          Title *
        </label>
        <input type="text" v-model="task.name" id="title" placeholder="Title" />
      </div>
      <div class="form-item">
        <label for="description">
          Description *
        </label>
        <textarea id="description" v-model="task.description" placeholder="Description"></textarea>
      </div>
      <div class="form-item">
        <label for="project">
          Project *
        </label>
        <select id="project" v-model="task.project">
          <option v-for="(project, index) in projects" :key="index" :value="project.id">{{ project.name }}</option>
        </select>
      </div>

      <Button title="Add To-Do" color="secondary" @click="addTaskToStore()" />
    </div>

  </div>
</template>

<script setup>
import ModalCloseButton from "@/components/Modals/ModalCloseButton.vue";
import Button from "@/components/Button.vue";
import { useTaksManagerStore } from '@/stores/task-manger';
import { useModalStore } from "@/stores/modal";
import { ref } from "vue";

const store = useModalStore();

const { projects, addTask } = useTaksManagerStore()

const task = ref({
  name: '',
  description: '',
  project: ''
})

const addTaskToStore = () => {
  addTask(task.value)
  store.closeModal()

}

</script>

<style lang="scss" scoped></style>