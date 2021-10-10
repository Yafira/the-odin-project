# Ternary operator
# one-line if...else statement that can make your code much more concise.
# syntax is:       conditional statement ? <execute if true> : <execute if false>
age = 18
response = age < 17 ? "You still have your entire life ahead of you." : "You're all grown up."
puts response #=> "You're all grown up."

# if .. else statement would be more verbose but could make your code more readable
age = 18
if age < 17
    response = "You still have your entire life ahead of you."
else
    response = "You're all grown up."
end

puts response #=> "You're all grown up."