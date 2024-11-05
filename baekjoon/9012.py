import sys
input = sys.stdin.readline

N = int(input().strip())

for i in range(N):
    ps = input().strip()
    stack = []
    for j in range(len(ps)):
        if ps[j] == "(":
            stack.append("(")
        elif ps[j] == ")":
            if  "(" in stack:
                stack.pop()
            else:
                stack.append(")")
    
    if len(stack) == 0:
        print("YES")
    else:
        print("NO")