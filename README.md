---

# TaskApp - Aplicação de Tarefas com React Native e TypeScript

Este projeto é uma aplicação de tarefas criada em **React Native** com **TypeScript**, utilizando **AsyncStorage** para persistência local dos dados, e **React Navigation** com abas de navegação (Tabs). A aplicação permite ao utilizador gerir tarefas, marcá-las como concluídas, adicionar novas tarefas, filtrar tarefas por nome e visualizar as últimas atividades.

## Funcionalidades

- **Adicionar nova tarefa**: O utilizador pode criar uma nova tarefa com título, descrição e data.
- **Marcar tarefa como concluída**: O utilizador pode marcar/desmarcar uma tarefa como concluída.
- **Filtrar tarefas por nome**: Input de filtro para procurar tarefas pelo nome.
- **Persistência de dados**: As tarefas são armazenadas localmente usando **AsyncStorage**, garantindo que as tarefas não se perdem ao fechar o aplicativo.
- **Últimas atividades**: Uma aba dedicada onde o utilizador pode ver as últimas atividades (tarefas concluídas).
- **Navegação por Abas**: Navegação entre as telas de "Tarefas" e "Últimas Atividades" com ícones nas abas.

## Pré-requisitos

Antes de executar o projeto, certifique-se de que o seu ambiente de desenvolvimento React Native está configurado. Consulte a [documentação oficial](https://reactnative.dev/docs/environment-setup) para verificar os passos necessários.

- Node.js
- React Native CLI
- Emulador ou dispositivo físico Android/iOS

## Instalação

Siga os passos abaixo para configurar e executar o projeto localmente:

1. Clone este repositório:
   ```bash
   git clone https://github.com/LeoRVergani/TaskApp.git
   ```

2. Navegue até o diretório do projeto:
   ```bash
   cd TaskApp
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

4. Instale os pods para iOS (apenas para iOS):
   ```bash
   cd ios
   pod install
   cd ..
   ```

## Executando o Projeto

1. Para **Android**:
   ```bash
   npx react-native run-android
   ```

2. Para **iOS**:
   ```bash
   npx react-native run-ios
   ```

Certifique-se de que o emulador ou dispositivo está conectado corretamente.

## Estrutura do Projeto

- **App.tsx**: O arquivo principal do aplicativo que configura a navegação por abas e os ícones.
- **/src/screens**: Contém as telas do aplicativo.
  - `TaskScreen.tsx`: Tela principal onde as tarefas são exibidas, criadas e filtradas.
  - `LastActivityScreen.tsx`: Tela onde as últimas atividades são exibidas.
- **/src/components**: Aqui podes adicionar componentes reutilizáveis como um "Card de Tarefa" no futuro.

## Bibliotecas Utilizadas

- **React Navigation**: Para navegação por abas no aplicativo.
- **AsyncStorage**: Para armazenamento local das tarefas.
- **TypeScript**: Linguagem usada para tipagem estática e melhoria de qualidade do código.

## Contribuição

Se desejares contribuir para este projeto, por favor, abre uma **issue** ou envia um **pull request** com as tuas sugestões e melhorias.

## Licença

Este projeto está licenciado sob a licença MIT. Consulte o arquivo [LICENSE](LICENSE) para mais informações.

---
