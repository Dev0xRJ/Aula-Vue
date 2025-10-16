<template>
  <div class="page-wrapper">
    <!-- Seção do Título com Efeito Máquina de Escrever - FORA DO CONTAINER -->
    <div class="title-container">
      <h3 class="hero-title">
        <span class="code-bracket">&lt;</span>
        <span class="title-text">
          I am a <span class="names-animated">{{ displayText }}</span>
        </span>
        <span class="code-bracket">/&gt;</span>
      </h3>
    </div>

    <div class="container">

      <!-- Seção de Apresentação Pessoal -->
      <div class="presentation-container">
        <p>Olá, eu sou <strong>Raimundo Junior</strong>, um profissional dinâmico e proativo, com uma sólida experiência em atendimento ao cliente e suporte técnico. Minha trajetória me proporcionou habilidades essenciais em comunicação, organização e resolução de problemas, que agora aplico com paixão na área de Tecnologia da Informação.</p>
        <p>
          Atualmente, estou expandindo meus conhecimentos em Análise e Desenvolvimento de Sistemas, com um olhar especial para a programação e a segurança de TI. 
          Minhas experiências anteriores me ensinaram a diagnosticar e solucionar problemas de forma eficiente, um talento que me permite aprender rapidamente e me adaptar a novos desafios.
        </p>
      </div>

      <!-- Seção de Portfólio e Objetivos -->
      <div class="portfolio-container">
        <p>
          Neste portfólio, você encontrará projetos que demonstram meu compromisso com o aprendizado contínuo e minha dedicação em transformar ideias em soluções práticas. 
          Meu objetivo é evoluir como profissional de tecnologia, aplicando minha base de conhecimento para construir e entregar resultados de alta qualidade em cada projeto.
        </p>
        <p>Obrigado por visitar meu portfólio. Estou animado para compartilhar minha jornada e contribuir com soluções inovadoras na área de TI.</p>
      </div>
      
      <div class="resume-section">
        <h3 class="resume-title">
          <i class="fas fa-file-download"></i>
          Baixar Currículo
        </h3>
        <div class="resume-card">
          <div class="resume-info">
            <div class="resume-icon">
              <i class="fas fa-file-pdf"></i>
            </div>
            <div class="resume-details">
              <h4>Currículo Completo</h4>
              <p>Baixe meu currículo completo em PDF com todas as informações profissionais, experiências e qualificações.</p>
              <div class="file-info">
                <span class="file-size">📄 PDF </span>
                <span class="last-updated">🔄 Atualizado em {{ lastUpdated }}</span>
              </div>
            </div>
          </div>
          <button class="download-btn" @click="downloadResume">
            <i class="fas fa-download"></i>
            Baixar PDF
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {
      names: ['Customer Success Technician,', 'Developer', 'Technical Support Specialist'],
      currentIndex: 0,
      displayText: 'Customer Success Technician,',
      lastUpdated: 'Outubro 2025',
      typewriterTimeout: null,
      eraseTimeout: null
    }
  },
  mounted() {
    console.log('Component mounted, names:', this.names)
    console.log('Initial text:', this.displayText)
    // Aguardar um pouco e iniciar o efeito
    setTimeout(() => {
      this.startTypewriter()
    }, 1000)
  },
  
  beforeUnmount() {
    // Limpar timeouts
    if (this.typewriterTimeout) {
      clearTimeout(this.typewriterTimeout)
    }
    if (this.eraseTimeout) {
      clearTimeout(this.eraseTimeout)
    }
  },
  
  methods: {
    startTypewriter() {
      console.log('Starting typewriter with:', this.names[this.currentIndex])
      this.displayText = '' // Limpar antes de começar
      this.typeText(this.names[this.currentIndex])
    },
    
    typeText(text) {
      console.log('Typing text:', text)
      this.displayText = ''
      let charIndex = 0
      
      const typeChar = () => {
        if (charIndex < text.length) {
          this.displayText += text.charAt(charIndex)
          console.log('Current display:', this.displayText)
          charIndex++
          this.typewriterTimeout = setTimeout(typeChar, 150)
        } else {
          console.log('Finished typing:', this.displayText)
          // Texto completo digitado, aguardar e apagar
          this.typewriterTimeout = setTimeout(() => {
            this.eraseText()
          }, 3000)
        }
      }
      
      typeChar()
    },
    
    eraseText() {
      console.log('Starting to erase:', this.displayText)
      const currentText = this.displayText
      let charIndex = currentText.length
      
      const eraseChar = () => {
        if (charIndex > 0) {
          this.displayText = currentText.substring(0, charIndex - 1)
          charIndex--
          this.eraseTimeout = setTimeout(eraseChar, 75)
        } else {
          console.log('Text erased, moving to next')
          // Texto apagado, passar para o próximo
          this.currentIndex = (this.currentIndex + 1) % this.names.length
          console.log('Next index:', this.currentIndex, 'Next text:', this.names[this.currentIndex])
          this.eraseTimeout = setTimeout(() => {
            this.typeText(this.names[this.currentIndex])
          }, 800)
        }
      }
      
      eraseChar()
    },
    downloadResume() {
      // Caminho para o arquivo PDF do currículo
      // Você deve colocar o arquivo na pasta public/assets/
      const resumePath = '/assets/curriculo-raimundo-junior.pdf'
      
      // Criar um link temporário para download
      const link = document.createElement('a')
      link.href = resumePath
      link.download = 'Curriculo_Raimundo_Junior.pdf'
      link.target = '_blank'
      
      // Verificar se o arquivo existe antes de tentar baixar
      fetch(resumePath, { method: 'HEAD' })
        .then(response => {
          if (response.ok) {
            document.body.appendChild(link)
            link.click()
            document.body.removeChild(link)
          } else {
            alert('Currículo não encontrado. Por favor, entre em contato.')
          }
        })
        .catch(() => {
          // Fallback: abrir em nova aba mesmo se não conseguir verificar
          window.open(resumePath, '_blank')
        })
    }
  }
}
</script>

