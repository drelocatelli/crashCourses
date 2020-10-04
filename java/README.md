# Instalando Java no VS Code

Certifique que o java SDK esteja instalado em sua máquina. 
[Java SDK no Linux](https://www.youtube.com/watch?v=Hw9fYjH4lT4)

1. Baixe a extensão dentro do VS CODE: "Java Extension Pack".
2. No VS CODE, clique em file>preferences>settings e então pesquise por " java home".
3. Clique em "Edit in settings.json" e dentro das aspas coloque o caminho do jdk.
***Geralmente, no Linux fica em /usr/lib/jvm/java-11-openjdk-amd64/bin/java ... Se não souber deixe vazio ("")***
4. Agora pesquise por "java debug settings console".
5. Mude para "External Terminal".
6. Verifique se não há algo faltando no código (ex: packages), caso dê erro.

Toda vez que for executar uma compilação no console, aperte F5.

## Como compilar Java no terminal
Assista o video [Compilando e executando códigos java no terminal](https://youtu.be/KIpuhJbNhN4) ou vá para variaveis de ambiente abaixo: 


## Variaveis de ambiente:
Java_Home = C:\Program Files\Java\jdk1.8.0_241

Path = (se tiver varios adiciona um ";" antes de colar:) C:\Program Files\Java\jdk1.8.0_241\bin

ClassPath = .;C:\Program Files\Java\jdk1.8.0_241\lib


## Comando python que executa java:
Baixe: https://raw.githubusercontent.com/drelocatelli/crashCourses/master/vscode/java_cmd.py

execute esse comando.

### Imprimir tipo da variável no Java
```java
int var = 1;
String varType = ((String)((Object)var).getClass().getName()).replace("java.lang.","").replace("Integer","Int");
		
if(varType.equals("Int")) {
	System.out.println(true);
}
```

[clique aqui](https://stackoverflow.com/questions/12361492/how-to-determine-the-primitive-type-of-a-primitive-variable#answer-12361525)
