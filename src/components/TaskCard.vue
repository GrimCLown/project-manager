<template>

<div class="bg-white rounded-lg p-4 shadow-md">
    <div class="text-xs font-semibold mb-2 inline-block py-1 px-3 rounded-lg " :class="priorityClass">
      {{ task.priority }}</div>
    <h4 class="text-lg font-bold mb-2">{{ task.title }}</h4>
    <p class="text-gray-600 mb-4">{{ task.description }}</p>
    <div class="flex justify-between items-center">
      <div class="flex -space-x-2">
        <img src="" alt="User Avatar" class="w-6 h-6 rounded-full border-2 border-white">
        <img src="" alt="User Avatar" class="w-6 h-6 rounded-full border-2 border-white">
        <img src="" alt="User Avatar" class="w-6 h-6 rounded-full border-2 border-white">
      </div>
      <div class="text-sm text-gray-500">
        <span>comments {{ task.comments }}  </span>
        <span>0 files</span>
      </div>
    </div>
  </div>

</template>
  
  <script>
  export default {
    props: {
    task: {
      type: Object,
      required: true,
    },
    
  },
  computed: {
    priorityClass() {
      switch (this.task.priority) {
        case 'High':
          return 'bg-red-100 text-red-800';
        case 'Medium':
          return 'bg-yellow-100 text-yellow-800';
        case 'Low':
          return 'bg-green-100 text-green-800';
        default:
          return 'bg-gray-100 text-gray-800';
      }
    },
  },
  };

  </script>
  
  
  