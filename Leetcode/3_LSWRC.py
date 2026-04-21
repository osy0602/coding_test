class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        char_map = {}
        longest = 0
        start = 0
        for i, char in enumerate(s):
            if char in char_map and char_map[char] >= start:
                start = char_map[char] + 1
            char_map[char] = i
            longest = max(longest, i - start + 1)
        return longest

print(Solution().lengthOfLongestSubstring("abcabcbb"))
    