<style scoped>
.hero-title {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 2.2rem;
  color: #ffffff;
}

/* Texto fixo sem animação */
.title-text {
  display: inline-block;
  color: #ffffff;
}

.code-bracket {
  color: #00cc7a;
  font-weight: 700;
}

/* Container do título para isolamento */
.title-container {
  margin-bottom: 2rem;
  padding: 1rem;
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.2), rgba(26, 26, 46, 0.1));
  border-radius: 10px;
  border-left: 4px solid #00cc7a;
  border: 1px solid rgba(0, 204, 122, 0.1);
  min-height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Animação apenas no texto que está sendo digitado */
.names-animated {
  display: inline-block;
  border-bottom: 2px solid #00cc7a;
  padding-right: 20px;
  font-family: monospace;
  position: relative;
  min-width: 400px;
  width: 400px;
  text-align: left;
  height: 1.8em;
  line-height: 1.8em;
  min-height: 1.8em;
  color: #00cc7a !important;
  font-weight: 600;
  font-size: 1.3rem;
  background-color: transparent;
  overflow: visible;
  white-space: nowrap;
}

.names-animated::after {
  content: '';
  position: absolute;
  width: 2px;
  height: 1.5em;
  background: #00cc7a;
  top: 50%;
  transform: translateY(-50%);
  right: 2px;
  animation: blink 0.7s steps(1) infinite;
}
@keyframes blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}

/* Containers organizacionais */
.presentation-container {
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.05), rgba(26, 26, 46, 0.03));
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.portfolio-container {
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: linear-gradient(135deg, rgba(66, 184, 131, 0.03), rgba(0, 204, 122, 0.01));
  border-radius: 12px;
  border: 1px solid rgba(66, 184, 131, 0.1);
  border-left: 4px solid #42b883;
}

.presentation-container p,
.portfolio-container p {
  margin-bottom: 1rem;
  line-height: 1.7;
  color: #e0e0e0;
}

.presentation-container p:last-child,
.portfolio-container p:last-child {
  margin-bottom: 0;
}

/* Estilos da seção de currículo */
.resume-section {
  margin-top: 2rem;
  padding: 1.5rem;
  background: linear-gradient(135deg, rgba(66, 184, 131, 0.05) 0%, rgba(0, 204, 122, 0.02) 100%);
  border-radius: 12px;
  border: 1px solid rgba(66, 184, 131, 0.1);
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.resume-title {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #42b883;
  font-size: 1.3rem;
  margin-bottom: 1rem;
  font-weight: 600;
  justify-content: center;
}

.resume-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 10px;
  border: 1px solid rgba(66, 184, 131, 0.15);
  transition: all 0.3s ease;
}

