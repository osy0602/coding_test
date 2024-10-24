
N = int(input().strip())
carddeck = list(map(int,input().split()))
plus = [0] * 10000001
minus = [0] * 10000000
N = int(input().strip())
cardnum = list(map(int,input().split()))
for card in carddeck:
    if card >= 0:
        plus[card] = 1
    else:
        minus[abs(card)] = 1

answer = []
for card in cardnum:
    if card >= 0:
        answer.append(plus[card])
    else:
        answer.append(minus[abs(card)])

print(*answer)