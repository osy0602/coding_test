import sys

input = sys.stdin.readline

while True:
    triarr = list(map(int, input().split()))
    triarr.sort()
    
    if triarr[0] == 0 and triarr[1] == 0 and triarr[2] == 0:
        break
    
    if triarr[0] + triarr[1] <= triarr[2]:
        print("Invalid")
    else:
        num = len(set(triarr))
        if num == 1:
            print("Equilateral")
        elif num == 2:
            print("Isosceles")
        else:
            print("Scalene")
