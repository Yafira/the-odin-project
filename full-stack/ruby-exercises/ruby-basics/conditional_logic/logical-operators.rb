# The && operator returns true if both the left and right expressions return true.
if 1 < 2 && 5 < 6
    puts "Party at Kevin's!"
end

# This can also be written as
if 1 < 2 and 5 < 6
    puts "Party at Kevin's!"
end

# Short circuit evaluation
# With the || operator, if the first expression evaluates to true, then the second expression is never checked because the complete expression is already true, and the code in the block is run.
if 10 < 2 || 5 < 6 #=> although the left expression is false, there is a party at Kevin's because the right expression returns true
    puts "Party at Kevin's!"
end

# This can also be written as:
if 10 < 2 or 5 < 6
    puts "Party at Kevin's!"
end

# ! operator reverses the logic of the expression
# if the expression itself returns false, using the ! operator makes the expression true
if !false     #=> true

if !(10 < 5)  #=> true