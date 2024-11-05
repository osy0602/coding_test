import sys
input = sys.stdin.readline

N = int(input().strip())
stack = []
answer = 0

for i in range(N):
    num= int(input().strip())
    pair = [num, 1]

    while stack and stack[-1][0] <= num:
        pop = stack.pop()
        answer += pop[1]
        if num == pop[0]:
            pair[1] += pop[1]
        
    if stack:
        answer += 1

    stack.append(pair)
    
print(answer)