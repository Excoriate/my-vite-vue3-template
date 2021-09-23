<script setup lang="ts">
import { useUserStore } from '~/stores/user'
import { getMenuOptionsFake } from '~/services/auth/menuService'

const user = useUserStore()
const name = ref(user.savedName)

const router = useRouter()
const go = () => {
  if (name.value)
    router.push(`/hi/${encodeURIComponent(name.value)}`)
}

const { t } = useI18n()

// TODO: Render this dynamically
const dynamicMenu = getMenuOptionsFake()

</script>

<template>
  <!--  Header component with menu-->
  <header class="bg-indigo-600">
    <!--  Menu component, dynamically rendered based on options, session, license, etc-->
    <AppMenu :navigation="dynamicMenu" />
  </header>
</template>

<route lang="yaml">
meta:
  layout: main
</route>
