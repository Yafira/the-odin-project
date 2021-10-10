# Unless statement
# works in the opposite way as an if statement: it only processes the code in the block if the expression evaluates to false.
age = 18
unless age < 17
    puts "Get a job."
end

# like with if statements, you can write a simple unless statement on one line
age = 18
puts "Welcome to a life of debt." unless age < 17

unless age < 17
    puts "Down with that sort of thing."
else
    puts "Careful now!"
end

# You should use an unless statement when you want to not do something if a condition is true, because it can make your code more readable than using if !true.

# unless is the opposite of if
unless home_team.won_the_super_bowl?
    puts "I need to drown my sorrows in ice cream"
end

if current_user.is_a?(Vampire) dispatch_vampire_hunters
# works the same as
dispatch_vampire_hunters if current_user.is_a?(Vampire)
