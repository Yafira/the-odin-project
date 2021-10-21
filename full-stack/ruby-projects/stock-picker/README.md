## Assignment

- Implement a method #stock_picker that takes in an array of stock prices, one for each hypothetical day. It should return a pair of days representing the best day to buy and the best day to sell. Days start at 0.


<code> > stock_picker([17,3,6,9,15,8,6,1,10])
  <br>
  => [1,4]  # for a profit of $15 - $3 == $12 </code>


Quick Tips:
- You need to buy before you can sell
- Pay attention to edge cases like when the lowest day is the last day or the highest day is the first day.


----------------------
## Outcome
- This method takes an array of stock prices and determines which pair of days is the most profitable to buy and sell with days starting at 0.
<br>
<br>
<b>Parameters</b>
<br>
(Array of stock prices)
<br>
<br>
<b>Returns</b>
<br>
2 element array: a pair of days representing the best day to buy and the best day to sell

### Findings
- How to compare multiple items in an array.


