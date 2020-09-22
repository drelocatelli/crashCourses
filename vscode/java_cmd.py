import os

print(os.getcwd()+"\n")
files = os.listdir()
files = sorted(files)
for file in files:
    if file.endswith('.java'):
        print(file)
print('\n')
java_file = input("[nome do arquivo] $ ")
cmd = f"javac -encoding UTF8 -g:none {java_file} "
cmd2 = f"java {java_file}"
cmd2 = cmd2.replace(".java", "")

os.system(cmd)
os.system(cmd2)
