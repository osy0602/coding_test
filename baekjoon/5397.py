import sys
from collections import deque
input = sys.stdin.readline

N = int(input().strip())
L = []

answer = []  
for i in range(N):
    L.append(list(input().strip()))
    left_stack = deque()
    right_stack = deque()
    for j in range(len(L[i])):
        if L[i][j] == "<" and left_stack:
            right_stack.appendleft(left_stack.pop())
        elif L[i][j] == ">" and right_stack:
            left_stack.append(right_stack.popleft())
        elif L[i][j] == "-" and left_stack:
            left_stack.pop()
        elif L[i][j].isalpha() or L[i][j].isnumeric():
            left_stack.append(L[i][j])
    answer.append("".join(left_stack+right_stack))


print("\n".join(answer))
