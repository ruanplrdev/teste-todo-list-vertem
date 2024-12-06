Aqui está o README atualizado para um projeto React Native sem o uso do Expo:  

---

# Todo App  

Este é um aplicativo de gerenciamento de tarefas simples desenvolvido em **React Native**. Ele permite adicionar, excluir e marcar tarefas como concluídas, com foco em usabilidade e design limpo.  

## 📂 Repositório  
O código-fonte está disponível no GitHub no seguinte link:  
[https://github.com/ruanplrdev/teste-todo-list-vertem.git](https://github.com/ruanplrdev/teste-todo-list-vertem.git)  

## 📋 Funcionalidades  
- Adicionar novas tarefas.  
- Excluir tarefas.  
- Marcar tarefas como concluídas.  
- Pesquisa por título das tarefas. 
- Separa tarefas concluídas.
- Excluir todas as tarefas concluídas.   

Segue a seção atualizada com as escolhas técnicas incluindo **React Navigation (Stack e Tab Navigation)**:  

---

## 🛠️ Escolhas Técnicas  
1. **React Native**: Escolhido pela sua eficiência no desenvolvimento de aplicativos móveis multiplataforma com código compartilhado para Android e iOS.  
2. **Context API**: Utilizada para gerenciar o estado global do aplicativo, permitindo um código mais organizado e fácil de manter.  
3. **Componentização**: Cada funcionalidade foi dividida em componentes reutilizáveis, como `TodoItem` e `Button`, para facilitar a manutenção e a escalabilidade.  
4. **Formik**: Utilizado para lidar com formulários de maneira simplificada, fornecendo uma API robusta para controle de estado e validação dos inputs.  
5. **Yup**: Implementado para validação de dados dos formulários, garantindo que os campos atendam aos requisitos antes de serem processados.  
6. **React Navigation**:  
   - **Stack Navigation**: Usado para gerenciar a navegação entre telas de forma hierárquica, permitindo transições naturais entre diferentes páginas.  
   - **Tab Navigation**: Implementado para organizar as funcionalidades principais do app em uma barra de abas inferior, melhorando a usabilidade e o acesso às seções.  

## 🚀 Como Rodar o Projeto  

### Pré-requisitos  
- [Node.js](https://nodejs.org/) (versão LTS recomendada).  
- [Android Studio](https://developer.android.com/studio) ou [Xcode](https://developer.apple.com/xcode/) configurados para rodar emuladores.  
- React Native CLI instalado:  
  ```bash  
  npm install -g react-native-cli  
  ```  

### Passos  
1. Clone o repositório:  
   ```bash  
   git clone https://github.com/ruanplrdev/teste-todo-list-vertem.git
   ```  

2. Navegue até o diretório do projeto:  
   ```bash  
   cd todo-app  
   ```  

3. Instale as dependências:  
   ```bash  
   npm install  
   # ou use yarn
   yarn install  
   ```  

4. Inicie o Metro Bundler:  
   ```bash  
   npx react-native start  
   ```  

5. Execute o aplicativo:  
   - Para Android:  
     ```bash  
     npx react-native run-android  
     ```  
   - Para iOS:  
     ```bash  
     npx react-native run-ios  
     ```  

## 🤝 Contribuição  
Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e enviar pull requests.  

## 📄 Licença  
Este projeto está licenciado sob a licença MIT. Consulte o arquivo [LICENSE](./LICENSE) para mais informações.  
