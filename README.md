📱 URL Shortener Mobile — React Native + Expo


Aplicação mobile para encurtar URLs utilizando a API disponibilizada no teste técnico.
O foco do projeto é demonstrar arquitetura limpa, componentização, gerenciamento de estado, organização de código e testes unitários + UI.


🚀 Tecnologias Utilizadas

React Native (Expo SDK 54)

TypeScript

Expo Router

Context API + Reducer (estado global)

Jest + jest-expo (testes)

React Native Testing Library (UI tests)

Expo Modules

Node 20 LTS (necessário para testes)


📂 Arquitetura do Projeto

O projeto foi estruturado seguindo um padrão limpo, separando UI, lógica e estilos, permitindo testes mais fáceis e melhor manutenção.

src/
  api/
    urlShortenerApi.ts
  components/
    ShortenForm/
      index.tsx     # JSX
      data.ts       # lógica
      styles.ts     # estilos
    UrlList/
      index.tsx
      data.ts
      styles.ts
  context/
    ShortenerContext.tsx
  screens/
    HomeScreen/
      index.tsx
      data.ts
      styles.ts

__tests__/
  urlShortenerApi.test.ts      # teste unitário da API
  HomeScreen.test.tsx          # teste de interface

✔ Benefícios dessa arquitetura

Facilita testes

Fácil manutenção

Separação clara de responsabilidades

Componentes pequenos e limpos

Escalável


🔗 API Utilizada

Base URL:

https://url-shortener-server.onrender.com/api/alias

POST /api/alias – encurtar URL

Request:

{
  "url": "https://google.com"
}


Response:

{
  "alias": "abc123",
  "_links": {
    "self": "https://google.com",
    "short": "https://short.ly/abc123"
  }
}


🧪 Testes

O projeto implementa:

✔ Teste Unitário (urlShortenerApi.test.ts)

Mock da API

Testa normalização dos dados

Testa tratamento de erro

Testa chamada do fetch com parâmetros corretos

✔ Teste de Interface (HomeScreen.test.tsx)

Renderiza a Home

Preenche o input

Aperta o botão

Verifica se shortenUrl foi chamado com a URL digitada

▶ Rodando os testes
npm test


⚠ Necessário Node 20 LTS (jest-expo não funciona com Node 22)


🧰 Como Rodar o Projeto
1. Instale Node 20 (LTS)

Usuários de Windows com NVM:

nvm install 20
nvm use 20

2. Instale as dependências
npm install

3. Execute o app
npm start


🧠 Decisões de Engenharia

State Global com Context + Reducer:
Simples, leve e ideal para apps pequenos sem necessidade de Redux.

Componentização em index/data/styles:
Facilita leitura, testes e escalabilidade.

Mocks completos nos testes:
Evita dependência de API real → testes mais rápidos e determinísticos.

Expo Router:
Mantém estrutura preparada caso o app cresça para múltiplas telas.# urlShortener
