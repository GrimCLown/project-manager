// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import Members from './components/Members.vue';
import Message from './components/Message.vue';
import Task from './components/Task.vue';
import Project from './components/Project.vue';

const routes = [
  { path: '/', redirect: '/members' }, // Redirect root to 'Members'
  { path: '/members', component: Members },
  { path: '/messages', component: Message },
  { path: '/tasks', component: Task },
  { path: '/tasks/project/:id', component: Project }

];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
