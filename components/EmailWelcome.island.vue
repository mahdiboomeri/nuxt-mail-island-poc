<template>
  <div class="bg-slate-100">
    <h1 class="text-primary font-semibold text-xl">Welcome {{ name }}</h1>

    <ul class="list-disc pl-5">
      <li>time: {{ date }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
export interface Props {
  name: string;
}
defineProps<Props>();

const date = ref(new Date());
</script>
