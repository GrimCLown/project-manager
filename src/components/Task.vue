<template>
    <div class="bg-white p-6 rounded-lg shadow-md">
      <h2 class="text-xl font-semibold mb-4">Task List</h2>
      <ul class="space-y-2">
        <li v-for="task in tasks" :key="task.id" class="flex items-center justify-between p-4 bg-gray-100 rounded-md shadow-sm">
          <span>{{ task.name }}</span>
          <span :class="task.completed ? 'text-green-600' : 'text-red-600'">{{ task.completed ? 'Completed' : 'Pending' }}</span>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        tasks: [
          { id: 1, name: 'Complete Vue assignment', completed: true },
          { id: 2, name: 'Write project report', completed: false },
          { id: 3, name: 'Review pull requests', completed: true },
          { id: 4, name: 'Prepare for meeting', completed: false }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  /* Add any component-specific styles here */
  </style>
  