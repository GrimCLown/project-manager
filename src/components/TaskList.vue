<template>

    <div class="flex-grow basis-1/4 bg-gray-200 rounded-t-xl p-[20px]">
        <div class="flex items-center justify-between">
            <h2 class="text-xl font-semibold">{{ title }}</h2>
            <svg xmlns="http://www.w3.org/2000/svg" fill="#C3B4F1" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="#6B47DC" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
        </div>

        <div class="py-4">
            <!-- Divider with padding -->
            <div class="border-t-4 border-primary "></div>
        </div>
        <div class="flex flex-col gap-y-4">
            <TaskCard v-for="task in tasks" :key="task.id" :task="task" />
        </div>
        </div>

        

</template>

<script>
import TaskCard from './TaskCard.vue';
export default {
    components: {
        TaskCard,
    },
    props: {
        title: {
            type: String,
            required: true,
        },
        tasks: {
            type: Array,
            required: true,
        },
    },
};
</script>