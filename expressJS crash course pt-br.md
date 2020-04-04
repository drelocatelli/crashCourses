# Express JS Crash Course PT-BR

Bem vindos ao curso de Express JS onde você irá aprender a como desenvolver aplicações como ExpressJS de maneira rápida e fácil, irá entendê-lo passo-a-passo.

https://expressjs.com/

## Introdução e visão geral

ExpressJS é um framework javascript criado para rodar no server-side ou back-end focado nas linguagens javascript e nodeJS. Assim, podemos criar roteamento e leitura com servidor e banco de dados SQL ou NOSQL com segurança, além dos códigos serem mantidos no server-side, não havendo possibilidade de ter acesso ao conteúdo do código.

### HTTP STATUS CODE

A Sintaxe básica para se iniciar um servidor Express é esta, apenas para você ter uma visão geral:

`const express = require(“express”);`
`const app = express();`

`// Route handler`
`app.get(“/”, function(){`
   `res.send(“Hello World”);`
`});`

`// Listen Port, default = localhost:3000`

`app.listen(80);`

