class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        answer = current = nums[0]
        for num in nums[1:]:
            current = max(num, current + num)
            answer = max(answer, current)
        return answer

print(Solution().maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))