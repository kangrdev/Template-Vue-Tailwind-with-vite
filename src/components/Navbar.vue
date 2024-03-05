<template>
    <nav class="flex items-center justify-between h-16 bg-gray-800 text-white px-4">
      <div class="flex items-center">
        <img class="w-10 h-10 mr-2" src="../assets/vue.svg" alt="Logo" />
        <span class="font-bold text-xl">Bkep</span>
      </div>
  
      <ul class="flex space-x-4">
        <li>
          <router-link to="/" class="hover:text-gray-400">Home</router-link>
        </li>
        <li>
          <router-link to="/about" class="hover:text-gray-400">About</router-link>
        </li>
        </ul>
    </nav>
  </template>