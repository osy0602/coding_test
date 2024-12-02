a, b = map(int, input().split())
numlist = [0]

for i in range(1,b+1):
    for j in range(i):
        numlist.append(i)

print(sum(numlist[a:b+1]))