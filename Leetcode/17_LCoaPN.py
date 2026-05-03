class Solution:
    def letterCombinations(self, digits: str) -> List[str]:
        if not digits:
            return []
    
        phone_map = {
            "2": "abc", "3": "def", "4": "ghi", "5": "jkl", 
            "6": "mno", "7": "pqrs", "8": "tuv", "9": "wxyz"
        }
    
        answer = [""]
        for digit in digits:
            answer = [combination + letter for combination in answer for letter in phone_map[digit]]
        
        return answer
print(Solution().letterCombinations("23"))