class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        answer = None
        count = 0
        
        for num in nums:
            if count == 0:
                answer = num
            
            if num == answer:
                count += 1
            else:
                count -= 1
        
        return answer

print(Solution().majorityElement([3, 2, 3]))  # Output: 3