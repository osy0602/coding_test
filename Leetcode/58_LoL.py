class Solution:
    def lengthOfLastWord(self, s: str) -> int:
        answer = 0
        last = len(s) - 1
        while last >= 0 and s[last] == ' ':
            last -= 1
        while last >= 0 and s[last] != " ":
            answer += 1
            last -= 1
        return answer

print(Solution().lengthOfLastWord("Hello World"))