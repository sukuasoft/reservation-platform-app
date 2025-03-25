# Reservation Platform App

Este é um aplicativo móvel desenvolvido com [Expo](https://expo.dev/), de plataforma de reservas, permitindo gerenciamento de usuários, serviços e reservas.


## Pré-requisitos

- [Node.js](https://nodejs.org/)
- Um dispositivo móvel ou emulador para testes

## Instalação

1. Clone o repositório:
    ```bash
    git clone https://github.com/sukuasoft/reservation-platform-app.git
    cd reservation-platform-app
    ```

2. Instale as dependências:
    ```bash
    npm install
    ```

3. Crie um arquivo `.env` e configure as variáveis de ambiente:
   ```env
    EXPO_PUBLIC_API_URL=https://api.sukuasoft.online
   ```

   Caso o API_URL não esteja disponível sugiro que clone o repositório da API para rodar localmente
    [Reservation Platfrom API](https://github.com/sukuasoft/reservation-platform-api.git)

4. Inicie o servidor de desenvolvimento:
    ```bash
    npm start
    ```

5. Escaneie o código QR com o aplicativo Expo Go ou execute o app em um emulador.

## Scripts

- `npm start`: Inicia o servidor de desenvolvimento do Expo
- `npm run android`: Executa o app em um emulador Android
- `npm run ios`: Executa o app em um simulador iOS
- `npm run web`: Executa o app em um navegador web

## Preview do app

Você pode visualizar a versão mais recente do aplicativo através do link abaixo:

[Preview do app](https://expo.dev/preview/update?message=Primeira%20versao&updateRuntimeVersion=1.0.0&createdAt=2025-03-25T19%3A21%3A02.221Z&slug=exp&projectId=a2edca03-fc34-4730-9bea-0594b1df1b53&group=b46d138b-aeb9-4d1c-b90d-b4e86a07ab8d)