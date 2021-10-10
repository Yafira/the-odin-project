# Iterators
# naturally loop over a given set of data and allow you to operate on each element in the collection.

names = ['Bob', 'Joe', 'Steve', 'Janice', 'Susan', 'Helen']

names.each { |name| puts name }

# another form with a block
names = ['Bob', 'Joe', 'Steve', 'Janice', 'Susan', 'Helen']
x = 1

names.each do |name|
    puts "#{x}. #{name}"
    x += 1
end

# What does the each method in the following program return after it is finished executing?
x = [1, 2, 3, 4, 5]
x.each do |a|
    a + 1
end
# solution: => [1, 2, 3, 4, 5]