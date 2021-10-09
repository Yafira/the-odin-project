# Print command
# print keeps things all on one line
print "Learning to code is FUN!"
# "Learning to code is FUN!" => nil

print "1234"
# 1234 => nil

print "Hello World"
print "Good Morning"
# Hello WorldGood Morning

# Puts command
# puts appends a new line to the argument passed in
puts "Learning to code is cool!!"
# Learning to code is cool!!
# => nil

puts "Hey, I want 2 key lime pies."
# Hey, I want 2 key lime pies.
# => nil

x = "My name is ALEX! :)"
# "My name is ALEX! :)"

puts x
# My name is ALEX! :)
# => nil

# Highlighting the difference between puts and print with semicolon
print "Hello World"; print "I love drinking coffee"
# Hello WorldI love drinking coffee=> nil

puts "Hello World"; puts "I love drinking coffee"
# Hello World
# I love drinking coffee
# => nil

# Putsc command
# Unlike puts, which outputs the entire string onto the screen, the putc statement can be used to output one character at a time.
str = "Hello Ruby!"
putc str
# H