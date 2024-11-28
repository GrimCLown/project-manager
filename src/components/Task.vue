<template>
  <div class="flex">
    <!-- Main Content Section -->
    <div class="w-3/4 px-10 py-6">
      <!-- Create Task and Filters -->
      <div class="flex items-center justify-between mb-6">
        <button
          class="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500"
          @click="openModal"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 mr-2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
          Create Task
        </button>

        <div class="flex space-x-2 border rounded-md border-gray-300">
          <button
            class="px-4 py-2 text-sm font-semibold"
            :class="filter === 'All' ? 'text-green-700 border-b-2 border-green-400' : 'text-gray-500 hover:text-green-700'"
            @click="setFilter('All')"
          >
            All
          </button>
          <button
            class="px-4 py-2 text-sm font-semibold"
            :class="filter === 'Low' ? 'text-green-700 border-b-2 border-green-400' : 'text-gray-500 hover:text-green-700'"
            @click="setFilter('Low')"
          >
            Low
          </button>
          <button
            class="px-4 py-2 text-sm font-semibold"
            :class="filter === 'Medium' ? 'text-green-700 border-b-2 border-green-400' : 'text-gray-500 hover:text-green-700'"
            @click="setFilter('Medium')"
          >
            Medium
          </button>
          <button
            class="px-4 py-2 text-sm font-semibold"
            :class="filter === 'High' ? 'text-green-700 border-b-2 border-green-400' : 'text-gray-500 hover:text-green-700'"
            @click="setFilter('High')"
          >
            High
          </button>
        </div>
      </div>

      <!-- Task List -->
      <div class="text-lg font-bold mb-4">All Tasks</div>
      <div class="flex flex-wrap justify-center gap-10">
        <TaskCard
          v-for="task in filteredTasks"
          :key="task.id"
          :task="task"
          class="w-[300px]"
        />
      </div>
    </div>

    <!-- Modal: Create Task -->
    <div
      v-if="isModalOpen"
      class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
      @click.self="closeModal"
    >
      <div class="bg-white p-6 rounded-lg w-1/3 shadow-lg">
        <h3 class="text-xl font-bold mb-4">Create New Task</h3>
        <form @submit.prevent="submitTask">
          <div class="mb-4">
            <label for="project" class="block text-sm font-semibold">Project</label>
            <select
              v-model="newTask.project_id"
              id="project"
              class="w-full px-3 py-2 border rounded-md"
              required
            >
              <option value="" disabled>Select a project</option>
              <!-- Loop through the projects and create options dynamically -->
              <option v-for="project in projects" :key="project.id" :value="project.id">
                {{ project.name }}
              </option>
            </select>
          </div>
          <div class="mb-4">
            <label for="title" class="block text-sm font-semibold">Title</label>
            <input
              v-model="newTask.title"
              type="text"
              id="title"
              class="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>
          <div class="mb-4">
            <label for="priority" class="block text-sm font-semibold">Priority</label>
            <select
              v-model="newTask.priority"
              id="priority"
              class="w-full px-3 py-2 border rounded-md"
              required
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>
          <div class="mb-4">
            <label for="status" class="block text-sm font-semibold">Status</label>
            <select
              v-model="newTask.status"
              id="status"
              class="w-full px-3 py-2 border rounded-md"
              required
            >
              <option value="Open">Open</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
          <div class="mb-4">
            <label for="due_date" class="block text-sm font-semibold">Due Date</label>
            <input
              v-model="newTask.due_date"
              type="date"
              id="due_date"
              class="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div class="flex justify-between items-center">
            <button
              type="submit"
              class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500"
            >
              Save Task
            </button>
            <button
              type="button"
              @click="closeModal"
              class="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>

    <!-- Sidebar Section -->
    <div class="w-1/4 bg-white p-4 border-r">
      <!-- Profile Card -->
      <div class="flex items-center space-x-4 mb-6">
        <img
          class="w-16 h-16 rounded-full border-2 border-gray-400"
          src="https://via.placeholder.com/100"
          alt="User Avatar"
        />
        <div>
          <p class="text-gray-600">Hello,</p>
          <h2 class="text-xl font-bold">William Slatter</h2>
        </div>
      </div>

      <!-- Task Summary Statistics -->
      <div class="grid grid-cols-1 xl:grid-cols-2 gap-3 px-4 py-3">
        <div class="w-32 h-24 bg-gray-300 rounded-xl">
          <p>Total Tasks:</p>
          <p class="font-bold">{{ tasks.length }}</p>
        </div>
        <div class="w-32 h-24 bg-gray-300 rounded-xl">
          <p>In Progress:</p>
          <p class="font-bold">{{ inProgressTasks }}</p>
        </div>
        <div class="w-32 h-24 bg-gray-300 rounded-xl">
          <p>Open Tasks:</p>
          <p class="font-bold">{{ openTasks }}</p>
        </div>
        <div class="w-32 h-24 bg-gray-300 rounded-xl">
          <p>Completed:</p>
          <p class="font-bold">{{ completedTasks }}</p>
        </div>
      </div>

      <!-- Activity Summary -->
      <div class="bg-gray-50 p-4 rounded-lg shadow">
        <h3 class="text-center font-bold mb-4">Completed vs Pending Tasks</h3>
        <div class="flex justify-center mb-4">
          <!-- Placeholder for a circular chart (could use a chart library like Chart.js) -->
          <div class="w-24 h-24 relative">
            <div class="w-full h-full rounded-full bg-red-300 absolute top-0 left-0"></div>
            <div class="w-full h-full rounded-full bg-green-300 absolute top-0 left-0 clip-half"></div>
            <p class="absolute inset-0 flex items-center justify-center text-lg font-bold">
              {{ tasks.length }}
            </p>
          </div>
        </div>
        <p class="text-center text-sm text-gray-600">Task completion improved by 12% this month</p>
        <p class="text-center text-xs text-gray-500">Analysis based on tasks completed in the last 30 days.</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import TaskCard from "./TaskCard.vue"; // Assuming you have a TaskCard component

