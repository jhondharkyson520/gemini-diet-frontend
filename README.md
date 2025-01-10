
# 🌟 **Front-End Dieta com Gemini**

## 📝 **Descrição**

Este projeto é o **frontend** de uma aplicação de dietas personalizadas. Ele permite que os usuários insiram seus dados e gerem planos alimentares de acordo com suas necessidades. A interface é desenvolvida com **React**, **TypeScript**, e **Vite**, e também inclui funcionalidades para gerar e exportar **PDFs** personalizados com detalhes das dietas utilizando **jsPDF**.

## 🚀 **Funcionalidades**

- **🔄 Geração de Dietas Personalizadas**: Criação de planos alimentares com base nas informações inseridas pelo usuário.
- **📊 Geração de PDFs**: Permite exportar as dietas geradas como arquivos PDF formatados.
- **⚙️ Integração com API Backend**: O frontend consome a API para obter os planos alimentares personalizados.
- **🎨 Design Responsivo**: Utiliza **Styled Components** para criar uma interface de usuário estilosa e responsiva.

## 🛠️ **Tecnologias Utilizadas**

- **Frontend**:
  - 🟢 React
  - 🟦 TypeScript
  - ⚡ Vite
  - 🎨 Styled Components
  - 📜 jsPDF (para exportar PDF)
  - 🌐 Axios (para comunicação com a API backend)

## 🗂️ **Estrutura do Projeto**

- 📂 **`src/assets`**: Contém arquivos estáticos, como ícones e imagens.
  - **icons**: Ícones utilizados na interface.
  - **pdfImage**: Imagem usada ao gerar o PDF.
  - **logo.svg**: Logo do projeto.

- 📂 **`src/components`**: Contém os componentes reutilizáveis da aplicação.
  - **button**: Componente para criar botões personalizados.
  - **input**: Componente para campos de entrada de texto.
  - **select**: Componente para campos de seleção.

- 📂 **`src/context`**: Gerencia o estado global da aplicação.
  - **DietContext.tsx**: Contexto responsável por armazenar e manipular o estado das dietas.

- 📂 **`src/services`**: Contém os arquivos de comunicação com a API.
  - **api.ts**: Arquivo com funções para chamar a API.
  - **apiClient.ts**: Configuração de cliente para realizar as requisições HTTP.

- 📂 **`src/view`**: Contém as telas da aplicação.
  - **begin**: Tela inicial do processo de criação da dieta.
  - **finish**: Tela de finalização, onde o usuário pode visualizar o resultado.
  - **home**: Tela principal da aplicação.
  - **result**: Tela de resultados com detalhes da dieta gerada.

- 📂 **`src`**:
  - **App.tsx**: Arquivo principal da aplicação.
  - **index.css**: Arquivo de estilos globais.
  - **main.tsx**: Arquivo de entrada que renderiza o componente principal.

## ⚙️ **Instalação e Execução**

1. **Clone o repositório do projeto**:
   ```bash
   git clone https://github.com/jhondharkyson520/DietaGeminiFrontend.git
   ```

2. **Entre na pasta do projeto**:
   ```bash
   cd DietaGeminiFrontend
   ```

3. **Instale as dependências**:
   ```bash
   npm install
   ```

4. **Execute a aplicação**:
   ```bash
   npm run dev
   ```

5. **Acesse a aplicação em**:  
   `http://localhost:5173/`

## 🌐 **Endpoints**

A aplicação se comunica com a API backend para gerar os planos alimentares. Abaixo estão os endpoints usados pelo frontend:

- **POST `/create`**: Gera um plano alimentar personalizado.
  - **Body (JSON)**:
    ```json
    {
      "name": "string",
      "weight": "string",
      "height": "string",
      "age": "string",
      "gender": "string",
      "objective": "string",
      "level": "string"
    }
    ```

## 💡 **Design e Arquitetura**

A aplicação foi projetada para ser simples e intuitiva, com uma navegação fácil entre as telas. A tela inicial permite ao usuário fornecer dados para a dieta, enquanto a tela de resultados mostra o plano alimentar gerado com base nas informações fornecidas.

### **Context API**:
- Utilizamos o `DietContext` para gerenciar o estado global da dieta em toda a aplicação. Isso permite que as informações da dieta sejam acessíveis em qualquer lugar da aplicação sem a necessidade de passar props manualmente.

### **jsPDF**:
- Usamos o `jsPDF` para gerar arquivos PDF com o plano alimentar personalizado. O PDF inclui detalhes como o nome do usuário, objetivo, e a lista de refeições.
