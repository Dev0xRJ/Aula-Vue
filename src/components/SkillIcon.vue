<template>
  <div class="skills-grid">
    <div class="skill-item">
      <div class="skill-icon">
        <component :is="htmlIcon" />
      </div>
      <h3 class="skill-name">HTML</h3>
    </div>
    
    <div class="skill-item">
      <div class="skill-icon">
        <component :is="cssIcon" />
      </div>
      <h3 class="skill-name">CSS</h3>
    </div>
    
    </div>
</template>

<script setup>
import { computed } from 'vue';
// Importe os ícones que você precisa da biblioteca 'simple-icons'
import { siHtml5, siCss3 } from 'simple-icons';

const htmlIcon = computed(() => ({ template: siHtml5.svg }));
const cssIcon = computed(() => ({ template: siCss3.svg }));

// Adicione os outros ícones que você precisa aqui
// const jsIcon = computed(() => ({ template: siJavascript.svg }));
// ...
</script>

<style scoped>
/* Opcional: Adicione estilos específicos para o ícone, se necessário */
.skill-icon {
  width: 42px;
  height: 42px;
  color: var(--primary-color);
  /* Os ícones SVG herdarão a cor do texto do elemento pai */
}
</style>