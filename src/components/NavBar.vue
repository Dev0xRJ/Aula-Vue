<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark-custom navbar-compact fixed-top">
    <div class="container">
      <router-link class="navbar-brand" to="/">
        <i class="fas fa-code"></i>
        <span class="brand-text">Portfolio</span>
      </router-link>
      
      <button
        class="navbar-toggler custom-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/">
              <i class="fas fa-home"></i>
              <span>Início</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">
              <i class="fas fa-user"></i>
              <span>Sobre</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/projects">
              <i class="fas fa-cog"></i>
              <span class="skills-text">Habilidades</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/contact">
              <i class="fas fa-envelope"></i>
              <span>Contato</span>
            </router-link>
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
/* Estilos do NavBar */
.navbar {
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(0, 204, 122, 0.2);
  transition: all 0.3s ease;
}

.navbar-brand {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 700;
  font-size: 1.4rem;
  color: var(--primary-color) !important;
  text-decoration: none;
}

.navbar-brand i {
  font-size: 1.6rem;
}

.brand-text {
  font-family: 'Fira Code', monospace;
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem !important;
  border-radius: 6px;
  transition: all 0.3s ease;
  position: relative;
}

.nav-link:hover {
  background: rgba(0, 204, 122, 0.1);
  color: var(--primary-color) !important;
}

.nav-link.router-link-active {
  color: var(--primary-color) !important;
  background: rgba(0, 204, 122, 0.15);
}

.nav-link.router-link-active::after {
  content: '';
  position: absolute;
  bottom: -1px;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  height: 2px;
  background: var(--primary-color);
}

.nav-link i {
  font-size: 0.9rem;
}

/* Toggler customizado */
.custom-toggler {
  border: none;
  padding: 4px 8px;
  width: 40px;
  height: 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background: transparent;
}

.custom-toggler span {
  display: block;
  height: 3px;
  width: 100%;
  background: var(--primary-color);
  border-radius: 2px;
  transition: all 0.3s ease;
}

.custom-toggler:focus {
  box-shadow: none;
}

.custom-toggler[aria-expanded="true"] span:nth-child(1) {
  transform: rotate(45deg) translate(6px, 6px);
}

.custom-toggler[aria-expanded="true"] span:nth-child(2) {
  opacity: 0;
}

.custom-toggler[aria-expanded="true"] span:nth-child(3) {
  transform: rotate(-45deg) translate(6px, -6px);
}

/* Responsividade */
@media (max-width: 992px) {
  .navbar-brand {
    font-size: 1.3rem;
  }
  
  .brand-text {
    display: none;
  }
  
  .skills-text {
    display: none;
  }
  
  .nav-link span {
    font-size: 0.9rem;
  }
}

@media (max-width: 768px) {
  .navbar {
    padding: 0.5rem 0;
  }
  
  .navbar-collapse {
    background: rgba(26, 26, 26, 0.98);
    margin-top: 1rem;
    border-radius: 10px;
    padding: 1rem;
    border: 1px solid rgba(0, 204, 122, 0.2);
  }
  
  .nav-link {
    justify-content: center;
    margin: 0.25rem 0;
    padding: 0.75rem 1rem !important;
  }
  
  .navbar-brand {
    font-size: 1.2rem;
  }
}

@media (max-width: 576px) {
  .nav-link span {
    display: none;
  }
  
  .nav-link {
    justify-content: center;
    padding: 0.5rem !important;
  }
  
  .nav-link i {
    font-size: 1.2rem;
  }
  
  .navbar-brand i {
    font-size: 1.4rem;
  }
}

@media (max-width: 480px) {
  .navbar {
    padding: 0.25rem 0;
  }
  
  .navbar-collapse {
    margin-top: 0.5rem;
    padding: 0.75rem;
  }
  
  .nav-link {
    padding: 0.5rem !important;
  }
}
</style>