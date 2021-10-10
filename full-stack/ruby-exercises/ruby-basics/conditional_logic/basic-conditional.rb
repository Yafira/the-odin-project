# if statement
if statement_to_be_evaluated == true
    # do something awesome...
end

if 1 < 2
    puts "Hot diggity, 1 is less than 2!"
end
#=> Hot diggity, 1 is less than 2!

# if there's only one line of code, rewrite it so it takes up one line
# doesn't need an end statement
puts "Hot diggity damn, 1 is less than 2" if 1 < 2

# else and elsif
if attack_by_land == true
    puts "release the goat"
else
    puts "release the shark"
end

# if...elsif...else statement
if attack_by_land == true
    puts "release the goat"
elsif attack_by_sea == true
    puts "release the shark"
else
    puts "release Kevin the octopus"
end

# more conditonsl examples
puts "Put in a number"
a = gets.chomp.to_i

if a == 3
    puts "a is 3"
elsif a == 4
    puts "a is 4"
else
    puts "a is neither 3, nor 4"
end

# valid Ruby conditonals
# Example 1
if x == 3
    puts "x is 3"
end

# can also be written as
puts "x is 3" if x == 3
# or
puts "x is NOT 3" unless x == 3

# Example 2
if x == 3
    puts "x is 3"
elsif x == 4
    puts "x is 4"
end

# Example 3
if x == 3
    puts "x is 3"
else
    puts "x is NOT 3"
end

# Example 4: must use "then" keyword when using 1-line syntax
if x == 3 then puts "x is 3" end