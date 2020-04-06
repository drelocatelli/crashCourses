# Flexbox CSS Crash Course PT-BR

[Codessa](http://codessa.com.br) | [Flexbox guide](https://www.w3schools.com/css/css3_flexbox.asp)

Bem vindo ao curso rápido de flexbox em pt-br.

------

### Sumário:

- [Visão Geral](#visão-geral)
- [Propriedades CSS](#propriedades-css)
  - [Propriedade flex-direction](#propriedade-flex-direction)

------

### Visão Geral

O Flexbox ou também conhecido como caixa de layout flexível, faz com que fique fácil de criar designs flexíveis e responsivas estruturas. 

Para começar um modelo de Flexbox, você precisa primeiro definir uma flex container.

![](https://github.com/drelocatelli/crashCourses/blob/master/flexbox/images/1.PNG)

O Elemento acima representa uma flexbox container (a área azul) com 3 flex itens.

Exemplo:

```html
<div class="flexbox-container">
    <div>1</div>
    <div>2</div>
    <div>3</div>
</div>
```

O Flex container necessita de uma propriedade do CSS para definir que o conteúdo faz parte do flexbox, o `display`.

Exemplo:

```css
.flex-container{
    display:flex;
}
```

### Propriedades CSS

As propriedades CSS do flex container são:

- flex-direction
- flex-wrap
- justify-content
- align-items
- align-content

### Propriedade flex-direction

Essa propriedade define qual direção o container quer empilhar os flex items.

![](https://github.com/drelocatelli/crashCourses/blob/master/flexbox/images/2.PNG)
