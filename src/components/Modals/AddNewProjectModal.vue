<template>
  <div class="inner">
    <h2>Add New Project</h2>
    <ModalCloseButton />

    <div class="form">
      <div class="form-item">
        <label for="title">
          Title *
        </label>
        <input type="text" v-model="project.name" id="title" placeholder="Title" />
      </div>
      <div class="form-item">
        <label for="description">
          Description *
        </label>
        <textarea id="description" v-model="project.description" placeholder="Description"></textarea>
      </div>

      <Button title="Add Project" color="secondary" @click="addProjectToStore()" />
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

const { addProject } = useTaksManagerStore()

const project = ref({
  name: '',
  description: '',
})

const addProjectToStore = () => {
  addProject(project.value)
  store.closeModal()
}

</script>

<style lang="scss" scoped></style>