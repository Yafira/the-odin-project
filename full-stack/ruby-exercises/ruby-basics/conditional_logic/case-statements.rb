# Case statements are a neat way of writing several conditional expressions that would normally result in a messy if...elsif statement.

grade = 'F'

did_i_pass = case grade #=> create a variable `did_i_pass` and assign the result of a call to case with the variable grade passed in
    when 'A' then "Hell yeah!"
    when 'D' then "Don't tell your mother."
    else "'YOU SHALL NOT PASS!' -Gandalf"
end

# without then
grade = 'F'

case grade
when 'A'
    puts "You're a genius"
    future_bank_account_balance = 5_000_000
when 'D'
    puts "Better luck next time"
    can_i_retire_soon = false
else
    puts "'YOU SHALL NOT PASS!' -Gandalf"
    fml = true
end

# more examples to case statements
a = 5

case a
when 5
    puts "a is 5"
when 6
    puts "a is 6"
else
    puts "a is neither 5, nor 6"
end

# same as this if statement:

a = 5

if a == 5
    puts "a is 5"
elsif a == 6
    puts "a is 6"
else
    puts "a is neither 5, nor 6"
end

# refactored version
a = 5

answer = case a
when 5
    "a is 5"
when 6
    "a is 6"
else
    "a is neither 5, nor 6"
end

puts answer

# another form without an argument
a = 5

case
when a == 5
    puts "a is 5"
when a == 6
    puts "a is 6"
else
    puts "a is neither 5, nor 6"
end