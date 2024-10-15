def isPalindrome(x):
    if x == x[::-1]:
        return True
    return False

def isPrime(x):
    for i in range(2, x):
        if x % i == 0:
            return False
    return x != 1

N = input()
num = int(N)
while True:
    if isPalindrome(str(num)) and isPrime(num):
        print(num)
        break
    num += 1
