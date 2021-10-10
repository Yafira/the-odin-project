# Times loop
# run a loop for a specified number of times
5.times do
    puts "Hello, world!"
end

# loops will start counting from a zero index unless specified otherwise
# first loop iteration will output Alternative fact number 0
5.times do |number|
    puts "Alternative fact number #{number}"
end