import sys
input = sys.stdin.readline

n, k = map(int, input().split())
medals = []
for i in range(n):
    medals.append(list(map(int, input().split())))

medals.sort(key = lambda x : (x[1], x[2], x[3]), reverse = True)


idx = [medals[i][0] for i in range(n)].index(k)

for i in range(n):
    if medals[idx][1:] == medals[i][1: ]:
        print(i+1)
        break