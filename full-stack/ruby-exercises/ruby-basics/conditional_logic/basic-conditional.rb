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