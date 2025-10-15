<template>
  <div class="page-wrapper">
    <section class="container py-4">
    <h1 class="page-title">Vamos bater um papo sobre projetos e oportunidades?</h1>
    
    <!-- Formul?rio de Contato -->
    <div class="contact-form-section">
      <h2>Envie uma mensagem</h2>
      <form @submit.prevent="submitForm" class="contact-form">
        <div class="form-group">
          <label for="name">Nome *</label>
          <input 
            type="text" 
            id="name" 
            v-model="form.name" 
            required 
            class="form-control"
            placeholder="Seu nome completo"
          >
        </div>
        
        <div class="form-group">
          <label for="email">E-mail *</label>
          <input 
            type="email" 
            id="email" 
            v-model="form.email" 
            required 
            class="form-control"
            placeholder="seu@email.com"
          >
        </div>
        
        <div class="form-group">
          <label for="subject">Assunto *</label>
          <input 
            type="text" 
            id="subject" 
            v-model="form.subject" 
            required 
            class="form-control"
            placeholder="Sobre o que voc? gostaria de falar?"
          >
        </div>
        
        <div class="form-group">
          <label for="message">Mensagem *</label>
          <textarea 
            id="message" 
            v-model="form.message" 
            required 
            class="form-control"
            rows="5"
            placeholder="Descreva seu projeto ou oportunidade..."
          ></textarea>
        </div>
        
        <div class="form-buttons">
          <button type="submit" class="btn btn-primary" :disabled="isSubmitting">
            <i class="fas fa-paper-plane" v-if="!isSubmitting"></i>
            <i class="fas fa-spinner fa-spin" v-if="isSubmitting"></i>
            {{ isSubmitting ? 'Enviando...' : 'Enviar Mensagem' }}
          </button>
          
          <button type="button" class="btn btn-secondary" @click="openEmailClient" :disabled="!isFormValid">
            <i class="fas fa-envelope"></i>
            Abrir Email
          </button>
        </div>
        
        <div v-if="submitMessage" class="alert" :class="submitSuccess ? 'alert-success' : 'alert-error'">
          {{ submitMessage }}
        </div>
      </form>
    </div>
    
    <!-- Contato Direto -->
    <div class="direct-contact">
      <h2>Ou entre em contato diretamente</h2>
      <p>
        <a href="mailto:jjuniorrodrigue@gmail.com">
          <i class="fas fa-envelope"></i> jjuniorrodrigue@gmail.com
        </a>
      </p>
      <p>Voc? tamb?m pode me encontrar nas redes sociais:</p>
    </div>
    <ul>
      <li>
        <a href="https://www.linkedin.com/in/raimundojuniordev/" target="_blank" rel="noopener noreferrer">
          <i class="bi bi-linkedin"></i>
        </a>
      </li>
      <li>
        <a href="https://github.com/Dev0xRJ" target="_blank" rel="noopener noreferrer">
          <i class="bi bi-github"></i>
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/raimundojuniordev/" target="_blank" rel="noopener noreferrer">
          <i class="bi bi-whatsapp"></i>
        </a>
      </li>
    </ul>
    </section>
  </div>
</template>

