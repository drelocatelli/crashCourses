# Express JS Crash Course PT-BR

Bem vindos ao curso de Express JS onde você irá aprender a como desenvolver aplicações como ExpressJS de maneira rápida e fácil, irá entendê-lo passo-a-passo.

https://expressjs.com/

https://nodejs.org/

## Visão geral

ExpressJS é um framework javascript criado para rodar no server-side ou back-end focado nas linguagens javascript e nodeJS. Assim, podemos criar roteamento e leitura com servidor e banco de dados SQL ou NOSQL com segurança, além dos códigos serem mantidos no server-side, não havendo possibilidade de ter acesso ao conteúdo do código.

[TOC]

#### HTTP Status Code

A Sintaxe básica para se iniciar um servidor Express é esta, apenas para você ter uma visão geral:

```javascript
const express = require(“express”);
const app = express();

// Criando o roteamento padrão
app.get(“/”, function(){
   res.send(“Hello World”);
});

// Porta do servidor, padrão = localhost:3000

app.listen(80);
```

#### Basic route handling

Você pode utilizar app.get; app.post(); app.put; app.delete(); dentre outros.

Pode analisar os dados recebidos com a dependência BodyParser, que será necessária a instalação.

```javascript
app.get(“/”, function(req, res){

  // Buscar do banco de dados SQL ou NOSQL

  // Carregar páginas

  // Retornar página em JSON 

});
```

------

## Criando seu Primeiro App Express!

Crie uma pasta para seu primeiro projeto, ela deve estar vazia. Abra com o prompt de comandos, cd caminho_da_pasta_do_projeto/ e dê um enter.

Agora vamos instalar todas as dependências necessárias!

Apenas copie e cole **linha por linha** no CMD:

`npm init -y`

`npm i express --save`

`npm i nodemon`

O nodemon é uma ferramenta que irá assistir todas as mudanças feitas no seu código a partir da pasta que você deu um `npm init -y` e com isso, irá reestartar o servidor toda vez que o código for alterado e salvo.

Crie um index.js na pasta raiz do seu projeto e cole os códigos:

```javascript
const express = require(“express”);
const app = express();
const port = 80;


function restartConsole(){let e=`[SERVER STATUS] Servidor atualizado ${(new Date).getHours()}:${(new Date).getMinutes()}:${(new Date).getSeconds()}`;console.log("===============================================================\n",e,"\n===============================================================")}


app.listen(port, restartConsole()); 
```

Se necessário, altere a porta 80 para a padrão 3000 se caso ocorrer um erro em `const port = 80`.

Agora salve os arquivos e abra seu navegador, vá para localhost:PORTA.

Ok, não irá visualizar nada demais ainda.

Podemos criar a primeira rota agora.

### Criando a primeira rota

