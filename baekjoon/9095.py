T = int(input())
answer = 0
def findway(num):
    if num < 3:
        return num
    elif num == 3:
        return 4
    else:
        return findway(num-1) + findway(num-2) + findway(num-3)

for i in range(T):
    N = int(input())
    print(findway(N))
