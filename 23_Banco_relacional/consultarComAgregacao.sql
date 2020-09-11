SELECT regiao AS 'Região', SUM(populacao) AS Total FROM estados GROUP BY regiao ORDER BY Total desc


SELECT SUM(populacao) AS Total FROM estados

SELECT AVG(populacao) AS Total FROM estados