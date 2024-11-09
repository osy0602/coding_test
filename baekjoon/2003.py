N, M = map(int, input().split())

A = list(map(int, input().split()))

answer = 0
num = 0
end = 0
for i in range(N):
    while num < M and end < N:
        num += A[end]
        end+= 1
    if num == M:
        answer += 1
    num -= A[i]

print(answer)