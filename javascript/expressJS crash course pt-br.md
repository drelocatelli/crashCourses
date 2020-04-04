# Express JS Crash Course PT-BR

Bem vindos ao curso de Express JS onde você irá aprender a como desenvolver aplicações como ExpressJS de maneira rápida e fácil, irá entendê-lo passo-a-passo.

https://expressjs.com/ | https://nodejs.org/ | https://codessa.com.br/

[Video tutorial (em inglês)](https://www.youtube.com/watch?v=L72fhGm1tfE)

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

## Seu Primeiro App Express!

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

### Basic Router

Abra o arquivo index.js que você criou no tutorial anterior;

```javascript
const express = require(“express”);
const app = express();
const port = 80;

app.get(“/”, (req,res)=>{

  res.send(“<h1>Hello World</h1>”);  

});


function restartConsole(){let e=`[SERVER STATUS] Servidor atualizado ${(new Date).getHours()}:${(new Date).getMinutes()}:${(new Date).getSeconds()}`;console.log("===============================================================\n",e,"\n===============================================================")}

 

app.listen(port, restartConsole()); 
```

Note que adicionamos uma função app.get(), ao salvar e abrir o navegador agora, podemos visualizar um "Hello World" impresso na página. Tudo que você envia a partir do `res.send('');` será carregado na página. Mas espere, você não irá precisar digitar o código dessa forma feia, há várias maneiras de criar uma boa view para que seu projeto fique mais profissional.

Há outros meios de responses:

- res.download();
- res.end();
- res.json();
- res.redirect();
- res.render();
- res.send();
- res.sendFile();
- res.sendStatus();

O Express é rodado por um server-side, então você não poderá visualizar os códigos em uma view-source pública diretamente do navegador web, pois os códigos estarão rodando no lado do servidor e eles são de total responsabilidade dele para a segurança.

### Path

```javascript
const express = require(“express”);
const app = express();
const port = 80;
const path = require(“path”);

app.get(“/”, (req,res)=>{

  res.sendFile(path.join(__dirname, ‘public’, ’index.html’));

});

 

 

function restartConsole(){let e=`[SERVER STATUS] Servidor atualizado ${(new Date).getHours()}:${(new Date).getMinutes()}:${(new Date).getSeconds()}`;console.log("===============================================================\n",e,"\n===============================================================")}

 

app.listen(port, restartConsole()); 
```

dando um require no path, `const path = require(“path”);` podemos definir um caminho para onde as rotas irão direcionar os links. Por exemplo, no tópico anterior vimos o quão ficaria feio escrevendo o código daquele jeito. Então podemos direcionar uma rota para onde os códigos da página serão carregados.

Observe:

```javascript
app.get(“/”, (req,res)=>{

  res.sendFile(path.join(__dirname, ‘public’, ’index.html’));

});
```

perceba que agora trocamos para `res.sendFile(*, *, *);` e ficou mais prático. São necessários três parâmetros dentro do parênteses:

__dirname : é obrigatório para definir o nome do diretório atual.

'public' : é a pasta que você irá criar para onde estará a view dos seus projetos, onde o cliente irá visualizar.

'index.html' : é o arquivo dentro de public/ que irá carregar os códigos da rota.

agora crie uma pasta chamada public e dentro dela um arquivo chamado index.html.

Obviamente, dentro de index.html estará todo o código do layout do site.

### Set Static Folder

