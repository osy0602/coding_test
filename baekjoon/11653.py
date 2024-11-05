N = int(input())

while N > 1:
    i = 2
    while True:
        if N % i == 0:
            print(i)
            N //= i
            break
        i += 1