<template>
  <div class="task">
    <h3>
      {{ task.name }}
    </h3>
    <p>
      {{ task.description }}
    </p>
    <span>
      {{ task.project.name }}
    </span>
    <div class="task-check">
      <input type="checkbox" :id="task.id" :checked="task.completed" @change="updateTaskStatus" />
      <label :for="task.id">
        {{ task.completed ? 'Done' : 'To-Do' }}
      </label>
    </div>
  </div>
</template>

<script setup>
import { useTaksManagerStore } from '../stores/task-manger';

const { updateTaskState } = useTaksManagerStore()

const props = defineProps({
  task: {
    type: Object,
    required: true
  }
})

const updateTaskStatus = (event) => {
  updateTaskState(props.task.id, event.target.checked)
}

</script>

<style lang="scss" scoped>
.task {
  display: flex;
  flex-direction: column;
  background-color: var(--white-color);
  color: var(--black-color);
  padding: 16px;
  border-radius: 12px;

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

  span {
    margin-top: 12px;
    background-color: var(--gray-color);
    border-radius: 6px;
    width: fit-content;
    padding-inline: 14px;
    font-size: 10px;
    font-weight: 400;
    line-height: 13px;
    letter-spacing: 0em;
    text-align: left;
  }

  .task-check {
    align-self: end;
    display: flex;
    align-items: center;


    label {
      font-size: 12px;
      font-weight: 400;
      line-height: 16px;
      letter-spacing: 0em;
      text-align: left;
      margin-left: 5px;
      cursor: pointer;
    }

    input {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 18px;
      height: 18px;
      border-radius: 100%;
      border: 0.77px solid #AEAEB2;
      appearance: none;
      cursor: pointer;


      &:checked {
        background-color: #0A7AFF;
        border-color: #0A7AFF;

        &::before {
          content: '';
          display: block;
          width: 4.5px;
          height: 9px;
          border: solid white;
          border-width: 0 2px 2px 0;
          transform: rotate(45deg);
        }
      }
    }
  }
}
</style>