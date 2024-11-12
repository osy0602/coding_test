import sys

input = sys.stdin.readline

N = int(input().strip())
answer = 0
for _ in range(N):
    ab = list(input().strip())
    stack = []
    for i in range(len(ab)):
        if stack and ab[i] == stack[-1]:
            stack.pop()
        else:
            stack.append(ab[i])

    if len(stack) == 0:
        answer += 1

print(answer)

