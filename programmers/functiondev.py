def solution(progresses, speeds):
    answer = []
    while progresses:
        cnt = 0
        while progresses and progresses[0] >= 100:
            cnt += 1
            progresses.pop(0)
            speeds.pop(0)
        progresses = list(x+y for x,y in zip(progresses, speeds))
        if cnt:
            answer.append(cnt)
    return answer


progresses = [93, 30, 55]
speeds = [1,30,5]

print(solution(progresses, speeds))