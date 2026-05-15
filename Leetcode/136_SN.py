class Solution:
    def singleNumber(self, nums: List[int]) -> int:
        answer = 0
        for n in nums:
            answer ^= n
        return answer
print(Solution().singleNumber([2, 2, 1]))  # Output: 1