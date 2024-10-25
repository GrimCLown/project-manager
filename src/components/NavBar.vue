<template>
    <nav class="p-4 fixed w-full border-b border-background">
      <div class="container flex justify-between items-center">
        <!-- Logo -->
        <div class="hidden md:block w-1/3">
        <input
          class="w-full px-3 py-2 text-sm rounded-lg border focus:outline-none bg-white text-gray-800 border-gray-300 focus:ring-2 focus:ring-gray-400"
          placeholder="Search for anything..."
        />
      </div>

        <!-- Mobile Menu Button -->
        <div class="md:hidden flex items-center">
          <button @click="toggleMenu" class="text-white focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        
      </div>
  
      <!-- Mobile Menu -->
      <div v-if="isMenuOpen" class="md:hidden mt-2 space-y-2 px-2">
        <a href="#" class="block text-white hover:text-gray-200">Home</a>
        <a href="#" class="block text-white hover:text-gray-200">About</a>
        <a href="#" class="block text-white hover:text-gray-200">Services</a>
        <a href="#" class="block text-white hover:text-gray-200">Contact</a>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isMenuOpen: false
      };
    },
    methods: {
      toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
      }
    }
  };
  </script>
  
  <style scoped>
  /* You can add custom styles here if needed */
  </style>
  

<!-- <template>
    <h1 class="text-3xl font-bold underline">
        <input
            class="px-3 py-2 text-sm  rounded-lg border focus:outline focus:outline-1 focus:outline-none bg-[#ffffff] text-[#444444] focus:outline-[#aaaaaa] border-[#cccccc]"
            placeholder="Type your name.." fdprocessedid="9it06">
    </h1>
</template> -->