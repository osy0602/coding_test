import sys
input = sys.stdin.readline

N = int(input().strip())
channel  = [input().strip() for _ in range(N)]
idx1, idx2 = channel.index('KBS1'), channel.index('KBS2')

res = ""
res += "1" * idx1
res += "4" * idx1
if idx1 > idx2:
    idx2 += 1
res += "1" * idx2
res += "4" * (idx2 -1)
print(res)