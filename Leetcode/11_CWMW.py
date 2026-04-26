class Solution:
    def maxArea(self, height: List[int]) -> int:
        left = 0
        right = len(height) - 1
        maxNum = 0

        while left < right:
            current = min(height[left], height[right]) * (right - left)
            maxNum = max(maxNum, current)
            if(height[left] < height[right]):
                left += 1
            else:
                right -= 1
        return maxNum
        
print(Solution().maxArea([1,8,6,2,5,4,8,3,7]))