<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-100">
      <div class="bg-white shadow-lg rounded-lg w-full max-w-sm p-8">
        <h2 class="text-2xl font-bold text-center mb-6">Login</h2>
  
        <form @submit.prevent="login">
          <div class="mb-4">
            <label for="email" class="block text-gray-700 font-medium mb-2">Email</label>
            <input
              type="email"
              v-model="email"
              id="email"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>
  
          <div class="mb-6">
            <label for="password" class="block text-gray-700 font-medium mb-2">Password</label>
            <input
              type="password"
              v-model="password"
              id="password"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              required
            />
          </div>
  
          <button
            type="submit"
            class="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out"
          >
            Login
          </button>
  
          <p class="text-sm text-gray-500 text-center mt-4">
            Don't have an account?
            <a href="#" class="text-blue-500 hover:underline">Sign up</a>
          </p>
        </form>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const email = ref('')
  const password = ref('')
  
  const login = () => {
    console.log('Email:', email.value)
    console.log('Password:', password.value)
  }
  </script>
  
  <style scoped>

  </style>
  