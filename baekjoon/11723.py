import sys
input = sys.stdin.readline

N = int(input().strip())

S = []
for _ in range(N):
    inputstr = input().strip()
    if inputstr == "all":
        S = list(range(1,21))
    elif inputstr == "empty":
        S = []
    else:
        calc, num = inputstr.split()
        num = int(num)
        Snum = num in S
        if calc == "add" and Snum==False:
            S.append(num)
        elif calc == "check":
            if Snum:
                print(1)
            else:
                print(0)
        elif calc=="remove" and Snum==True:
            S.remove(num)
        elif calc=="toggle":
            if Snum:
                S.remove(num)
            else:
                S.append(num)
