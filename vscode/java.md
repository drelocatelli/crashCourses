# Instalando Java no VS Code

Certifique que o java SDK esteja instalado em sua máquina. 
[Java SDK no Linux](https://docs.oracle.com/javase/8/docs/technotes/guides/install/linux_jdk.html#BJFJJEFG)

1. Baixe a extensão dentro do VS CODE: "Java Extension Pack".
2. No VS CODE, clique em file>preferences>settings e então pesquise por " java home".
3. Copie o caminho que está abaixo, algo como "java.home":"C:\\Program Files\\Java\\jdk11.0_8" e substitua para onde está localizado seu jdk.
4. Agora pesquise por "java debug settings console".
5. Mude para "External Terminal".

Toda vez que for executar uma compilação no console, aperte F5.
