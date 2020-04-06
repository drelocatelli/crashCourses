# Menu 1
![](https://github.com/drelocatelli/crashCourses/blob/master/dropdown-menu/images/tutorial1.png)

Você irá aprender a como fazer um menu dropDown igual a prévia acima.

Primeiro vamos definir a estrutura HTML dele:

## HTML

```html
<div class="menu">
    <div class="content">
        <ul class="submenu">
            <li><a href="#">inicio</a></li>
            <li><a href="#">contato</a></li>
            <li class="dropdown-menu">
                <a href="javascript:void(0);">
                    produtos <i class="seta"></i>
                </a>
                <ul class="dropdown">
                    <li><a href="#">edit</a></li>
                    <li><a href="#">edit</a></li>
                    <li><a href="#">edit</a></li>
                </ul>
            </li>
            <li><a href="#">edit</a></li>
            <li class="dropdown-menu">
                <a href="javascript:void(0);">
                    clientes <i class="seta"></i>
                </a>
                <ul class="dropdown">
                    <li><a href="#">edit</a></li>
                    <li><a href="#">edit</a></li>
                    <li><a href="#">edit</a></li>
                    <li><a href="#">edit</a></li>
                </ul>
            </li>
        </ul>
    </div>
```

Agora você precisa adicionar o CSS, cole antes de </body> :

## CSS MINIFICADO

```css
<style type="text/css">
.menu{padding:0;width:100%;background:var(--menu-color);box-sizing:border-box;height:55px;z-index:20000000000;letter-spacing:-.5px;margin-bottom:10px;text-align:left;font-size:16px;position:relative}.menu .content{padding:4px 45px;position:relative;z-index:20000000000}.menu i.seta::before{content:"\0276D";display:inline-block;font-style:normal;font-size:13px;padding-left:3px;font-weight:700;position:relative}.submenu{display:block;box-sizing:border-box;font-family:Helvetica,tahoma,arial,sans-serif;position:relative}.menu ul.submenu>li{display:inline;margin-right:10px}.menu ul.submenu li a{color:var(--menu-text);text-decoration:none}.menu ul.submenu li a:hover{text-decoration:none}.menu ul.submenu li{display:inline-grid}.dropdown-menu{display:inline-block}.menu ul.submenu>li.dropdown-menu>ul.dropdown{padding:6px 0 0;top:-8000px;position:absolute;background:var(--menu-color);min-width:120px;box-sizing:border-box;list-style:none;transition:top 1s}.menu ul.dropdown>li{display:block}.menu ul.submenu li.dropdownmenu>ul.dropdown{position:absolute;left:5px;top:20px;z-index:10000000000}.menu ul.submenu ul.dropdown a{display:inline-block;min-width:120px;padding:5px 6px}.menu ul.submenu ul.dropdown a:hover{background:rgba(255,255,255,.5)}.menu ul.submenu li.dropdown-menu:hover>ul.dropdown{top:20px;transition:top 0ms}
</style>
```

Para adicionar itens sem dropDown, apenas adicione a linha:

`<li><a href="url">titulo</a>`

Se desejar adicionar dropDown, adicione:

```html
<li class="dropdown-menu">
    <a href="javascript:void(0);">Clientes <i class="seta"></i></a>
	<ul class="dropdown">
        <li><a href="#">opç 1</a></li>
        <li><a href="#">opç 2</a></li>
        <li><a href="#">opç 3</a></li>
    </ul>
```
