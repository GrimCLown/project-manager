<template>
  <div class="">
    <!-- Header Section -->
    <div class="flex items-center justify-between mb-4">
      <div class="flex items-center justify-between gap-4">
        <h1 class="text-xl font-semibold">Project Name</h1>
        <div class="flex items-center -space-x-2">
          <img v-for="(member, index) in members.slice(0, 3)" :key="member.id" class="w-8 h-8 rounded-full border-2 border-white" :src="member.profile_picture" :alt="member.name" />
          <div v-if="members.length > 3" class="w-8 h-8 flex items-center justify-center bg-gray-300 rounded-full text-sm text-gray-700">
            +{{ members.length - 3 }}
          </div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
        <path fill-rule="evenodd"
          d="M2 4.75A.75.75 0 0 1 2.75 4h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 4.75ZM2 10a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 10Zm0 5.25a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z"
          clip-rule="evenodd" />
      </svg>
    </div>

    <!-- Members and Invite Button -->
    <div class="flex items-center justify-between mb-4">
      <div class="text-lg font-medium">Members</div>
      <div>
        <button class="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Invite Members</button>
      </div>
    </div>

    <!-- Table Section -->
    <div class="overflow-x-auto">
      <table class="min-w-full bg-white border border-gray-200 rounded-lg">
        <thead class="bg-gray-100">
          <tr>
            <th class="px-4 py-2 text-left text-gray-600 font-semibold">Name</th>
            <th class="px-4 py-2 text-left text-gray-600 font-semibold">Email</th>
            <th class="px-4 py-2 text-left text-gray-600 font-semibold">Location</th>
            <th class="px-4 py-2 text-left text-gray-600 font-semibold">Global Role</th>
            <th class="px-4 py-2 text-left text-gray-600 font-semibold">Project Role</th>
            <th class="px-4 py-2 text-center text-gray-600 font-semibold">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(member, index) in members" :key="member.id" class="hover:bg-gray-50">
            <td class="px-4 py-2 border-t border-gray-200 flex items-center gap-2">
              <img class="w-8 h-8 rounded-full" :src="member.profile_picture" :alt="member.name" />
              {{ member.name }}
            </td>
            <td class="px-4 py-2 border-t border-gray-200">{{ member.email }}</td>
            <td class="px-4 py-2 border-t border-gray-200">{{ member.location }}</td>
            <td class="px-4 py-2 border-t border-gray-200">
              <span class="px-2 py-1 rounded text-white" :class="roleColor(member.global_role)">
                {{ member.global_role }}
              </span>
            </td>
            <td class="px-4 py-2 border-t border-gray-200">
              <span class="px-2 py-1 rounded text-white" :class="roleColor(member.project_role)">
                {{ member.project_role }}
              </span>
            </td>
            <td class="px-4 py-2 border-t border-gray-200 text-center">
              <button v-if="userCanEdit" class="text-blue-600 hover:underline">Edit Role</button>
              <button v-if="userCanEdit" class="text-red-600 hover:underline ml-2">Remove</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userCanEdit: true, // replace with actual permission check
      members: [
        {
          id: 1,
          name: 'John Doe',
          email: 'john@example.com',
          profile_picture: 'path/to/profile1.jpg',
          location: 'New York',
          global_role: 'Project Manager',
          project_role: 'Owner'
        },
        {
          id: 2,
          name: 'Jane Smith',
          email: 'jane@example.com',
          profile_picture: 'path/to/profile2.jpg',
          location: 'San Diego',
          global_role: 'Developer',
          project_role: 'Collaborator'
        },
        {
          id: 3,
          name: 'Alice Johnson',
          email: 'alice@example.com',
          profile_picture: 'path/to/profile3.jpg',
          location: 'Remote',
          global_role: 'Viewer',
          project_role: 'Viewer'
        },
        {
          id: 4,
          name: 'Bob Brown',
          email: 'bob@example.com',
          profile_picture: 'path/to/profile4.jpg',
          location: 'Seattle',
          global_role: 'Admin',
          project_role: 'Collaborator'
        }
      ]
    };
  },
  methods: {
    roleColor(role) {
      switch (role.toLowerCase()) {
        case 'admin':
          return 'bg-red-500';
        case 'project manager':
          return 'bg-blue-500';
        case 'developer':
          return 'bg-green-500';
        case 'viewer':
          return 'bg-gray-500';
        case 'owner':
          return 'bg-purple-500';
        case 'collaborator':
          return 'bg-yellow-500';
        default:
          return 'bg-gray-400';
      }
    }
  }
};
</script>

<style scoped>
/* Additional component-specific styles can go here if needed */
</style>
