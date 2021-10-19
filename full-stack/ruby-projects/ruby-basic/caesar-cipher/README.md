## Assignment

### From Wikipedia:
"In cryptography, a Caesar cipher, also known as Caesar’s cipher, the shift cipher, Caesar’s code or Caesar shift, is one of the simplest and most widely known encryption techniques. It is a type of substitution cipher in which each letter in the plaintext is replaced by a letter some fixed number of positions down the alphabet. For example, with a left shift of 3, D would be replaced by A, E would become B, and so on. The method is named after Julius Caesar, who used it in his private correspondence."

Task:
- Implement a caesar cipher that takes in a string and the shift factor and then outputs the modified string:

<code> caesar_cipher("What a string!", 5) </code>
<code> => "Bmfy f xywnsl!" </code>

- The main idea behind this system is to rotate the letters an x number of positions on the alphabet.
- For example, with x = 1, an ‘A’ becomes a ‘B’, a ‘C’ becomes a ‘D’
with x = 5 an ‘A’ becomes a ‘E’, a ‘B’ becomes a ‘F’and so on.
(x in this case is the shift factor)

Quick Tips:
- You will need to remember how to convert a string into a number.
- Don’t forget to wrap from z to a.
- Don’t forget to keep the same case.