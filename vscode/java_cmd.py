import os

print(os.getcwd())
java_file = input("[nome do arquivo] $ ")
cmd = f"javac {java_file}"
cmd2 = f"java {java_file}"
cmd2 = cmd2.replace(".java", "")

os.system(cmd)
os.system(cmd2)