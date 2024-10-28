<template>
  <div class="flex h-screen bg-gray-100">
    <!-- Contacts List -->
    <div class="w-1/4 bg-white p-4 border-r border-gray-200">
      <div class="mb-4">
        <input
          type="text"
          placeholder="Search..."
          class="w-full px-3 py-2 rounded-lg border border-gray-300"
        />
      </div>
      <ul>
        <li
          v-for="contact in contacts"
          :key="contact.id"
          @click="selectContact(contact)"
          class="flex items-center p-3 mb-2 cursor-pointer rounded-lg hover:bg-gray-100"
        >
          <img
            :src="contact.profilePicture"
            alt="Profile"
            class="w-10 h-10 rounded-full mr-3"
          />
          <div class="flex-1">
            <div class="flex justify-between">
              <h2 class="font-semibold">{{ contact.name }}</h2>
              <span class="text-xs text-gray-500">{{ contact.time }}</span>
            </div>
            <p class="text-sm text-gray-500">{{ contact.lastMessage }}</p>
          </div>
        </li>
      </ul>
    </div>

    <!-- Chat Window -->
    <div class="flex-1 flex flex-col">
      <div class="flex items-center justify-between p-4 border-b border-gray-200 bg-white">
        <div class="flex items-center">
          <img
            :src="selectedContact?.profilePicture"
            alt="Active Contact"
            class="w-10 h-10 rounded-full mr-3"
          />
          <div>
            <h2 class="font-semibold">{{ selectedContact?.name }}</h2>
            <p class="text-sm text-gray-500">Active Now</p>
          </div>
        </div>
        <div class="flex items-center gap-4">
          <button>
            <svg class="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
              <!-- Add relevant SVG icon here -->
            </svg>
          </button>
          <button>
            <svg class="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
              <!-- Add relevant SVG icon here -->
            </svg>
          </button>
        </div>
      </div>
      
      <!-- Messages -->
      <div class="flex-1 p-4 overflow-y-auto">
        <div
          v-for="message in messages"
          :key="message.id"
          class="flex mb-4"
          :class="message.isSender ? 'justify-end' : ''"
        >
          <img
            v-if="!message.isSender"
            :src="selectedContact?.profilePicture"
            alt="Sender"
            class="w-8 h-8 rounded-full mr-2"
          />
          <div
            class="p-3 rounded-lg max-w-xs"
            :class="message.isSender ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'"
          >
            <p>{{ message.text }}</p>
            <span class="text-xs text-gray-400">{{ message.time }}</span>
          </div>
        </div>
      </div>

      <!-- Message Input -->
      <div class="p-4 border-t border-gray-200 bg-white flex items-center">
        <input
          type="text"
          v-model="newMessage"
          placeholder="Type a message"
          class="flex-1 px-4 py-2 border border-gray-300 rounded-full"
        />
        <button @click="sendMessage" class="ml-2 bg-blue-500 text-white rounded-full p-2">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <!-- Add SVG for send icon here -->
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contacts: [
        { id: 1, name: "Jennifer Fritz", profilePicture: "path/to/image.jpg", lastMessage: "I'm looking to work with...", time: "3:15 PM" },
        { id: 2, name: "Laney Gray", profilePicture: "path/to/image2.jpg", lastMessage: "Individuals and interactions...", time: "5:15 PM" },
        // More contacts
      ],
      selectedContact: null,
      messages: [
        { id: 1, text: "Your story continues on mobile...", time: "3:15 PM", isSender: true },
        { id: 2, text: "I've always been on the fringe...", time: "3:18 PM", isSender: false },
        { id: 3, text: "Can you send the file of...", time: "3:21 PM", isSender: true },
        { id: 4, text: "Yeah sure, here it is.", time: "3:25 PM", isSender: false },
        // More messages
      ],
      newMessage: "",
    };
  },
  methods: {
    selectContact(contact) {
      this.selectedContact = contact;
      // Load relevant messages for the selected contact
    },
    sendMessage() {
      if (this.newMessage.trim() !== "") {
        this.messages.push({
          id: Date.now(),
          text: this.newMessage,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          isSender: true,
        });
        this.newMessage = "";
      }
    },
  },
};
</script>

<style scoped>
/* Add any specific styling if necessary */
</style>
