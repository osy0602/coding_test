class Solution:
    def combinationSum(self, candidates: List[int], target: int) -> List[List[int]]:
        res = []

        def backtrack(i, curr_comb, total):
            if total == target:
                res.append(list(curr_comb))
                return
            
            if total > target or i >= len(candidates):
                return

            curr_comb.append(candidates[i])
            backtrack(i, curr_comb, total + candidates[i])
            
            curr_comb.pop()

            backtrack(i + 1, curr_comb, total)

        backtrack(0, [], 0)
        return res
print(Solution().combinationSum([2,3,6,7], 7))