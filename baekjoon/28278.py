import sys

input = sys.stdin.readline
N = int(input().strip())
stack = []
answer = []
for i in range(N):
    how = input().strip()
    if how.startswith("1 "):
        i, num = how.split()
        num = int(num)
        stack.append(num)
    elif how == "2":
        if len(stack) != 0:
            answer.append(stack.pop())
        else:
            answer.append(-1)
    elif how == "3":
        answer.append(len(stack))
    elif how == "4":
        if len(stack) != 0:
            answer.append(0)
        else:
            answer.append(1)
    else:
        if len(stack) != 0:
            answer.append(stack[-1])
        else:
            answer.append(-1)

print(*answer)