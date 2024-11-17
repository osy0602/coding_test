N = input()

numlist = list(map(int, input().split()))

primenum = 0

for num in numlist:
    isprime = True
    if num == 1:
        continue
    for i in range(2, num):
        if num % i == 0:
            isprime = False
            break
    if isprime:
        primenum+=1
print(primenum)