import os

print(os.getcwd()+"\n")
files = os.listdir()
files = sorted(files)
for file in files:
    if file.endswith('.java'):
        print(file)
print('\n')
java_file = input("[nome do arquivo] $ ")
java_file2 = java_file.replace(".java", "")
os.system("clear -x")
print(f"$ javac {java_file} && java {java_file2}\n\n")
cmd = f"javac -encoding UTF8 -g:none {java_file} "
cmd2 = f"java {java_file2}"

os.system(cmd)
os.system(cmd2)
