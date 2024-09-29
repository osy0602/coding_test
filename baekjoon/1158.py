N, K = map(int, input().split())

queue = list(range(1, N + 1))
answer = []
index = 0

while queue:
    index = (index + K - 1) % len(queue) 
    answer.append(queue.pop(index)) 
print('<' + ", ".join(map(str, answer)) + '>')
