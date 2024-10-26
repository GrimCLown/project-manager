<template>
  <div class="flex">
    <!-- Main Content Section -->
    <div class="w-3/4 px-10 py-6">
      <!-- Create Task and Filters -->
      <div class="flex items-center justify-between mb-6">
        <button
          class="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500"
          @click="createTask"
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
            :class="
              filter === 'All'
                ? 'text-green-700 border-b-2 border-green-400'
                : 'text-gray-500 hover:text-green-700'
            "
            @click="setFilter('All')"
          >
            All
          </button>
          <button
            class="px-4 py-2 text-sm font-semibold"
            :class="
              filter === 'Low'
                ? 'text-green-700 border-b-2 border-green-400'
                : 'text-gray-500 hover:text-green-700'
            "
            @click="setFilter('Low')"
          >
            Low
          </button>
          <button
            class="px-4 py-2 text-sm font-semibold"
            :class="
              filter === 'Medium'
                ? 'text-green-700 border-b-2 border-green-400'
                : 'text-gray-500 hover:text-green-700'
            "
            @click="setFilter('Medium')"
          >
            Medium
          </button>
          <button
            class="px-4 py-2 text-sm font-semibold"
            :class="
              filter === 'High'
                ? 'text-green-700 border-b-2 border-green-400'
                : 'text-gray-500 hover:text-green-700'
            "
            @click="setFilter('High')"
          >
            High
          </button>
        </div>
      </div>

      <!-- Task List -->
      <div class="text-lg font-bold mb-4">All Tasks</div>
      <div class="flex flex-wrap gap-5">
        <TaskCard
          v-for="task in filteredTasks"
          :key="task.id"
          :task="task"
          class="w-[300px]"
        />
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
          <p class="font-bold">6</p>
        </div>
        <div class="w-32 h-24 bg-gray-300 rounded-xl">
          <p>In Progress:</p>
          <p class="font-bold">4</p>
        </div>
        <div class="w-32 h-24 bg-gray-300 rounded-xl">
          <p>Open Tasks:</p>
          <p class="font-bold">4</p>
        </div>
        <div class="w-32 h-24 bg-gray-300 rounded-xl">
          <p>Completed:</p>
          <p class="font-bold">2</p>
        </div>
      </div>
      <!-- <div class="grid mb-6">
        <div class="flex justify-between text-gray-700">
          <p>Total Tasks:</p>
          <p class="font-bold">6</p>
        </div>
        <div class="flex justify-between text-gray-700">
          <p>In Progress:</p>
          <p class="font-bold">4</p>
        </div>
        <div class="flex justify-between text-gray-700">
          <p>Open Tasks:</p>
          <p class="font-bold">4</p>
        </div>
        <div class="flex justify-between text-gray-700">
          <p>Completed:</p>
          <p class="font-bold">2</p>
        </div>
      </div> -->

      <!-- Activity Summary -->
      <div class="bg-gray-50 p-4 rounded-lg shadow">
        <h3 class="text-center font-bold mb-4">Completed vs Pending Tasks</h3>
        <div class="flex justify-center mb-4">
          <!-- Placeholder for a circular chart (could use a chart library like Chart.js) -->
          <div class="w-24 h-24 relative">
            <div
              class="w-full h-full rounded-full bg-red-300 absolute top-0 left-0"
            ></div>
            <div
              class="w-full h-full rounded-full bg-green-300 absolute top-0 left-0 clip-half"
            ></div>
            <p
              class="absolute inset-0 flex items-center justify-center text-lg font-bold"
            >
              6
            </p>
          </div>
        </div>
        <p class="text-center text-sm text-gray-600">
          Task completion improved by 12% this month
        </p>
        <p class="text-center text-xs text-gray-500">
          Analysis based on tasks completed in the last 30 days.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import TaskCard from "./TaskCard.vue"; // Assuming you have a TaskCard component

export default {
  components: {
    TaskCard,
  },
  data() {
    return {
      tasks: [
        { id: 1, name: "Buy groceries", priority: "Low" },
        { id: 2, name: "Finish report", priority: "High" },
        { id: 3, name: "Call plumber", priority: "Medium" },
        { id: 4, name: "Walk the dog", priority: "Low" },
        { id: 5, name: "Prepare presentation", priority: "High" },
        { id: 6, name: "Water the plants", priority: "Medium" },
      ],
      filter: "All",
    };
  },
  computed: {
    filteredTasks() {
      if (this.filter === "All") {
        return this.tasks;
      }
      return this.tasks.filter((task) => task.priority === this.filter);
    },
  },
  methods: {
    setFilter(filter) {
      this.filter = filter;
    },
    createTask() {
      // Here, you could add logic to create a new task, like opening a modal
      alert("Create Task button clicked!"); // Placeholder for real functionality
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