<script>
export default { 
  name: 'Contact',
  data() {
    return {
      form: {
        name: '',
        email: '',
        subject: '',
        message: ''
      },
      isSubmitting: false,
      submitMessage: '',
      submitSuccess: false
    }
  },
  computed: {
    isFormValid() {
      return this.form.name && this.form.email && this.form.subject && this.form.message;
    }
  },
  methods: {
    async submitForm() {
      this.isSubmitting = true;
      this.submitMessage = '';
      
      try {
        // Op??o 1: Tentativa com Formspree
        await this.tryFormspree();
      } catch (formspreeError) {
        console.log('Formspree falhou, tentando m?todo alternativo...');
        try {
          // Op??o 2: Fallback para mailto (sempre funciona)
          this.handleMailtoFallback();
        } catch (error) {
          this.submitSuccess = false;
          this.submitMessage = '? Erro ao enviar mensagem. Tente novamente ou use o e-mail direto: jjuniorrodrigue@gmail.com';
          console.error('Erro no envio:', error);
        }
      } finally {
        this.isSubmitting = false;
        // Limpar mensagem ap?s 8 segundos
        setTimeout(() => {
          this.submitMessage = '';
        }, 8000);
      }
    },

    async tryFormspree() {
      const response = await fetch('https://formspree.io/f/mnnqkjqy', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: this.form.name,
          email: this.form.email,
          subject: this.form.subject,
          message: this.form.message,
          _replyto: this.form.email
        })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      this.submitSuccess = true;
      this.submitMessage = '? Mensagem enviada com sucesso! Entrarei em contato em breve.';
      this.resetForm();
    },

    handleMailtoFallback() {
      // Cria um link mailto com os dados do formul?rio
      const subject = encodeURIComponent(this.form.subject);
      const body = encodeURIComponent(
        `Nome: ${this.form.name}\n` +
        `Email: ${this.form.email}\n\n` +
        `Mensagem:\n${this.form.message}`
      );
      
      const mailtoLink = `mailto:jjuniorrodrigue@gmail.com?subject=${subject}&body=${body}`;
      
      // Abre o cliente de email padr?o
      window.location.href = mailtoLink;
      
      this.submitSuccess = true;
      this.submitMessage = '?? Abrindo seu cliente de email... Se n?o abrir automaticamente, copie os dados e envie para: jjuniorrodrigue@gmail.com';
      
      // N?o limpa o formul?rio para o usu?rio poder copiar os dados se necess?rio
    },

    openEmailClient() {
      if (!this.isFormValid) {
        this.submitMessage = '?? Por favor, preencha todos os campos obrigat?rios.';
        this.submitSuccess = false;
        return;
      }
      
      this.handleMailtoFallback();
    },
    
    resetForm() {
      this.form = {
        name: '',
        email: '',
        subject: '',
        message: ''
      };
    }
  }
}
</script>

<style scoped>
/* Formul?rio de Contato */
.contact-form-section {
  margin: 3rem 0;
  padding: 2rem;
  background: var(--bg-light);
  border-radius: 12px;
  border: 1px solid rgba(0, 255, 153, 0.1);
}

.contact-form-section h2 {
  color: var(--primary-color);
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
}

.contact-form {
  max-width: 600px;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  color: var(--text-color);
  font-weight: 600;
}

.form-control {
  width: 100%;
  padding: 0.75rem;
  background: var(--bg-dark);
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: var(--text-color);
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

.form-control:focus {
  outline: none;
  border-color: var(--primary-color);
  box-shadow: 0 0 0 3px rgba(0, 255, 153, 0.1);
}

.form-control::placeholder {
  color: #888;
}

textarea.form-control {
  resize: vertical;
  min-height: 120px;
}

.form-buttons {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.btn {
  border: none;
  padding: 0.75rem 2rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
}

.btn-primary {
  background: var(--primary-color);
  color: var(--bg-dark);
}

.btn-secondary {
  background: transparent;
  color: var(--primary-color);
  border: 2px solid var(--primary-color);
}

.btn-primary:hover:not(:disabled) {
  background: #00cc7a;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 255, 153, 0.3);
}

.btn-secondary:hover:not(:disabled) {
  background: var(--primary-color);
  color: var(--bg-dark);
  transform: translateY(-2px);
}

.btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.alert {
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 8px;
  font-weight: 500;
}

.alert-success {
  background: rgba(0, 255, 153, 0.1);
  color: var(--primary-color);
  border: 1px solid rgba(0, 255, 153, 0.3);
}

.alert-error {
  background: rgba(255, 82, 82, 0.1);
  color: #ff5252;
  border: 1px solid rgba(255, 82, 82, 0.3);
}

/* Contato Direto */
.direct-contact {
  margin: 3rem 0;
  text-align: center;
}

.direct-contact h2 {
  color: var(--primary-color);
  margin-bottom: 1rem;
}

.direct-contact a {
  color: var(--primary-color);
  text-decoration: none;
  font-size: 1.1rem;
  transition: color 0.3s ease;
}

.direct-contact a:hover {
  color: #00cc7a;
}

/* Redes Sociais */
ul {
  list-style: none;
  padding: 0;
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 1rem;
}

ul li {
  display: inline-block;
}

ul li a {
  color: var(--primary-color);
  font-size: 1.5rem;
  transition: all 0.3s ease;
  text-decoration: none;
}

ul li a:hover {
  color: #00cc7a;
  transform: scale(1.1);
}

ul li a i {
  font-size: 1.5rem;
}

/* Responsivo */
@media (max-width: 768px) {
  .contact-form-section {
    padding: 1rem;
    margin: 2rem 0;
  }
  
  .form-buttons {
    flex-direction: column;
  }
  
  .btn {
    width: 100%;
    justify-content: center;
  }
}
</style>

 
