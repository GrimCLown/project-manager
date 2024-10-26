<template>
  <div class="flex h-screen">
    <!-- Sidebar Navigation -->
    <div class="w-1/4 bg-gray-100 p-4">
      <h2 class="text-lg font-bold mb-6">Messages</h2>
      <nav>
        <ul class="space-y-2">
          <li>
            <button
              @click="currentView = 'Inbox'"
              :class="
                currentView === 'Inbox'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-gray-700'
              "
              class="w-full text-left px-4 py-2 rounded hover:bg-blue-400"
            >
              Inbox
            </button>
          </li>
          <li>
            <button
              @click="currentView = 'Sent'"
              :class="
                currentView === 'Sent'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-gray-700'
              "
              class="w-full text-left px-4 py-2 rounded hover:bg-blue-400"
            >
              Sent
            </button>
          </li>
          <li>
            <button
              @click="currentView = 'Drafts'"
              :class="
                currentView === 'Drafts'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-gray-700'
              "
              class="w-full text-left px-4 py-2 rounded hover:bg-blue-400"
            >
              Drafts
            </button>
          </li>
        </ul>
      </nav>
    </div>

    <!-- Main Content Area for Messages -->
    <div class="w-3/4 p-6">
      <!-- Dynamic Component Rendering -->
      <component :is="currentViewComponent" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // Keeps track of the current view (Inbox, Sent, Drafts)
      currentView: "Inbox",
    };
  },
  computed: {
    currentViewComponent() {
      // Return the current view component to be displayed based on currentView
      return {
        Inbox: {
          template: `
            <div>
              <h2 class="text-xl font-semibold mb-4">Inbox</h2>
              <p>These are your incoming messages.</p>
            </div>
          `,
        },
        Sent: {
          template: `
            <div>
              <h2 class="text-xl font-semibold mb-4">Sent</h2>
              <p>These are your sent messages.</p>
            </div>
          `,
        },
        Drafts: {
          template: `
            <div>
              <h2 class="text-xl font-semibold mb-4">Drafts</h2>
              <p>These are your draft messages.</p>
            </div>
          `,
        },
      }[this.currentView];
    },
  },
};
</script>

<style scoped>
/* Add any additional styles here */
</style>
