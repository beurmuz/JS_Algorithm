-- 조건에 맞는 사원 정보 조회하기 | O | Lv.2
SELECT SUM(G.SCORE) AS SCORE, G.EMP_NO, EMP_NAME, POSITION, EMAIL
FROM HR_EMPLOYEES E JOIN HR_GRADE G
ON E.EMP_NO = G.EMP_NO
GROUP BY EMP_NO
ORDER BY SCORE DESC
LIMIT 1;


-- 특정 물고기를 잡은 총 수 구하기 | O | Lv.2
SELECT COUNT(A.FISH_TYPE) AS FISH_COUNT
FROM FISH_INFO A JOIN FISH_NAME_INFO B
ON A.FISH_TYPE = B.FISH_TYPE
WHERE B.FISH_NAME IN ('BASS', 'SNAPPER');


-- 분기별 분화된 대장균의 개체 수 구하기 | X | Lv.2
-- ✅ CASE문은 SELECT에서 사용할 수 있다.
SELECT 
    CASE
        WHEN MONTH(DIFFERENTIATION_DATE) < 4 THEN '1Q'
        WHEN MONTH(DIFFERENTIATION_DATE) < 7 THEN '2Q'
        WHEN MONTH(DIFFERENTIATION_DATE) < 10 THEN '3Q'
        ELSE '4Q'
    END AS QUARTER, 
    COUNT(ID) AS ECOLI_COUNT
FROM ECOLI_DATA
GROUP BY QUARTER
ORDER BY QUARTER