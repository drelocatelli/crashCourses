# Instalando Java no VS Code

Certifique que o java SDK esteja instalado em sua máquina. 
[Java SDK no Linux](https://www.youtube.com/watch?v=Hw9fYjH4lT4)

1. Baixe a extensão dentro do VS CODE: "Java Extension Pack".
2. No VS CODE, clique em file>preferences>settings e então pesquise por " java home".
3. Clique em "Edit in settings.json" e dentro das aspas coloque o caminho do jdk.
***Geralmente, no Linux fica em /usr/lib/jvm/java-11-openjdk-amd64/bin/java***
4. Agora pesquise por "java debug settings console".
5. Mude para "External Terminal".

Toda vez que for executar uma compilação no console, aperte F5.

## Como compilar Java no terminal

### Compila
javac arquivo.java

### Executa
java arquivo.java
