import sys

input = sys.stdin.readline

n = int(input().strip())
classes  =[]
start = 10000000
st = []
for _ in range(n):
    s, t = map(int, input().split())
    if s < start:
        st = [s, t]
    else:
        classes.append([s, t])

queue = classes[0]

