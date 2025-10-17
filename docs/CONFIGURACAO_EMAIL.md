# Configura??o do Formul?rio de Email

## ?? Como configurar o recebimento de emails

O formul?rio de contato est? pronto, mas voc? precisa configurar um servi?o para receber os emails. Aqui est?o as op??es:

## Op??o 1: Formspree (Recomendado - Gratuito)

### Passo a passo:

1. **Acesse**: https://formspree.io/
2. **Crie uma conta gratuita**
3. **Crie um novo formul?rio**:
   - Clique em "New Form"
   - Digite seu email: `jjuniorrodrigue@gmail.com`
   - Copie o **Form ID** (algo como `xvgpqjyr`)

4. **Atualize o c?digo**:
   No arquivo `src/components/Contact.vue`, linha ~47, substitua:
   ```javascript
   const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
   ```
   Por:
   ```javascript
   const response = await fetch('https://formspree.io/f/SEU_FORM_ID_AQUI', {
   ```

### Benef?cios do Formspree:
- ? Gratuito at? 50 emails/m?s
- ? Anti-spam integrado
- ? F?cil configura??o
- ? Emails chegam diretamente na sua caixa de entrada

---

## Op??o 2: EmailJS (Alternativa)

### Passo a passo:

1. **Acesse**: https://www.emailjs.com/
2. **Crie uma conta gratuita**
3. **Configure um servi?o de email** (Gmail, Outlook, etc.)
4. **Crie um template de email**
5. **Instale o EmailJS**:
   ```bash
   npm install @emailjs/browser
   ```

6. **Atualize o c?digo** no Contact.vue para usar EmailJS

### Benef?cios do EmailJS:
- ? Gratuito at? 200 emails/m?s
- ? Mais controle sobre templates
- ? Pode enviar emails do seu pr?prio dom?nio

---

## Op??o 3: Netlify Forms (Se hospedar na Netlify)

Se voc? hospedar o site na Netlify, pode usar o Netlify Forms:

1. **Adicione** `netlify` no atributo `form` do HTML
2. **Deploy** na Netlify
3. **Configure** as notifica??es no painel da Netlify

---

## ? Configura??o R?pida (Formspree)

Para come?ar rapidamente:

1. V? em https://formspree.io/f/new
2. Digite: `jjuniorrodrigue@gmail.com`
3. Copie o ID do formul?rio
4. Cole no c?digo onde est? `YOUR_FORM_ID`
5. Pronto! ??

---

## ?? Testando o Formul?rio

Ap?s configurar:

1. **Acesse** sua p?gina de contato
2. **Preencha** o formul?rio
3. **Envie** uma mensagem de teste
4. **Verifique** se chegou no seu email

---

## ?? Personaliza??o

Voc? pode personalizar:

- ?? **Campos do formul?rio** (adicionar telefone, empresa, etc.)
- ?? **Estilos CSS** 
- ?? **Templates de email**
- ??? **Valida??es adicionais**

---

## ?? Importante

- Mantenha seu **Form ID** privado
- Configure **anti-spam** no servi?o escolhido
- Teste sempre antes de publicar
- Monitore a caixa de entrada regularmente

---

**D?vidas?** Entre em contato! ??