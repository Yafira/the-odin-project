# Boolean logic, true or false

# == (equals) returns true if the values compared are equal
5 == 5 #=> true
5 == 6 #=> false

# != (not equal) returns true if the values compared are not equal.
5 != 7 #=> true
5 != 5 #=> false

# > (greater than) returns true if the value on the left of the operator is larger than the value on the right.
7 > 5 #=> true
5 > 7 #=> false

# < (less than) returns true if the value on the left of the operator is smaller than the value on the right
5 < 7 #=> true
7 < 5 #=> false

# >= (greater than or equal to) returns true if the value on the left of the operator is larger than or equal to the value on the right.
7 >= 7 #=> true
7 >= 5 #=> true

# <= (less than or equal to) returns true if the value on the left of the operator is smaller than or equal to the value on the right
5 <= 5 #=> true
5 <= 7 #=> true

#eql? checks both the value type and the actual value it holds
5.eql?(5.0) #=> false; although they are the same value, one is an integer and the other is a float
5.eql?(5)   #=> true

#equal? checks whether both values are the exact same object in memory.
# Two variables pointing to the same number will usually return true.
a = 5
b = 5
a.equal?(b) #=> true


## Spaceship operator (<=>)
# returns one of three numerical values
# -1 if the value on the left is less than the value on the right;
# 0 if the value on the left is equal to the value on the right; and
# 1 if the value on the left is greater than the value on the right.
5 <=> 10    #=> -1
10 <=> 10   #=> 0
10 <=> 5    #=> 1

# Combining expressions
(4 == 4) && (5 == 5) # true
(4 == 5) && (5 == 5) # false
(4 == 5) && (5 == 6) # false
(4 == 4) || (5 == 5) # true
(4 == 5) || (5 == 5) # true
(4 == 5) || (5 == 6) # false

# when you add the "not" operator in front of a boolean expression it will change that boolean value to its opposite.
!(4 == 4) # false,  4 == 4 is true but !(true) is false


# Highest order of precedence (top) to lowest (bottom)
<=, <, >, >= - Comparison
==, != - Equality
&& - Logical AND
|| - Logical OR