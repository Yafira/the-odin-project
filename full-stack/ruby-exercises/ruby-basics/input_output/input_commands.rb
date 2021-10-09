# Gets
# When we use gets, program execution will stop and wait for user input. After the user presses Enter, the program will continue its execution.
gets
The Odin Project
=> "The Odin Project\n"  # unlike puts and prints, gets returns the user input instead of returning nil

new_string = gets.chomp # chomp is a method commonly used to trim separators
This is a sentence.
=> "This is a sentence."

puts new_string
This is a sentence.
=> nil

puts "I will be printed to the console!"

p 'Hello world' # p is a shorter form of puts
"Hello world"
=> "Hello world"


puts 'Hello World !!!'
Hello World !!!
=> nil

print 'Hello World !!!'
Hello World !!!=> nil