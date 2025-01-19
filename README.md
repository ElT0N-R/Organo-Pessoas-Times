# Gerenciador de Equipes

Este projeto é um sistema de gerenciamento de equipes desenvolvido em **React**. Ele permite que os usuários adicionem colaboradores às equipes específicas, exibindo os dados de cada colaborador em um card personalizado.

## 📋 Funcionalidades

- Formulário para adicionar colaboradores, incluindo informações como nome, cargo, imagem e time.
- Exibição dos colaboradores em equipes organizadas por categorias.
- Design responsivo e amigável.
- Uso de estados no React para gerenciar dados dinâmicos.
- Validações básicas para garantir que as informações inseridas sejam consistentes.

---

## 🛠️ Tecnologias Utilizadas

- **React**: Biblioteca principal para construção da interface.
- **CSS**: Estilização dos componentes e design responsivo.
- **JavaScript (ES6+)**: Lógica de negócios e manipulação de estados.

---

## 📂 Estrutura do Projeto

A estrutura do projeto está organizada da seguinte forma:

```
src/
│
├── components/
│   ├── Banner/         # Componente para o banner principal
│   ├── Form/           # Componente do formulário para adicionar colaboradores
│   ├── Teams/          # Componente para exibir as equipes e seus colaboradores
│   ├── Employer/       # Componente que representa um colaborador (card)
│   ├── TextArea/       # Componente reutilizável para campos de entrada
│   ├── ListSus/        # Componente de seleção (dropdown)
│   └── Button/         # Componente de botão reutilizável
│
├── App.js              # Arquivo principal da aplicação
├── index.js            # Ponto de entrada da aplicação
└── styles/             # Arquivos CSS globais
```

---

## 🧐 O Que Foi Aprendido

Durante o desenvolvimento deste projeto, vários conceitos importantes do React foram reforçados e aplicados:

1. **Componentização**:
   - Divisão da aplicação em componentes reutilizáveis e independentes.
   - Criação de componentes como `Form`, `Team` e `Employer`.

2. **Gerenciamento de Estado**:
   - Uso do **Hook `useState`** para armazenar e atualizar informações dinâmicas, como a lista de colaboradores.

3. **Props**:
   - Passagem de dados entre componentes por meio de `props`.
   - Implementação de props como funções (`props.atEmployerRecord`) para manipulação de eventos.

4. **Renderização Condicional**:
   - Uso de condições para exibir ou ocultar elementos com base nos dados, como a exibição de equipes somente quando houver colaboradores.

5. **Validação e Boas Práticas**:
   - Validação de campos obrigatórios no formulário.
   - Uso de `key` em listas renderizadas para evitar problemas de desempenho.
   - Organização modular do código para facilitar a manutenção.

6. **CSS Modular**:
   - Estilização dos componentes com arquivos CSS específicos para cada um, mantendo o código mais limpo e organizado.

---

## 🚀 Como Executar o Projeto

### Pré-requisitos
- Node.js instalado.
- Gerenciador de pacotes (npm ou yarn).

### Passos
1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/gerenciador-de-equipes.git
   cd gerenciador-de-equipes
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Execute o projeto:
   ```bash
   npm start
   ```

4. Acesse a aplicação no navegador:
   ```
   http://localhost:3000
   ```

---

## ✍️ Contribuições

Sinta-se à vontade para contribuir com o projeto. Sugestões e melhorias são sempre bem-vindas! Basta abrir uma **issue** ou enviar um **pull request**.

---

## 🖋️ Licença

Este projeto está sob a licença MIT. Consulte o arquivo `LICENSE` para mais informações.

