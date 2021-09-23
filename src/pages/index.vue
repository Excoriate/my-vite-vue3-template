<script setup lang="ts">
import { useUserStore } from '~/stores/user'

const user = useUserStore()
const name = ref(user.savedName)

const router = useRouter()
const go = () => {
  if (name.value)
    router.push(`/hi/${encodeURIComponent(name.value)}`)
}

const { t } = useI18n()

// TODO: Render this dynamically
const menuParamToProp = [
  { name: 'MenuFromProp1', isEnabled: true },
  { name: 'MenuFromProp2', isEnabled: true },
  { name: 'MenuFromProp3', isEnabled: true },
  { name: 'MenuFromProp4', isEnabled: true },
]

</script>

<template>
  <!--  Header component with menu-->
  <header class="bg-indigo-600">
    <Menu :navigation="menuParamToProp"></Menu>
  </header>
</template>

<route lang="yaml">
meta:
  layout: main
</route>
