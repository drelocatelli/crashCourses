# Flexbox CSS Crash Course PT-BR

[Codessa](http://codessa.com.br) | [Flexbox guide](https://www.w3schools.com/css/css3_flexbox.asp)

Bem vindo ao curso rápido de flexbox em pt-br.

------

### Sumário:

- [Visão Geral](#visão-geral)
- [Propriedades CSS](#propriedades-css)
  - [flex-direction](#propriedade-flex-direction)
  - [flex-wrap](#propriedade-flex-wrap)
  - [flex-flow](#propriedade-flex-flow)
  - [justify-content](#propriedade-justify-content)
  - [align-items](#propriedade-align-items)
  - [align-content](#propriedade-align-content)
    - [Alinhando perfeitamente no centro](#alinhando-perfeitamente-no-centro)
  - [flex-grow](#propriedade-flex-grow)
  - [flex-shrink](#propriedade-flex-shrink)
  - [flex-basis](#propriedade-flex-basis)
- [Projetos criados com o flexbox](#projetos-com-o-flexbox)

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

## Propriedade flex-flow

É uma propriedade abreviada para definir as propriedades flex-direction e flex-wrap. Você pode definir esses dois atributos em apenas uma tag, simples assim.

`flex-flow: row wrap;`

## Propriedade justify-content

É a propriedade utilizada para alinhar os flex items.

`justify-content: center;`

`center, flex-start, flex-end, space-around, space-between`

![](https://github.com/drelocatelli/crashCourses/blob/master/flexbox/images/8.PNG)

## Propriedade align-items

É usada para alinhar os flex items verticalmente.

`align-items:center;`

`flex-start, flex-end, stretch, baseline `

Exemplo utilizando vários tamanhos:

![](https://github.com/drelocatelli/crashCourses/blob/master/flexbox/images/9.PNG)

## Propriedade align-content

É usada para alinhar as linhas flex.

Nesse exemplo nós usamos 600px para demonstrar melhor o `align-content: space-between;`

`space-between, stretch, center, flex-start, flex-end `

![](https://github.com/drelocatelli/crashCourses/blob/master/flexbox/images/10.PNG)

## Alinhando perfeitamente no centro

Com o flexbox você poderá alinhar perfeitamente os itens no centro.

![](https://github.com/drelocatelli/crashCourses/blob/master/flexbox/images/11.PNG)

basta adicionar a linha:

```css
justify-content: center; // alinha na horizontal -
align-items: center; // alinha na vertical |
```

## Propriedade flex-grow

Especifica o quanto um flex item pode crescer de tamanho sobre os outros.

`flex-grow: 8;`

![](https://github.com/drelocatelli/crashCourses/blob/master/flexbox/images/12.PNG)

## Propriedade flex-shrink

Especifica o quanto um flex item irá ser reduzido de tamanho sobre os outros.

`flex-shrink: 0;`

## Propriedade flex-basis

Especifica um comprimento inicial de uma flex item.

`flex-basis: 200px;`

Dessa vez como pixels.

## Projetos com o flexbox

![](https://github.com/drelocatelli/crashCourses/blob/master/flexbox/images/13.PNG)

![](https://github.com/drelocatelli/crashCourses/blob/master/flexbox/images/14.PNG)
