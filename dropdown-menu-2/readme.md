# Menu dropdown 2 (click)

[Prévia aqui](https://raw.githack.com/drelocatelli/crashCourses/master/dropdown-menu-2/Dropdown%20menu/dropdown-menu.html)


HTML:

```html
<div class="desktop-nav">
      <nav>
            <ul>
                  <li><a href="#">Home</a></li>
                  <li data-target="dropdown">
                        <a href="#">Cursos</a>
                        <ul>
                              <li><a href="#">Dropdown</a></li>
                              <li><a href="#">Responsivo</a></li>
                        </ul>
                  </li>
                  <li data-target="dropdown">
                        <a href="#">Downloads</a>
                        <ul>
                              <li><a href="#">Código</a></li>
                              <li><a href="#">Aplicativos</a></li>
                              <li><a href="#">Frameworks</a></li>
                        </ul> 
                  </li>
                  <li><a href="#">Contato</a></li>
            </ul>
      </nav>
</div>
```
Toda vez que desejar adicionar um dropdown, basta adicionar e editar a linha:

```html
<li data-target="dropdown">
      <a href="#">Downloads</a>
      <ul>
            <li><a href="#">Código</a></li>
            <li><a href="#">Aplicativos</a></li>
            <li><a href="#">Frameworks</a></li>
      </ul> 
</li>
```

CSS:

Importe o CSS dentro da tag <head> do seu site:

```html
<link href="https://raw.githack.com/drelocatelli/crashCourses/master/dropdown-menu-2/Dropdown menu/css/menuDropdown.css" type="text/css" rel="stylesheet">
```

Javascript:

Importe antes de </body> do seu site:

```html
<script src="https://raw.githack.com/drelocatelli/crashCourses/master/dropdown-menu-2/Dropdown menu/js/menuDropdown.js"></script>
```

