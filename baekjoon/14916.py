n  = int(input())
coins = [5,2]
count = 0
countarray = []
for i in range(0, (n // 5)+1):
    num = n
    num -= 5 * i
    if num % 2 == 0 or num == 0:
        countarray.append(i + (num//2))

if len(countarray) == 0:
    countarray.append(-1)

print(min(countarray))
