<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark-custom navbar-compact fixed-top">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"></a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
      <li class="nav-item">
        <router-link class="nav-link" to="/">Início</router-link>
      </li>
    
          <li class="nav-item">
            <router-link class="nav-link" to="/about">Sobre</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/projects">Habilidades Técnicas
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/contact">Contato</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
}
</script>

<style scoped>
</style>