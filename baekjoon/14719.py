import sys

input = sys.stdin.readline

h, w = map(int,input().split())

block = list(map(int, input().split()))
answer = 0
for i in range(1,w-1):
    leftnum = max(block[:i]) #왼쪽에 있는 기둥 중 가장 큰 기둥
    rightnum = max(block[i+1:]) #오른쪽에 있는 기둥 중 가장 큰 기둥
    score = (min(leftnum, rightnum) - block[i]) # 기둥 중 작은걸 찾은 다음 block[i] 만큼 빼주기
    if score > 0:
        answer += score

print(answer)