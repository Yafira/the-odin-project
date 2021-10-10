# Ranges
# defines an interval
(1..5)      # inclusive range: 1, 2, 3, 4, 5
(1...5)     # exclusive range: 1, 2, 3, 4

# We can make ranges of letters too
('a'..'d')  # a, b, c, d

# For loop
# used to iterate through a collection of information such as an array or range.
# These loops are useful if you need to do something a given number of times while also using an iterator.

for i in 0..5
    puts "#{i} zombies incoming!"
end