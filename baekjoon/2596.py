N = int(input())

alp = input()

letter = {
    '000000' : 'A',
    '001111' : 'B',
    '010011' : 'C',
    '011100' : 'D',
    '100110' : 'E',
    '101001' : 'F',
    '110101' : 'G',
    '111010' : 'H'
}

def finding(alp):
    answer = ''
    for i in range(N):
        A = alp[i*6:(i+1)*6]
        found = False

        for code, char in letter.items():
            diff = sum(1 for a,b in zip(A, code) if a != b) #문자열 비교 방식. A와 code 인덱스끼리 비교해서 다르면 1을 더해주는거임
            if diff <=1:
                answer += char
                found = True
                break
        
        if not found:
            print(i + 1)
            return
                
    print(answer)

finding(alp)