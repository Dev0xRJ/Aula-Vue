<script>
export default { name: 'NavBar' }
</script>

<template>
  <nav>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/about">Sobre</router-link></li>
      <li><router-link to="/projects">Projetos</router-link></li>
    </ul>
  </nav>
</template>

<style scoped>

</style>