import sys

input = sys.stdin.readline

n, game = input().strip().split()
player = set()
for _ in range(int(n)):
    player.add(input().strip())

num = 0

if game == 'Y':
    num = 1
elif game == 'F':
    num = 2
elif game == 'O':
    num = 3

print(len(player) // num)