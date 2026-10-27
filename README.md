# Blog Fictício 📝

Aplicação web desenvolvida com React e TypeScript para gerenciamento de postagens, permitindo visualizar, criar, editar e excluir posts por meio de uma API.

## 🚀 Tecnologias utilizadas

- **React** — construção de interfaces com componentes.
- **TypeScript** — tipagem estática.
- **Vite** — ambiente de desenvolvimento e build.
- **React Router DOM** — gerenciamento de rotas e navegação.
- **Axios** — realização de requisições HTTP.
- **Custom Hooks** — criação do hook `useApi` para centralizar e reutilizar as requisições à API.
- **CSS** — estilização da aplicação.
- **ESLint** — análise estática do código.

## ✨ Funcionalidades

- Listagem de postagens.
- Visualização completa de uma postagem selecionada.
- Criação de novas postagens.
- Edição de postagens existentes.
- Exclusão de postagens.
- Navegação entre páginas utilizando React Router.
- Consumo de API por meio de operações HTTP.

## 📦 Pré-requisitos

- [Node.js](https://nodejs.org/)
- npm
- Git

## ⚙️ Como executar o projeto

**1. Clone o repositório**

```bash
git clone <URL_DO_REPOSITORIO>
```

**2. Acesse a pasta do projeto**

```bash
cd blog_ficticio
```

**3. Instale as dependências**

```bash
npm install
```

**4. Inicie o servidor de desenvolvimento**

```bash
npm run dev
```

Acesse a URL apresentada no terminal, normalmente `http://localhost:5173`.

## 🧪 Scripts disponíveis

**Verificar o código com ESLint:**

```bash
npm run lint
```

**Gerar a versão de produção:**

```bash
npm run build
```

**Visualizar a versão de produção localmente:**

```bash
npm run preview
```

Os arquivos compilados são gerados na pasta `dist`.

## 🔌 Integração com API

A aplicação utiliza o Axios para realizar requisições HTTP, organizadas por meio do hook personalizado `useApi`.

As operações implementadas incluem:

- `GET` — consulta de postagens.
- `POST` — criação de postagens.
- `PUT` — atualização de postagens.
- `DELETE` — exclusão de postagens.

## 📚 Objetivo do projeto

Projeto desenvolvido para praticar React, TypeScript, gerenciamento de rotas, Custom Hooks, consumo de APIs e operações CRUD, aplicando boas práticas de desenvolvimento frontend.

Desenvolvido como projeto de estudo em desenvolvimento web com React e TypeScript.
