N = int(input())

six = [666]
num = 666
while True:
    if N == 1:
        print(666)
        break
    num += 1
    if '666' in str(num):
        six.append(num)
    if N == len(six):
        print(six[-1])
        break
