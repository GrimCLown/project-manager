<script setup>
import Sidebar from './components/Sidebar.vue';
import NavBar from './components/NavBar.vue';
import router from './router';

</script>

<template>
  <div class="flex">
    <Sidebar/>
    <div class="w-full max-h-screen overflow-auto ">
      <NavBar/>
      <router-view class="pt-[70px] max-h-screen">
        
      </router-view>
    </div>
  </div>

 
 

</template>


