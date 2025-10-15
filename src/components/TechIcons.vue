<template>
  <div class="tech-icons">
    <i class="fab fa-js"></i>
    <i class="fab fa-vuejs"></i>
    <i class="fab fa-python"></i>
    <i class="fab fa-github"></i>
    <span class="code-symbol">&lt;/&gt;</span>
  </div>
<div class="tech-icons">
    <i class="devicon-vuejs-plain colored"></i>
    <i class="devicon-javascript-plain colored"></i>
    <i class="devicon-python-plain colored"></i>
  </div>
</template>

<style scoped>
.tech-icons {
  display: flex;
  gap: 1.5rem;
  margin-top: 2rem;
  justify-content: center;
}
.tech-icons i {
  font-size: 2.5rem;
  color: var(--primary-color);
  transition: transform 0.3s;
}
.tech-icons i:hover {
  transform: scale(1.2) rotate(-10deg);
  color: #00cc7a;
}
.code-symbol {
  font-size: 2.5rem;
  color: var(--accent-color);
  font-family: 'Fira Code', monospace;
}
</style>