-- Clue #3: We have new news on the classes Carmen attended – our gumshoes tell us she's moved on
-- to a different country, a country where people speak only the language she was learning. Find out which
--  nearby country speaks nothing but that language.


--First Attempt
Select * from countrylanguage
Where language='Italian'
And isOfficial = TRUE
And percentage >=95

--Second Attempt
Select name, region, countrycode, code
from countrylanguage, country
Where language='Italian'
And countrycode = code  
And isOfficial = TRUE
And percentage >=95