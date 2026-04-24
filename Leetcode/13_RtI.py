class Solution:
    def romanToInt(self, s: str) -> int:
        svmap = {
            'I': 1, 'V': 5, 'X': 10, 'L': 50, 
            'C': 100, 'D': 500, 'M': 1000
        }
        
        answer = 0
        n = len(s)
        
        for i in range(n):
            if i < n - 1 and svmap[s[i]] < svmap[s[i+1]]:
                answer -= svmap[s[i]]
            else:
                answer += svmap[s[i]]
                
        return answer

print(Solution().romanToInt("MCMXCIV"))