<template>
  <div class="flex flex-col h-screen">
    <!-- Header -->
    <div class="basis-auto p-[40px] flex flex-col gap-y-[40px]">
      <div class="flex justify-between">
        <div class="flex items-center">
          <h1 class="text-4xl font-semibold">{{ projectName }}</h1>
          <!-- Icons and other controls -->
        </div>
      </div>
      <div class="flex items-center justify-between gap-2">
        <div class="flex gap-2">
          <!-- Filter and Today buttons -->
        </div>
        <button class="border-inherit p-2 border rounded-md flex gap-2 items-center text-[#4A4A4A]">
          <!-- Share button with icons -->
        </button>
      </div>
    </div>

    <!-- Loading State -->
    <div v-if="loading" class="flex justify-center items-center h-full">
      <p class="text-lg">Loading tasks...</p>
    </div>

    <!-- Task Lists -->
    <div v-else class="flex flex-grow flex-wrap gap-4 justify-between px-[40px]">
      <TaskList v-for="(tasks, status) in groupedTasks" 
                :key="status"
                :title="status"
                :tasks="tasks" />
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import TaskList from './TaskList.vue';

export default {
  components: {
    TaskList,
  },
  data() {
    return {
      projectName: '',  // Project Name (can be fetched from the backend as well)
      groupedTasks: {
        Todo: [],
        'In Progress': [],
        Done: [],
      },
      loading: false, // Loading state
    };
  },
  mounted() {
    this.fetchTasks();
  },
  watch: {
    '$route.params.id': 'fetchTasks', // Automatically re-fetch tasks when projectId changes
  },
  methods: {
    async fetchTasks() {
      this.loading = true; // Start loading

      const projectId = this.$route.params.id;
      if (!projectId) {
        return this.handleError('Project ID is missing');
      }

      try {
        const response = await axios.get(`http://localhost:3000/api/tasks/project/${projectId}`);
        const tasks = response.data;

        // Separate tasks based on their status
        this.groupTasksByStatus(tasks);

        // Optionally fetch project name if required
        // this.projectName = response.data.projectName; 

      } catch (error) {
        this.handleError(error.message);
      } finally {
        this.loading = false; // Stop loading
      }
    },
    groupTasksByStatus(tasks) {
      this.groupedTasks.Todo = tasks.filter(task => task.status === 'Todo');
      this.groupedTasks['In Progress'] = tasks.filter(task => task.status === 'In Progress');
      this.groupedTasks.Done = tasks.filter(task => task.status === 'Done');
    },
    handleError(message) {
      console.error('Error:', message);
      // You can also implement an error display mechanism here
    },
  },
};
</script>

<style scoped>
/* Add any necessary styles here */
</style>