export default {
  components: {
    TaskCard,
  },
  data() {
    return {
      tasks: [],
      filter: "All",
      isModalOpen: false,
      newTask: {
        title: "",
        priority: "Low",
        status: "Open",
        due_date: "",
      },
    };
  },
  computed: {
    filteredTasks() {
      if (this.filter === "All") {
        return this.tasks;
      }
      return this.tasks.filter((task) => task.priority === this.filter);
    },
    inProgressTasks() {
      return this.tasks.filter((task) => task.status === "In Progress").length;
    },
    openTasks() {
      return this.tasks.filter((task) => task.status === "Open").length;
    },
    completedTasks() {
      return this.tasks.filter((task) => task.status === "Completed").length;
    },
  },
  created() {
    this.fetchTasks();
    this.fetchProjects();
  },
  methods: {
    async fetchProjects() {
      try {
        const response = await axios.get('http://localhost:3000/api/projects');
        this.projects = response.data;  // Assuming the API returns an array of projects
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    },
    async fetchTasks() {
      try {
        const response = await axios.get("http://localhost:3000/api/tasks");
        this.tasks = response.data;
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    },
    setFilter(filter) {
      this.filter = filter;
    },
    openModal() {
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
      // Reset the new task data
      this.newTask = {
        title: "",
        priority: "Low",
        status: "Open",
        due_date: "",
      };
    },
    async submitTask() {
      try {
        const response = await axios.post("http://localhost:3000/api/tasks", this.newTask);
        this.tasks.push(response.data); // Add the new task to the list
        this.closeModal(); // Close the modal after task is created
      } catch (error) {
        console.error("Error creating task:", error.response ? error.response.data : error.message);
      }
    },
  },
};
</script>

<style scoped>
/* Add any component-specific styles here */
.clip-half {
  clip-path: polygon(0 0, 100% 0, 100% 50%, 0 50%);
}
</style>
