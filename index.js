/*
Index is calculated by :
  - Get current US Big Mac price
  - Get current Big Mac price from country we're comparing
  - Divide US Big Mac price by country's Big Mac price
    (this is called the implied purchasing power)
  - Get country's currency rate to USD value
  - Substract currency rate with the implied purchasing power
  - Divide the previous result by the implied purchasing power
  - This will give you the Big Mac Index
  - Make sure you search for updated values!

For example, using figures in July 2008:
  - the price of a Big Mac was $3.57 in the United States 
  - the price of a Big Mac was £2.29 in the United Kingdom 
  - the implied purchasing power parity was $1.56 to £1, that is $3.57/£2.29 = 1.56
  - this compares with an actual exchange rate of $2.00 to £1 at the time
  - (2.00 – 1.56) / 1.56 = 28%
  - the pound was thus overvalued against the dollar by 28%
*/


const bigMacUS = 5.66;
console.log("According to the Big Mac Index, on the 26th April 2021: ")

//UK
let bigMacUK = 3.19;
impliedPurchasingPowerUK = bigMacUS/bigMacUK;
let currencyRateUK = 1.39;
let bigMacIndexUK = ((currencyRateUK - impliedPurchasingPowerUK)/impliedPurchasingPowerUK);
console.log("The pound is undervalued against the US dollar by",Math.abs((bigMacIndexUK * 100).toFixed()),"%");


//Germany
let bigMacGermany = 2.22;
let impliedPurchasingPowerGermany = bigMacUS/bigMacGermany;
let currencyRateGermany = 1.21;
let bigMacIndexGermany = ((currencyRateGermany - impliedPurchasingPowerGermany)/impliedPurchasingPowerGermany);
console.log("The euro is undervalued against the US dollar by ", Math.abs((bigMacIndexGermany * 100).toFixed()),"%");


//Italy
let bigMacIsrael = 19;
let impliedPurchasingPowerIsrael = bigMacUS/bigMacIsrael;
let currencyRateIsrael = 0.31;
let bigMacIndexIsrael = ((currencyRateIsrael - impliedPurchasingPowerIsrael)/impliedPurchasingPowerIsrael);
console.log("The shekel is undervalued against the US dollar by ", Math.abs((bigMacIndexIsrael * 100).toFixed()),"%");


//Japan
let bigMacJapan = 390;
let impliedPurchasingPowerJapan = bigMacUS/bigMacJapan;
let currencyRateJapan = 0.0093;
let bigMacIndexJapan = ((currencyRateJapan - impliedPurchasingPowerJapan)/impliedPurchasingPowerJapan);
console.log("The yen is undervalued against the US dollar by ", Math.abs((bigMacIndexJapan * 100).toFixed()),"%");


//Canada
let bigMacCanada = 5.69;
let impliedPurchasingPowerCanada = bigMacUS/bigMacCanada;
let currencyRateCanada = 0.80;
let bigMacIndexCanada = ((currencyRateCanada - impliedPurchasingPowerCanada)/impliedPurchasingPowerCanada);
console.log("The Canadian dollar is undervalued against the US dollar by ", Math.abs((bigMacIndexCanada * 100).toFixed()),"%");
