# Express JS Crash Course PT-BR

Bem vindos ao curso de Express JS onde você irá aprender a como desenvolver aplicações como ExpressJS de maneira rápida e fácil, irá entendê-lo passo-a-passo.

https://expressjs.com/ | https://nodejs.org/ | https://codessa.com.br/

[Video tutorial (em inglês)](https://www.youtube.com/watch?v=L72fhGm1tfE)

## Visão geral

ExpressJS é um framework javascript criado para rodar no server-side ou back-end focado nas linguagens javascript e nodeJS. Assim, podemos criar roteamento e leitura com servidor e banco de dados SQL ou NOSQL com segurança, além dos códigos serem mantidos no server-side, não havendo possibilidade de ter acesso ao conteúdo do código.

[TOC]

## Sumário

- [Visão geral](#visão-geral)
  
  - [HTTP Status Code](#http-status-code)
  
  - [Basic Route Handling](#basic-route-handling)
- [Seu Primeiro App Express!](#seu-primeiro-app-express)
  - [Basic Router](#basic-router)
  - [Path Redirect](#path)
  - [Set Static Folder](#set-static-folder)
  - [JSON Page View and Exports Modules](#json-page-view-and-exports-modules)
  - [Init Middleware](#init-middleware)
  - [Url Parameters](#url-parameters)

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

A pasta estática servirá como uma pasta para view dos seus projetos, onde o cliente irá visualizar tudo.

Para veincular arquivos estáticos, como imagens, arquivos CSS, arquivos javascript, utilize o express.static, este método é chamado de middleware.

Você pode substituir a linha de código por esta que ainda estará funcionando agora de maneira estática:

`app.use(express.static(path.join(__dirname, 'public')));`

Agora, dentro da pasta public/ você poderá colocar qualquer arquivo html adicional que quiser. Por exemplo, se criar um arquivo chamado about.html, este poderá ser facilmente acessado por http://localhost/about.html.

Tudo que estará dentro da pasta public poderá ser acessada pelo cliente.

### JSON Page View and Exports Modules

Podemos criar uma rota pra mostrar os JSON's:

```javascript
const express = require(“express”);
const app = express();
const port = 80;
const path = require(“path”);

const members = [
	{
    id:1,
    name: 'John Doe',
    email: 'john@gmail.com',
    status: 'active'
	},
    {
     id:2,
     name: 'Bob Williams',
     email: 'bob@gmail.com',
     status: 'inactive'
    }
    {
     id:3,
     name: 'Shannon Jackson',
     email: 'shannon@gmail.com',
     status: 'active'
    }
]

// Gets all members
app.get(“/api/members”, (req, res)=>{

  res.json(members);

});

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));


 

function restartConsole(){let e=`[SERVER STATUS] Servidor atualizado ${(new Date).getHours()}:${(new Date).getMinutes()}:${(new Date).getSeconds()}`;console.log("===============================================================\n",e,"\n===============================================================")}

 
app.listen(port, restartConsole()); 
```

Note que agora estou passando um res.json() para mostrar todos os membros dentro da variável JSON que criei.

Posso também colocar essa variável em um arquivo separado pra ficar mais organizado.

Vou criar um arquivo chamado Members.js na pasta raiz do projeto e chama-lo la dentro deste modo:

```javascript
const members = [
	{
    id:1,
    name: 'John Doe',
    email: 'john@gmail.com',
    status: 'active'
	},
    {
     id:2,
     name: 'Bob Williams',
     email: 'bob@gmail.com',
     status: 'inactive'
    }
    {
     id:3,
     name: 'Shannon Jackson',
     email: 'shannon@gmail.com',
     status: 'active'
    }
]

module.exports = members;
```

o module.exports é necessário para o servidor carregar a aplicação.

Vamos traze-lo agora para a index.js dando um require do arquivo:

```javascript
const express = require(“express”);
const app = express();
const port = 80;
const path = require(“path”);
const members = require('./Members');


// Gets all members
app.get(“/api/members”, (req, res)=>{

  res.json(members);

});

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));




function restartConsole(){let e=`[SERVER STATUS] Servidor atualizado ${(new Date).getHours()}:${(new Date).getMinutes()}:${(new Date).getSeconds()}`;console.log("===============================================================\n",e,"\n===============================================================")}


app.listen(port, restartConsole()); 
```

### Init Middleware

Uma simples função de middleware pode ser criado desta maneira:

```javascript
const express = require(“express”);
const port = 80;
const path = require(“path”);
const members = require('./Members');

const app = express();

const logger = (req, res, next)=>{

​	console.log('Hello');
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}`);
	next();
}
// Init Middleware
app.use(logger);

// Gets all members
app.get(“/api/members”, (req, res)=>{

  res.json(members);

});

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));




function restartConsole(){let e=`[SERVER STATUS] Servidor atualizado ${(new Date).getHours()}:${(new Date).getMinutes()}:${(new Date).getSeconds()}`;console.log("===============================================================\n",e,"\n===============================================================")}


app.listen(port, restartConsole()); 
```

No console do seu cmd você poderá visualizar q foi impresso um "hello" e também uma url original.

### Moment

O Moment foi projetado para funcionar tanto no navegador quanto no Node.js.

Todo o código deve funcionar nesses dois ambientes e todos os testes de unidade são executados nesses dois ambientes.

no cmd digite:

`npm i moment --save` 

no index.js:

```javascript
const express = require(“express”);
const port = 80;
const path = require(“path”);
const moment = require('moment');
const members = require('./Members');

const app = express();

const logger = (req, res, next)=>{

	console.log('Hello');
	console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}:${moment().format()}`);
	next();

}
// Init Middleware
app.use(logger);

// Gets all members
app.get(“/api/members”, (req, res)=>{

  res.json(members);

});

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));




function restartConsole(){let e=`[SERVER STATUS] Servidor atualizado ${(new Date).getHours()}:${(new Date).getMinutes()}:${(new Date).getSeconds()}`;console.log("===============================================================\n",e,"\n===============================================================")}


app.listen(port, restartConsole());
```
### Middleware Folder

crie uma pasta chamada Middleware na raiz do seu projeto e dentro crie um arquivo chamado logger.js

retire esse trecho de código do seu index.js

```javascript
const moment = require('moment');

const logger = (req, res, next)=>{

	console.log('Hello');
	console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}:${moment().format()}`);
	next();

}
```

e cole dessa maneira dentro de logger.js

```javascript
const moment = require('moment');

const logger = (req, res, next)=>{

	console.log('Hello');
	console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}:${moment().format()}`);
	next();

}

module.exports = logger;
```

agora traga-o para o index.js

`const logger = require('./middleware/logger');` repare que agora temos um arquivo separado apenas para logger e o uso do moment, bem organizado!

Você pode comentar a linha `app.use(logger);` pois não irá precisar dela.

### Url Parameters

Agora vamos criar um trecho de código get single member, um parâmetro de url para obter um membro de id específico.

```javascript
const express = require(“express”);
const port = 80;
const path = require(“path”);
const members = require('./Members');

const app = express();

// Init Middleware
// app.use(logger);

// Gets all members
app.get(“/api/members”, (req, res)=>{ res.json(members); });

// Get Single Member
app.get('api/members/:id'), (req, res) =>{
	res.send(req.params.id);
});

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));




function restartConsole(){let e=`[SERVER STATUS] Servidor atualizado ${(new Date).getHours()}:${(new Date).getMinutes()}:${(new Date).getSeconds()}`;console.log("===============================================================\n",e,"\n===============================================================")}


app.listen(port, restartConsole());
```

também pode substituir o `res.send(req.params.id);` por uma página em JSON, deste modo `res.json(req.params.id);` para filtrar o membro, vamos passar um function, deste modo:

- [ ] **Filtrando um membro pelo seu ID requisitado:**

```javascript
// Get Single Member
app.get('api/members/:id'), (req, res) =>{
	res.json(members.filter(member => member.id === req.params.id));
});
```

agora abra seu navegador em localhost/api/members/NUMERO_ID

em NUMERO_ID passe o id do membro, por exemplo localhost/api/members/2