.resume-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(66, 184, 131, 0.1);
  border-color: rgba(66, 184, 131, 0.3);
}

.resume-info {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex: 1;
}

.resume-icon {
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #42b883, #35a06f);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.3rem;
  box-shadow: 0 4px 15px rgba(66, 184, 131, 0.3);
}

.resume-details h4 {
  margin: 0 0 0.3rem 0;
  color: #333;
  font-size: 1.1rem;
  font-weight: 600;
}

.resume-details p {
  margin: 0 0 0.8rem 0;
  color: #666;
  line-height: 1.4;
  font-size: 0.9rem;
}

.file-info {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}

.file-size, .last-updated {
  font-size: 0.85rem;
  color: #888;
}

.download-btn {
  background: linear-gradient(135deg, #42b883, #35a06f);
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 6px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(66, 184, 131, 0.2);
  white-space: nowrap;
}

.download-btn:hover {
  background: linear-gradient(135deg, #35a06f, #2d8f5f);
  transform: translateY(-1px);
  box-shadow: 0 6px 20px rgba(66, 184, 131, 0.3);
}

.download-btn:active {
  transform: translateY(0);
}

/* Responsividade */
@media (max-width: 992px) {
  .hero-title {
    font-size: 1.8rem;
  }
  
  .names-animated {
    width: 350px;
    min-width: 350px;
    font-size: 1.1rem;
  }
  
  .title-container {
    min-height: 90px;
  }
}

@media (max-width: 768px) {
  .hero-title {
    flex-direction: column;
    text-align: center;
    gap: 0.5rem;
    font-size: 1.6rem;
  }
  
  .code-bracket {
    display: none;
  }
  
  .names-animated {
    width: 320px;
    min-width: 320px;
    font-size: 1rem;
  }
  
  .title-container {
    min-height: 70px;
  }
  
  .title-container {
    padding: 0.75rem;
    margin-bottom: 1.5rem;
  }
  
  .presentation-container,
  .portfolio-container {
    padding: 1rem;
    margin-bottom: 1.5rem;
  }
  
  .container p {
    font-size: 0.95rem;
    line-height: 1.6;
  }
  
  .resume-card {
    flex-direction: column;
    text-align: center;
    gap: 1.5rem;
  }
  
  .resume-info {
    flex-direction: column;
    text-align: center;
  }
  
  .download-btn {
    width: 100%;
    justify-content: center;
  }
  
  .resume-section {
    padding: 1.5rem;
    margin-top: 1.5rem;
  }
}

@media (max-width: 480px) {
  .page-wrapper {
    padding: 2rem 0;
  }
  
  .container {
    padding: 0 1rem;
  }
  
  .hero-title {
    font-size: 1.4rem;
  }
  
  .names-animated {
    width: 280px;
    min-width: 280px;
    font-size: 0.9rem;
  }
  
  .title-container {
    min-height: 60px;
  }
  
  .title-container,
  .presentation-container,
  .portfolio-container {
    padding: 0.75rem;
    margin-bottom: 1rem;
  }
  
  .container p {
    font-size: 0.9rem;
    margin-bottom: 1rem;
  }
  
  .file-info {
    align-items: center;
  }
  
  .resume-details h4 {
    font-size: 1rem;
  }
  
  .resume-details p {
    font-size: 0.8rem;
  }
  
  .resume-icon {
    width: 45px;
    height: 45px;
    font-size: 1.1rem;
  }
  
  .resume-section {
    padding: 1rem;
  }
}

@media (max-width: 320px) {
  .hero-title {
    font-size: 1.2rem;
  }
  
  .names-animated {
    width: 250px;
    min-width: 250px;
    font-size: 0.8rem;
  }
  
  .title-container {
    min-height: 55px;
  }
  
  .title-container,
  .presentation-container,
  .portfolio-container {
    padding: 0.5rem;
  }
  
  .container p {
    font-size: 0.85rem;
  }
}
</style>