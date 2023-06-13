-- SUM of all products in rent before the given date
SELECT SUM(mennyiseg)
FROM `itbox`.cikktetel
WHERE raktarkod = 'berlet'
AND datum < '2014-12-31';

-- SUM of all products in rent on the given date (returned on the same day counts as well)
SELECT COUNT(raktarkod)
FROM `itbox`.cikktetel
WHERE raktarkod = 'berlet'
AND mennyiseg > 0
AND datum = '2014-12-31';

-- merge the two queries above as result
SELECT ((SELECT SUM(mennyiseg)
FROM `itbox`.cikktetel
WHERE raktarkod = 'berlet'
AND datum < '2014-12-31')
+
(SELECT COUNT(raktarkod)
FROM `itbox`.cikktetel
WHERE raktarkod = 'berlet'
AND mennyiseg > 0
AND datum = '2014-12-31')) as berbeadottak_szama;