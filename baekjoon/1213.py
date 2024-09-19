from collections import Counter

def make_palindrome(s):
    counter = Counter(s)
    
    odd_count = 0
    odd_char = ''
    for char, count in counter.items():
        if count % 2 != 0:
            odd_count += 1
            odd_char = char
    
    if odd_count > 1:
        return "I'm Sorry Hansoo"
    half_palindrome = []
    for char, count in sorted(counter.items()):
        half_palindrome.append(char * (count // 2))
    
    left = "".join(half_palindrome)
    right = left[::-1]
    
    if odd_char:
        return left + odd_char + right
    else:
        return left + right

s = input().strip()
print(make_palindrome(s))
