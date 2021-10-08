# assigning value to variables
first_name = 'Joe'

# declaring a variable, assignment operators
age = 18
age -= 2  #=> 16

age = 18
age #=> 18
age = age + 4
age #=> 22

cash = 10
cash *= 2 #=> 20

temperature = 40
temperature /= 10 #=> 4

a = 4 #=> 4
b = a #=> 4
a = 7 #=> 7

# things on the right go first
number = 2 + 3 * 4 #=> 14
puts number

# reusinmg variables
number = 4
number = number * 3 #=> 12
puts number + 2 #=> 14

age = 19
name = "John"
can_swim = false

# upcase
desired_location = "Barcelona"
johns_location = desired_location
desired_location  #=> "Barcelona"
johns_location    #=> "Barcelona"
johns_location.upcase!  #=> "BARCELONA"
desired_location        #=> "BARCELONA"
johns_location          #=> "BARCELONA"

# getting data from a user
name = gets
Bob
#=> "Bob\n"

name = gets.chomp
Bob
#=> "Bob\n"
name + ' is super great!'
#=> "Bob is super great!"

# variable scope
name = 'Somebody Else'

def print_full_name(first_name, last_name)
    name = first_name + ' ' + last_name
    puts name
end

print_full_name 'Peter', 'Henry'   # prints Pete Henry
print_full_name 'Lynn', 'Blake'    # prints Lynn Blake
print_full_name 'Kim', 'Johansson' # prints Kim Johansson
puts name                          # prints Somebody Else

# method's invocation, {} or do/end
total = 0
[1, 2, 3].each { |number| total += number }
puts total # 6

total = 0
[1, 2, 3].each do |number|
    total += number
end
puts total # 6


# scope.rb
# Inner scope can access variables initialized in an outer scope, but not vice versa.
a = 5             # variable is initialized in the outer scope

3.times do |n|    # method invocation with a block
    a = 3           # is a accessible here, in an inner scope?
end

puts a #=> 3


arr = [1, 2, 3]

for i in arr do
    a = 5      # a is initialized here
end

puts a       # is it accessible here? Yes, for..do/endcode did not create a new inner scope