import sys

input = sys.stdin.readline
numarr = []
sum = 0
for i in range(5):
    N = int(input().strip())
    sum += N
    numarr.append(N)

numarr.sort()
print(int(sum / 5))
print(numarr[2])