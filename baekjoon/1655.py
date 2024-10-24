import heapq
import sys
input = sys.stdin.readline
leftheap = []
rightheap = []
N = int(input().strip())
for i in range(N):
    B = int(input().strip())
    if len(leftheap) == len(rightheap):
        heapq.heappush(leftheap, -B)
    else:
        heapq.heappush(rightheap, B)
    
    if rightheap and rightheap[0] < -leftheap[0]:
        leftValue = heapq.heappop(leftheap)
        rightValue = heapq.heappop(rightheap)

        heapq.heappush(leftheap, -rightValue)
        heapq.heappush(rightheap, -leftValue)

    print(-leftheap[0])