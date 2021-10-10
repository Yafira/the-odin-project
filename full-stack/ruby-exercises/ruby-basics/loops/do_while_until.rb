# A simple loop example
loop do
    puts "This will keep printing until you hit Ctrl + c"
end

# loops are infinite in Ruby unless you use a 'break'
# break is used with a condition
i = 0
loop do
    i = i + 1
    puts i
    break         # this will cause execution to exit the loop
end

i = 0
loop do
    puts "i is #{i}"
    i += 1
    break if i == 10 # this will cause execution to exit the loop if i equals 10
end

i = 0
loop do
    i = i + 2
    puts i
    if i == 10
        break       # this will cause execution to exit the loop if i equals 10
    end
end

# Using next
# skip the rest of the current iteration and start executing the next iteration
i = 0
loop do
    i = i + 2
    if i == 4
        next        # skip rest of the code in this iteration
    end
    puts i
    if i == 10
        break
    end
end

# ------------------------------------------------------------

# While loop
# similar to the loop loop except that you declare the condition that will break out of the loop up front.
i = 0
while i < 10 do
    puts "i is #{i}"
    i += 1
end

# can also use while loops to repeatedly ask a question of the user until they give the desired response:
while gets.chomp != "yes" do
    puts "Will you go to prom with me?"
end

# countdown
x = gets.chomp.to_i

while x >= 0
    puts x
    x = x - 1
end

puts "Done!"

# countdown refactored
x = gets.chomp.to_i

while x >= 0
    puts x
    x -= 1 # <- refactored this line
end

puts "Done!"

# another example
x = 0
while x < 5
    y = x * x
    x += 1
end

puts y # 16

# perform again
loop do
    puts "Do you want to do that again?"
    answer = gets.chomp
    if answer != 'Y'
        break
    end
end

# another example but not recommended
begin
    puts "Do you want to do that again?"
    answer = gets.chomp
end while answer == 'Y'


# conditional while
x = 0

while x <= 10
    if x.odd?
        puts x
    end
    x += 1
end

# conditional while, with next
x = 0

while x <= 10
    if x == 3
        x += 1
        next
    elsif x.odd?
        puts x
    end
    x += 1
end

# conditional while, with break
x = 0

while x <= 10
    if x == 7
        break
    elsif x.odd?
        puts x
    end
    x += 1
end

# ------------------------------------------------------------

# Until loop
# opposite of the While loop
# until loop continues for as long as the condition is false.
i = 0
until i >= 10 do # the loop will continue running until the condition i >= 10 is true
    puts "i is #{i}"
    i += 1
end

# using until to avoid the negation !
until gets.chomp == "yes" do
    puts "Will you go to prom with me?"
end

# another example
x = gets.chomp.to_i

until x < 0
    puts x
    x -= 1
end

puts "Done!"