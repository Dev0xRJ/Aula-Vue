<template>
  <div class="page-wrapper">
    <div class="container">
      <!-- Seção de Habilidades Técnicas -->
      <div class="skills-section">
        <h2 class="skills-title">
          <i class="fas fa-code"></i>
          Habilidades Técnicas
        </h2>
        <p class="skills-description">
          Atualmente, utilizo e aprimoro diariamente as seguintes tecnologias e frameworks. 
          Minha proficiência se estende a essas ferramentas que são essenciais para o desenvolvimento 
          de soluções robustas, criação de interfaces, gerenciamento de bancos de dados e construção de APIs eficientes.
        </p>
        <div class="skills-grid">
          <div class="skill-card" v-for="skill in technicalSkills" :key="skill.name">
            <div class="skill-icon" :style="{ color: skill.color }">
              <i :class="skill.icon"></i>
            </div>
            <h3 class="skill-name">{{ skill.name }}</h3>
            <div class="skill-level">
              <div class="skill-bar">
                <div 
                  class="skill-progress" 
                  :style="{ width: skill.level + '%', backgroundColor: skill.color }"
                ></div>
              </div>
              <span class="skill-percentage">{{ skill.level }}%</span>
            </div>
          </div>
        </div>
        <p class="skills-footer">
          Estou sempre aberto a aprender novas tecnologias e expandir meu conjunto de habilidades 
          para melhor atender às demandas do mercado e dos projetos em que trabalho.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Projects',
  mounted() {
    // Animar barras de habilidades quando o componente é montado
    setTimeout(() => {
      this.animateSkillBars()
    }, 1000)
  },
  methods: {
    animateSkillBars() {
      const skillBars = document.querySelectorAll('.skill-progress')
      skillBars.forEach((bar, index) => {
        setTimeout(() => {
          bar.style.width = bar.style.width || '0%'
        }, index * 200)
      })
    }
  },
  data() {
    return {
      technicalSkills: [
        { name: 'JavaScript', icon: 'fab fa-js-square', level: 85, color: '#f7df1e' },
        { name: 'Vue.js', icon: 'fab fa-vuejs', level: 80, color: '#4fc08d' },
        { name: 'Python', icon: 'fab fa-python', level: 75, color: '#3776ab' },
        { name: 'HTML5', icon: 'fab fa-html5', level: 90, color: '#e34f26' },
        { name: 'CSS3', icon: 'fab fa-css3-alt', level: 85, color: '#1572b6' },
        { name: 'Node.js', icon: 'fab fa-node-js', level: 70, color: '#339933' },
        { name: 'Git', icon: 'fab fa-git-alt', level: 80, color: '#f05032' },
        { name: 'Bootstrap', icon: 'fab fa-bootstrap', level: 85, color: '#7952b3' },
        { name: 'Docker', icon: 'fab fa-docker', level: 65, color: '#2496ed' },
        { name: 'SQL', icon: 'fas fa-database', level: 70, color: '#336791' },
        { name: 'API Rest', icon: 'fas fa-exchange-alt', level: 78, color: '#00cc7a' },
        { name: 'Figma', icon: 'fab fa-figma', level: 60, color: '#f24e1e' }
      ]
    }
  }
}
</script>

<style scoped>
/* Seção de Habilidades Técnicas */
.skills-section {
  padding: 2rem;
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.3), rgba(26, 26, 46, 0.2));
  border-radius: 20px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(0, 204, 122, 0.2);
}

.skills-title {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  justify-content: center;
  font-size: 2.2rem;
  color: #00cc7a;
  margin-bottom: 2rem;
  font-weight: 700;
}

.skills-description {
  text-align: center;
  color: #b0b0b0;
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 3rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.skill-card {
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.4), rgba(26, 26, 46, 0.3));
  border: 1px solid rgba(0, 204, 122, 0.2);
  border-radius: 15px;
  padding: 1.5rem;
  text-align: center;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  opacity: 0;
  transform: translateY(30px);
  animation: slideInUp 0.6s ease-out forwards;
}

.skill-card:nth-child(n) {
  animation-delay: calc(var(--i, 0) * 0.1s);
}

.skill-card:nth-child(1) { --i: 1; }
.skill-card:nth-child(2) { --i: 2; }
.skill-card:nth-child(3) { --i: 3; }
.skill-card:nth-child(4) { --i: 4; }
.skill-card:nth-child(5) { --i: 5; }
.skill-card:nth-child(6) { --i: 6; }
.skill-card:nth-child(7) { --i: 7; }
.skill-card:nth-child(8) { --i: 8; }
.skill-card:nth-child(9) { --i: 9; }
.skill-card:nth-child(10) { --i: 10; }
.skill-card:nth-child(11) { --i: 11; }
.skill-card:nth-child(12) { --i: 12; }

@keyframes slideInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.skill-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #00cc7a, transparent);
  transition: all 0.6s ease;
}

.skill-card:hover::before {
  left: 100%;
}

.skill-card:hover {
  transform: translateY(-8px);
  border-color: rgba(0, 204, 122, 0.5);
  box-shadow: 0 15px 35px rgba(0, 204, 122, 0.2);
}

.skill-icon {
  font-size: 3.5rem;
  margin-bottom: 1rem;
  transition: all 0.3s ease;
}

.skill-card:hover .skill-icon {
  transform: scale(1.1) rotate(5deg);
}

.skill-name {
  font-size: 1.4rem;
  font-weight: 600;
  color: white;
  margin-bottom: 1rem;
}

.skill-level {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.skill-bar {
  flex: 1;
  height: 8px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  overflow: hidden;
  position: relative;
}

.skill-progress {
  height: 100%;
  border-radius: 10px;
  transition: width 2s ease-in-out;
  position: relative;
}

.skill-progress::after {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 20px;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4));
  animation: shimmer 2s infinite;
}

@keyframes shimmer {
  0% { transform: translateX(-20px); }
  100% { transform: translateX(100px); }
}

.skill-percentage {
  font-size: 0.9rem;
  font-weight: 600;
  color: #00cc7a;
  min-width: 40px;
}

.skills-footer {
  text-align: center;
  color: #888;
  font-size: 1rem;
  line-height: 1.6;
  margin-top: 2rem;
  font-style: italic;
}

/* Responsive */
@media (max-width: 768px) {
  .skills-section {
    padding: 1.5rem;
  }

  .skills-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .skills-title {
    font-size: 1.8rem;
  }

  .skill-icon {
    font-size: 3rem;
  }

  .skills-description {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .skills-section {
    padding: 1rem;
  }

  .skills-title {
    font-size: 1.6rem;
  }

  .skill-name {
    font-size: 1.2rem;
  }
}
</style>