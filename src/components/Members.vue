<template>
    <div class="bg-white p-6 rounded-lg shadow-md">
      <h2 class="text-xl font-semibold mb-4">Members List</h2>
      <ul class="space-y-2">
        <li v-for="member in members" :key="member.id" class="flex items-center justify-between p-4 bg-gray-100 rounded-md shadow-sm">
          <span>{{ member.name }}</span>
          <span class="text-gray-500 text-sm">{{ member.email }}</span>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        members: [
          { id: 1, name: 'John Doe', email: 'john@example.com' },
          { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
          { id: 3, name: 'Alice Johnson', email: 'alice@example.com' },
          { id: 4, name: 'Bob Brown', email: 'bob@example.com' },
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  /* Add any component-specific styles here */
  </style>
  