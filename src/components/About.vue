<template>
  <div class="page-wrapper">
    <div class="container">
      <h3 class="hero-title">
        <span class="code-bracket">&lt;</span>
        <span class="title-animate">
          I am a <span class="names-animated">{{ displayText }}</span>
        </span>
        <span class="code-bracket">/&gt;</span>
      </h3>
      <p> Olá, eu sou <strong>Raimundo Junior</strong>, um profissional dinâmico e proativo, com uma sólida experiência em atendimento ao cliente e suporte técnico. Minha trajetória me proporcionou habilidades essenciais em comunicação, organização e resolução de problemas, que agora aplico com paixão na área de Tecnologia da Informação.</p>
      <p>
        Atualmente, estou expandindo meus conhecimentos em Análise e Desenvolvimento de Sistemas, com um olhar especial para a programação e a segurança de TI. 
        Minhas experiências anteriores me ensinaram a diagnosticar e solucionar problemas de forma eficiente, um talento que me permite aprender rapidamente e me adaptar a novos desafios.
      </p>
      <p>
        Neste portfólio, você encontrará projetos que demonstram meu compromisso com o aprendizado contínuo e minha dedicação em transformar ideias em soluções práticas. 
        Meu objetivo é evoluir como profissional de tecnologia, aplicando minha base de conhecimento para construir e entregar resultados de alta qualidade em cada projeto.
      </p>
      <p>Obrigado por visitar meu portfólio. Estou animado para compartilhar minha jornada e contribuir com soluções inovadoras na área de TI.</p>
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
      displayText: ''
    }
  },
  mounted() {
    this.typeWriter()
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.names.length
      this.typeWriter()
    }, 3000)
  },
  methods: {
    typeWriter() {
      this.displayText = ''
      const name = this.names[this.currentIndex]
      let i = 0
      const interval = setInterval(() => {
        this.displayText += name[i]
        i++
        if (i >= name.length) clearInterval(interval)
      }, 100)
    }
  }
}
</script>

<style scoped>
.hero-title {
  display: flex;
  align-items: center;
  gap: 8px;
}

/* Animação e movimento apenas no título */
.title-animate {
  display: inline-block;
  animation: moveTitle 1s cubic-bezier(.68,-0.55,.27,1.55);
}

@keyframes moveTitle {
  0% { transform: scale(0.9) translateY(20px); opacity: 0; }
  100% { transform: scale(1) translateY(0); opacity: 1; }
}

.name-animated {
  display: inline-block;
  border-bottom: 2px solid #42b883;
  padding-right: 4px;
  font-family: monospace;
  position: relative;
}
.name-animated::after {
  content: '';
  display: inline-block;
  width: 2px;
  height: 1em;
  background: #42b883;
  margin-left: 2px;
  animation: blink 0.7s steps(1) infinite;
  position: absolute;
  right: -6px;
  top: 0;
}
@keyframes blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}
</style>