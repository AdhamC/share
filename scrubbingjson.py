file_name = "dataset_out.csv"
fp = open(file_name,'r')
# target = file_name[:-4]+".json"
target = "data.js"
t = open(target,'w')
lines_read,lines_written = 0,0
fp2 = open('codes.csv','r')
counter = 0
counter2 = 0
last = "Afghanistan"

codes = {}
data = {}
main = {}

fp.readline()
fp2.readline()

for i in fp2:
    i = i.strip().split(",")
    codes[i[0]] = i[1]
for i in fp:
    i = i.strip().split(",")
    if int(i[1]) == 2006:
        data[i[0]] = i[2]
for i in data:
    if i in codes:
        main[codes[i]] = data[i]
t.write("var dataset = {")
for i in main:
    t.write('"'+i+'"'+" : "+main[i]+",")
t.write("};")
