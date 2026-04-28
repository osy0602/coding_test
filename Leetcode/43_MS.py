class Solution:
    def multiply(self, num1: str, num2: str) -> str:
        if num1 == "0" or num2 == "0":
            return "0"
        
        res = [0] * (len(num1) + len(num2))
        
        num1 = num1[::-1]
        num2 = num2[::-1]
        
        for i in range(len(num1)):
            for j in range(len(num2)):
                digit1 = int(num1[i])
                digit2 = int(num2[j])
                
                product = digit1 * digit2
                res[i + j] += product
                
                res[i + j + 1] += res[i + j] // 10
                res[i + j] = res[i + j] % 10
        
        res.reverse()
        
        start = 0
        while start < len(res) and res[start] == 0:
            start += 1
        
        return "".join(map(str, res[start:]))

print(Solution().multiply("123", "456"))