T = int(input())
base64_table = list("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/")
for i in range(1, T+1):
    answer, temp = "", ""
    C = input()
    for j in C:
        print(j)
        #문자를 list와 대입 후 16진수로 변환
        j = format(base64_table.index(j), '06b')
        temp += j
    for k in range(0, len(temp), 8):
        answer += chr(int(temp[k:k+8], 2))
    print(f"#{i} {answer}")