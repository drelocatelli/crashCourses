# Flexbox CSS Crash Course PT-BR

[Codessa](http://codessa.com.br) | [Flexbox guide](https://www.w3schools.com/css/css3_flexbox.asp)

Bem vindo ao curso rápido de flexbox em pt-br.

------

### Sumário:

- [Visão Geral](#visão-geral)
- [Propriedades CSS](#propriedades-css)
  - [flex-direction](#propriedade-flex-direction)
  - [flex-wrap](#propriedade-flex-wrap)

------

## Visão Geral

O Flexbox ou também conhecido como caixa de layout flexível, faz com que fique fácil de criar designs flexíveis e responsivas estruturas. 

Para começar um modelo de Flexbox, você precisa primeiro definir uma flex container.

![](https://github.com/drelocatelli/crashCourses/blob/master/flexbox/images/1.PNG)

O Elemento acima representa uma flexbox container (a área azul) com 3 flex itens.

Exemplo:

```html
<div class="flex-container">
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

## Propriedades CSS

As propriedades CSS do flex container são:

- `flex-direction`
- `flex-wrap`
- `justify-content`
- `align-items`
- `align-content`

## Propriedade flex-direction

Essa propriedade define qual direção o container quer empilhar os flex items.

Por padrão, é definida como `flex-direction: row`;

 `flex-direction: column;`

![](https://github.com/drelocatelli/crashCourses/blob/master/flexbox/images/3.PNG)

`flex-direction: column-reverse;`

Note que agora a posição dos itens mudaram.

![](https://github.com/drelocatelli/crashCourses/blob/master/flexbox/images/4.PNG)

`flex-direction:row-reverse;`

A linha também.

![](https://github.com/drelocatelli/crashCourses/blob/master/flexbox/images/5.PNG)

## Propriedade flex-wrap

Essa propriedade especifica se os flex items irão ter uma quebra de linha ou não.

O exemplo, com 12 itens.

`flex-wrap: wrap;`

![](https://github.com/drelocatelli/crashCourses/blob/master/flexbox/images/6.PNG)

`flex-wrap: nowrap;`

Esse é o valor padrão.

`flex-wrap: wrap-reverse;`

Reverte a posição dos itens.

![](https://github.com/drelocatelli/crashCourses/blob/master/flexbox/images/7.PNG)