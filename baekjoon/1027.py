import sys

input = sys.stdin.readline

n = int(input().strip())

buildings = list(map(int, input().split()))
answer = [0] * n
for i in range(n):
    left = [int(1e10)] * n
    right = [-int(1e10)] * n
    for j in range(i-1, -1, -1): # i 기준 왼쪽 빌딩 탐색
        leftangle = ((buildings[j] - buildings[i]) / (j-i))
        if min(left) > leftangle: # 기울기가 더 작으면 볼 수 있음
            left[j] = leftangle
            answer[i] += 1
        else:
            left[j] = min(left)
    for j in range(i+1,n):
        rightangle=((buildings[j] - buildings[i]) / (j-i)) # i기준 오른쪽 빌딩 탐색
        if max(right) < rightangle: # 더 큰 기울기가 나오면 볼 수 있음
            right[j] = rightangle
            answer[i] += 1
        else:
            right[j] = max(right)

print(max(answer))