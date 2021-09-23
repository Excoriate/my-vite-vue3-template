<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <header class="bg-indigo-600">
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
      <div class="w-full py-6 flex items-center justify-between border-b border-indigo-500 lg:border-none">
        <div class="flex items-center">
          <a href="#">
            <span class="sr-only">Workflow</span>
            <img class="h-10 w-auto" src="https://tailwindui.com/img/logos/workflow-mark.svg?color=white" alt="" />
          </a>
          <div class="hidden ml-10 space-x-8 lg:block">
            <a v-for="link in navigation" :key="link.name" :href="link.href" class="text-base font-medium text-white hover:text-indigo-50">
              <!--        TODO: For statement, conditional rendering based on props properties-->
              <li v-if="link.isEnabled" class="inline-block align-baseline">
                {{ link.name }}
                <!--                Example, how to call a function to dynamically compute or parse values-->
                <!--                {{ getUpperMenuName('link.name') }}-->
              </li>
            </a>
          </div>
        </div>
        <div class="ml-10 space-x-4">
          <router-link to="/auth/signin" class="inline-block bg-indigo-500 py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-opacity-75">
            Sign In
          </router-link>
          <a href="#" class="inline-block bg-white py-2 px-4 border border-transparent rounded-md text-base font-medium text-indigo-600 hover:bg-indigo-50">Sign up</a>
        </div>
      </div>
      <div class="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">
        <!--        For statement to dynamically render props within this component-->
        <ul>
          <a v-for="link in navigation" :key="link.name" :href="link.href" class="text-base font-medium text-white hover:text-indigo-50">
            {{ link.name }}
          </a>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">

// TODO: (template) Received from parent component index.vue :)
import { navigationMenuType } from '~/types'

function getUpperMenuName(menuName: string) {
  return menuName.toUpperCase()
}

// Props definition using the typescript feature built-in
const props = defineProps<{ navigation: navigationMenuType}>()

// eslint-disable-next-line no-console
console.log(`Navigation Props received: ${JSON.stringify(props)}`)

</script>
