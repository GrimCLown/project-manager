<template>
  <div class="flex h-screen">
    <!-- Sidebar -->
    <div
      :class="isSidebarOpen ? 'w-64' : 'w-16'"
      class="bg-white border-r border-gray-200 flex flex-col transition-all duration-300"
    >
      <!-- Top section with project name -->
      <div class="p-4">
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <span class="inline-block w-8 h-8 bg-blue-500 rounded-full"></span>
            <span v-if="isSidebarOpen" class="ml-2 text-lg font-semibold"
              >Project M.</span
            >
          </div>
          <button @click="toggleSidebar" class="text-white focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              :class="isSidebarOpen ? 'rotate-90' : 'rotate-0'"
              class="h-6 w-6 text-gray-600 transition-transform duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
              />
            </svg>
          </button>
        </div>

        <!-- Navigation Links -->
        <nav class="mt-8">
          <router-link
            to="/members"
            class="flex items-center text-gray-600 hover:bg-gray-100 p-2 rounded-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>
            <span v-if="isSidebarOpen" class="ml-4">Members</span>
          </router-link>

          <router-link
            to="/messages"
            class="flex items-center text-gray-600 hover:bg-gray-100 p-2 rounded-lg mt-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
              />
            </svg>
            <span v-if="isSidebarOpen" class="ml-4">Messages</span>
          </router-link>

          <router-link
            to="/tasks"
            class="flex items-center text-gray-600 hover:bg-gray-100 p-2 rounded-lg mt-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 6.878V6a2.25 2.25 0 0 1 2.25-2.25h7.5A2.25 2.25 0 0 1 18 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 0 0 4.5 9v.878m13.5-3A2.25 2.25 0 0 1 19.5 9v.878m0 0a2.246 2.246 0 0 0-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0 1 21 12v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6c0-.98.626-1.813 1.5-2.122"
              />
            </svg>
            <span v-if="isSidebarOpen" class="ml-4">Tasks</span>
          </router-link>
        </nav>
      </div>

      <div class="px-4">
        <!-- Divider with padding -->
        <div class="border-t border-gray-300 px-4"></div>
      </div>

      <!-- Middle Section for Projects -->
      <div class="p-4" v-if="isSidebarOpen">
        <h3 class="text-xs text-gray-500 uppercase tracking-wide">
          My Projects
        </h3>
        <ul class="mt-4 space-y-2">
          <li>
            <!-- Use router-link to navigate to the project page -->
            <router-link
              to="/projects"
              class="flex items-center text-gray-600 p-2 rounded-lg hover:bg-purple-100"
            >
              <span
                class="inline-block w-2 h-2 rounded-full bg-green-500"
              ></span>
              <span class="ml-2">Mobile App</span>
            </router-link>
          </li>
        </ul>
      </div>

      <!-- Bottom Section (Thoughts Time) -->
      <div class="p-4" v-if="isSidebarOpen">
        <div class="bg-gray-100 p-4 rounded-lg">
          <p class="text-sm text-gray-500">
            We don't have any notices for you. You can share your thoughts with
            peers.
          </p>
          <button class="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg">
            Write a message
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "./NavBar.vue";

export default {
  components: {
    NavBar,
  },
  data() {
    return {
      isSidebarOpen: true,
    };
  },
  methods: {
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen;
    },
  },
};
</script>

<style scoped>
/* Add custom styles here if needed */
</style>
