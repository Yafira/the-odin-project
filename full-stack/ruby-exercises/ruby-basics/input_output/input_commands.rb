# Gets
# When we use gets, program execution will stop and wait for user input. After the user presses Enter, the program will continue its execution.
gets
The Odin Project
# => "The Odin Project\n"  # unlike puts and prints, gets returns the user input instead of returning nil

puts "Enter a value :"
val = gets
puts val
# Enter a value :
# This is entered value
# This is entered value

new_string = gets.chomp # chomp is a method commonly used to trim separators
This is a sentence.
# => "This is a sentence."

puts new_string
This is a sentence.
# => nil

puts "I will be printed to the console!"

puts 'Hello World !!!'
Hello World !!!
# => nil

print 'Hello World !!!'
# Hello World !!!=> nil

p 'Hello world' # p is a shorter form of puts
"Hello world"
# => "Hello world"

val1 = "This is variable one"
val2 = "This is variable two"
puts val1
puts val2
# This is variable one
# This is variable two

