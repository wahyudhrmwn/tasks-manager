import { useTaksManagerStore } from "../stores/task-manger";
import { computed } from "vue";

export function useFilter() {
  const { projects, tasks } = useTaksManagerStore();

  const filteredTasks = computed(() => {
    return (projectId, state) => {
      if (!projectId && !state) {
        return tasks;
      }

      return tasks.filter((task) => {
        const matchesProject = !projectId || task.projectId === projectId;
        const matchesState = !state || task.completed === state;
        return matchesProject && matchesState;
      });
    };
  });

  const filteredProjects = computed(() => {
    return (state) => {
      if (!state) {
        return projects;
      }

      return projects.filter((project) => project.state === state);
    };
  });

  return { filteredTasks, filteredProjects };
}
