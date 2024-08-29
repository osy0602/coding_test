import sys

# 입력 받기
in_str = input()
bcnt = int(input())
book_dict = {}

for i in range(bcnt):
    p, m = input().split()
    book_dict[m] = int(p) 

def wordinbook(word, book, price):
    cnt = 0
    for w in word:
        if w in book:
            cnt += 1
            book = book.replace(w, ' ', 1) 
            if cnt == len(word):
                return price
    return sys.maxsize

result = []

book_list = list(book_dict.keys()) 
# 2^len(book_list) 까지 for 문을 돌린다는 의미
for i in range(1 << len(book_list)):
    search_str = ""
    sum_price = 0
    for j in range(len(book_list)):
        if (i & (1 << j)) != 0: 
            search_str += book_list[j]
            sum_price += book_dict[book_list[j]]  
    result.append(wordinbook(in_str, search_str, sum_price))

# 최종 결과 계산 및 출력
result = min(result)
if result == sys.maxsize:
    result = -1

print(result)
