<div align="center">

# 🥗 Dieta.AI — Mobile

**App mobile que gera planos de dieta personalizados usando IA (Google Gemini)**

[![React Native](https://img.shields.io/badge/React_Native-0.7x-61DAFB?style=flat&logo=react&logoColor=white)](https://reactnative.dev/)
[![Expo](https://img.shields.io/badge/Expo-Router-000020?style=flat&logo=expo&logoColor=white)](https://expo.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-94%25-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Gemini](https://img.shields.io/badge/Google-Gemini_AI-8E75B2?style=flat&logo=googlegemini&logoColor=white)](https://ai.google.dev/)

</div>

---

## 💡 Sobre o projeto

O **Dieta.AI** coleta informações do usuário (peso, altura, idade, objetivo, nível de atividade física) através de um fluxo de formulário em etapas e envia esses dados para o **Google Gemini**, que gera um plano alimentar completo e personalizado — refeições, horários, alimentos e suplementação sugerida.

O projeto foi construído com foco em boas práticas de arquitetura mobile:

- **Validação de formulários** com schema typing (entrada do usuário nunca chega "crua" na API)
- **Estado global** centralizado para os dados coletados entre as etapas
- **Camada de serviços** isolada para comunicação com a API
- **Tipagem forte de ponta a ponta** — da entrada do formulário até a resposta da IA

### Funcionalidades

- 📝 Fluxo de cadastro em etapas (peso, altura, idade, gênero, objetivo e nível de atividade)
- 🤖 Geração de plano alimentar completo pelo **Google Gemini** (refeições, horários e suplementos)
- 📤 Compartilhamento da dieta gerada via Share API nativa
- ⏳ Feedback visual de carregamento enquanto a IA processa a resposta

---

## 🛠️ Tecnologias

| Categoria | Stack |
|---|---|
| Framework | React Native + Expo (Expo Router, file-based routing) |
| Linguagem | TypeScript |
| Estado global | Zustand <!-- TODO: confirme --> |
| Data fetching | TanStack React Query <!-- TODO: confirme --> |
| Formulários | React Hook Form + Zod <!-- TODO: confirme --> |
| IA | Google Gemini (via API backend) |

---

## 🏗️ Arquitetura

```
dietaapp-mobile/
├── app/            # Telas e rotas (Expo Router)
│   ├── index.tsx   # Onboarding
│   ├── step/       # Fluxo de coleta de dados
│   ├── create/     # Dados de objetivo e atividade
│   └── nutrition/  # Exibição da dieta gerada
├── components/     # Componentes reutilizáveis (inputs, header, etc.)
├── services/       # Cliente HTTP e integração com a API
├── store/          # Estado global (dados do usuário entre etapas)
├── constants/      # Cores e temas
└── types/          # Tipagens compartilhadas (ex: resposta da IA)
```
<!-- TODO: ajuste os nomes das pastas internas de app/ conforme o projeto real -->

### Como funciona a integração com o Gemini

1. O usuário preenche o fluxo de etapas; cada etapa valida e persiste os dados no store global
2. Ao finalizar, o app envia os dados para a API <!-- TODO: link do repo do backend, se houver -->
3. A API monta um prompt estruturado e consulta o **Google Gemini**, exigindo resposta em JSON tipado
4. O app recebe o plano de dieta e renderiza as refeições, com opção de **compartilhar a dieta** via Share API nativa

---

## 🚀 Como rodar

### Pré-requisitos

- Node.js 18+
- Expo Go no celular **ou** emulador Android/iOS configurado

### Passos

```bash
# Clone o repositório
git clone https://github.com/TiagoVP86/dietaapp-mobile.git
cd dietaapp-mobile

# Instale as dependências
npm install

# Configure a URL da API
# <!-- TODO: descreva aqui o .env ou constante usada, ex: -->
# cp .env.example .env  →  EXPO_PUBLIC_API_URL=http://SEU_IP:3333

# Inicie o app
npx expo start
```

Escaneie o QR code com o **Expo Go** ou pressione `a` para abrir no emulador Android.

> ⚠️ O app depende da API backend rodando para gerar as dietas.
> <!-- TODO: linke o repositório do backend aqui, ou documente como subir -->

---

## 📚 O que pratiquei neste projeto

- Navegação **file-based** com Expo Router em fluxo multi-etapas
- Gerenciamento de **estado global** compartilhado entre telas
- Consumo de **IA generativa (Gemini)** com resposta estruturada e tipada
- Tratamento de **estados de loading e erro** em chamadas assíncronas
- Componentização e tipagem forte com **TypeScript**

---

## 👨‍💻 Autor

**Tiago Vieira Pires** — Full Stack & Mobile Developer

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=flat&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/tiagovieirapires/)
[![Portfolio](https://img.shields.io/badge/Portfolio-tiagovp86.github.io-FF5722?style=flat&logo=googlechrome&logoColor=white)](https://tiagovp86.github.io/portfolio)
[![Email](https://img.shields.io/badge/Email-t.vp%40hotmail.com-D14836?style=flat&logo=gmail&logoColor=white)](mailto:t.vp@hotmail.com)
