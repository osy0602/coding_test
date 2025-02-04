import sys
import heapq
input = sys.stdin.readline

n = int(input().strip())
numbers = []
answer = []
for _ in range(n):
    num = int(input().strip())
    if num == 0:
        if len(numbers) != 0:
            answer.append(-(heapq.heappop(numbers)))
        else:
            answer.append(0)
    else:
        heapq.heappush(numbers, -num)

print('\n'.join(list(map(str, answer))))