# 🚀 Luan Ferreira — Portfolio Pessoal (Deep Space Theme)

Site estático pessoal desenvolvido com **Jekyll**, estilizado com tema **Deep Space** (Modo Escuro, campo estelar dinâmico em CSS puro e Glassmorphism) e 100% pronto para publicação no **GitHub Pages**.

---

## 🌌 Recursos Principais

- **Design Responsivo (Mobile First):** Suporte completo para smartphones, tablets e desktops via Flexbox, CSS Grid e media queries refinadas.
- **Tema Deep Space (Modo Escuro):** Paleta inspirada no espaço sideral com gradientes profundos, partículas estelares em múltiplas camadas e nebulosas cósmicas com animação em **CSS puro**.
- **Glassmorphism Premium:** Fundo translúcido com `backdrop-filter: blur()`, bordas brilhantes sutis, reflexos de luz e elevação interativa nos cards.
- **Internacionalização (PT / EN):**
  - Português na raiz (`/`) com dados em `_data/pt.yml`.
  - Inglês na subpasta (`/en/`) com dados em `_data/en.yml`.
  - Botão alternador de idioma fixo no cabeçalho (**Language Toggle: PT | EN**).
- **Formulário de Contato com EmailJS:**
  - Envio direto sem necessidade de backend tradicional (`emailjs.sendForm`).
  - Tratamento de promessas com feedback visual dinâmico (sucesso e erro) traduzido no idioma ativo.
- **Arquitetura Modular Jekyll:** Separação limpa entre layouts, templates parciais (`_includes/`), dados estruturados (`_data/`) e estilos SCSS.

---

## 📁 Estrutura do Projeto

```
luandeferreira/
├── _config.yml               # Configurações globais do Jekyll e EmailJS
├── _data/
│   ├── pt.yml                # Conteúdo e traduções em Português
│   └── en.yml                # Conteúdo e traduções em Inglês
├── _includes/
│   └── portfolio.html        # Componente modular com as seções do portfólio
├── _layouts/
│   └── default.html          # Layout base com CSS, FontAwesome, EmailJS e Toggle
├── assets/
│   ├── css/
│   │   └── style.scss        # SCSS com variáveis, tema Deep Space, estrelas e Glassmorphism
│   ├── js/
│   │   └── contact.js        # Lógica de escuta e envio assíncrono com EmailJS
│   └── images/
│       └── image_5f7d26.png  # Foto de perfil com borda circular brilhante
├── en/
│   └── index.html            # Ponto de entrada em Inglês (/en/)
├── index.html                # Ponto de entrada em Português (/)
├── .gitignore                # Arquivos ignorados pelo controle de versão
└── README.md                 # Documentação do projeto
```

---

## 📬 Como Configurar o Formulário EmailJS

Para que o formulário de contato envie as mensagens diretamente para seu e-mail:

1. Crie uma conta gratuita em [EmailJS](https://www.emailjs.com/).
2. No painel, adicione um **Email Service** (ex: Gmail) e anote o **Service ID**.
3. Crie um **Email Template** e certifique-se de usar as seguintes variáveis de campo:
   - `{{from_name}}` — Nome do remetente.
   - `{{reply_to}}` — E-mail para resposta.
   - `{{message}}` — Mensagem enviada.
   - Anote o **Template ID**.
4. Acesse **Account > API Keys** e copie sua **Public Key**.
5. Abra o arquivo `_config.yml` e insira suas credenciais:
   ```yaml
   emailjs:
     public_key: "SUA_PUBLIC_KEY_AQUI"
     service_id: "SEU_SERVICE_ID_AQUI"
     template_id: "SEU_TEMPLATE_ID_AQUI"
   ```
*(Opcionalmente, você também pode substituí-las diretamente no `_layouts/default.html` e `assets/js/contact.js`).*

---

## 🌐 Publicação no GitHub Pages

1. Suba este repositório para sua conta no GitHub (ex: `https://github.com/luandeferreira/luandeferreira.github.io`).
2. Acesse a aba **Settings** do repositório no GitHub.
3. No menu lateral, selecione **Pages**.
4. Em **Build and deployment > Source**, escolha **Deploy from a branch** e selecione a branch `main` ou `master` (raiz `/`).
5. O GitHub Pages irá processar automaticamente o Jekyll e publicar o site no endereço:
   `https://luandeferreira.github.io` (ou na URL do seu repositório).

---

## 💻 Execução Local (Opcional)

Se você possuir Ruby e Bundler instalados na máquina:

```bash
# Instalar Jekyll e dependências
gem install jekyll bundler

# Iniciar servidor local com live-reload
jekyll serve --livereload
```

O site estará acessível em `http://localhost:4000`.

---

## 🧑‍💻 Autor

**Luan Ferreira**
- GitHub: [@luandeferreira](https://github.com/luandeferreira)
- LinkedIn: [in/luandeferreira](https://www.linkedin.com/in/luandeferreira/)
- Instagram: [@luandeferreira](https://instagram.com/luandeferreira)
