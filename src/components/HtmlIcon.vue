<template>
  <div v-html="svgContent"></div>
</template>

<script setup>
import { siHtml5 } from 'simple-icons';
import { ref } from 'vue';

const svgContent = ref(siHtml5.svg);
</script>