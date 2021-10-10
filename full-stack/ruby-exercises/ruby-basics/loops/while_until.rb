# loops are infinite in Ruby unless you use a 'break'
# break is used with a condition
i = 0
loop do
    puts "i is #{i}"
    i += 1
    break if i == 10
end

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

# Until loop
# opposite of the while loop
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