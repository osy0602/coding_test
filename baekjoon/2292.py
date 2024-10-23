num = int(input())

movenum = 1

for i in range(1, num+1):
    movenum += (i-1) * 6
    if num <= movenum:
        break

print(i)

