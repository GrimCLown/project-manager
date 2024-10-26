<template>
  <div class="flex flex-col h-screen">
    <!-- First item spans the top -->
    <div class="basis-auto p-[40px] flex flex-col gap-y-[40px]">
      <div class="flex justify-between">
        <div class="flex items-center">
          <h1 class="text-4xl font-semibold">Project Name</h1>
          <div class="flex items-center gap-2 ml-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="#6B47DC"
              class="size-5"
            >
              <path
                d="m5.433 13.917 1.262-3.155A4 4 0 0 1 7.58 9.42l6.92-6.918a2.121 2.121 0 0 1 3 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 0 1-.65-.65Z"
              />
              <path
                d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0 0 10 3H4.75A2.75 2.75 0 0 0 2 5.75v9.5A2.75 2.75 0 0 0 4.75 18h9.5A2.75 2.75 0 0 0 17 15.25V10a.75.75 0 0 0-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5Z"
              />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="#6B47DC"
              class="size-5"
            >
              <path
                fill-rule="evenodd"
                d="M13.887 3.182c.396.037.79.08 1.183.128C16.194 3.45 17 4.414 17 5.517V16.75A2.25 2.25 0 0 1 14.75 19h-9.5A2.25 2.25 0 0 1 3 16.75V5.517c0-1.103.806-2.068 1.93-2.207.393-.048.787-.09 1.183-.128A3.001 3.001 0 0 1 9 1h2c1.373 0 2.531.923 2.887 2.182ZM7.5 4A1.5 1.5 0 0 1 9 2.5h2A1.5 1.5 0 0 1 12.5 4v.5h-5V4Z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
        </div>
        <div>
          <!-- Invite and User Avatars -->
          <div class="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#C3B4F1"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#6B47DC"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>

            <button class="text-purple-500 font-semibold">Invite</button>
            <div class="flex items-center -space-x-2">
              <img
                class="w-8 h-8 rounded-full border-2 border-white"
                src=""
                alt="User 1"
              />
              <img
                class="w-8 h-8 rounded-full border-2 border-white"
                src=""
                alt="User 2"
              />
              <img
                class="w-8 h-8 rounded-full border-2 border-white"
                src=""
                alt="User 3"
              />
              <div
                class="w-8 h-8 flex items-center justify-center bg-gray-300 rounded-full text-sm text-gray-700"
              >
                +2
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex items-center justify-between gap-2">
        <div class="flex gap-2">
          <button
            class="p-2 border rounded-md flex gap-2 items-center text-[#4A4A4A]"
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
                d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z"
              />
            </svg>

            Filter

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
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </button>

          <button
            class="p-2 border rounded-md flex gap-2 items-center text-[#4A4A4A]"
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
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
              />
            </svg>
            Today
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
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </button>
        </div>

        <button
          class="border-inherit p-2 border rounded-md flex gap-2 items-center text-[#4A4A4A]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#4A4A4A"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
            />
          </svg>
          Share
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
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </button>
      </div>
    </div>

    <!-- Bottom content with elements 2, 3, and 4 filling the remaining height -->
    <div class="flex flex-grow flex-wrap gap-4 justify-between px-[40px]">
      <TaskList title="Todo" :tasks="todoTasks" />
      <TaskList title="In Progress" :tasks="inProgressTasks" />
      <TaskList title="Done" :tasks="doneTasks" />

      <!-- <div class="flex-grow basis-1/4 bg-gray-200 rounded-t-xl">4</div>
      <div class="flex-grow basis-1/4 bg-gray-200 rounded-t-xl">4</div> -->
    </div>
  </div>
</template>

<script>
import TaskList from "./TaskList.vue";

export default {
  components: {
    TaskList,
  },
  data() {
    return {
      todoTasks: [
        { id: 1, title: "Task 1", description: "This is a to-do task." },
        { id: 2, title: "Task 2", description: "This is another to-do task." },
      ],
      inProgressTasks: [
        { id: 3, title: "Task 3", description: "This task is in progress." },
      ],
      doneTasks: [
        { id: 4, title: "Task 4", description: "This task is done." },
      ],
    };
  },
};
</script>
