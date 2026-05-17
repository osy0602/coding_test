class Solution:
    def strStr(self, haystack: str, needle: str) -> int:
        return haystack.find(needle)
print(Solution().strStr("sadbutsad", "sad"))  # Output: 0
print(Solution().strStr("leetcode", "leeto"))  # Output: -1