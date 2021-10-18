# debugging with Pry-byebug
# require 'pry-byebug'

# def double_words_in_phrase(string)
#     string_array = string.split(' ')

#     binding.pry

#     string_array.map { |word| word * 2 }
#     string_array.join(' ')
# end

# double_words_in_phrase("This is a test")

# * any code written after the binding.pry statement will not have been evaluated during the Pry session. *

require 'pry-byebug'

def yell_greeting(string)
    name = string

    binding.pry

    name = name.upcase
    greeting = "WASSAP, #{name}!"
    puts greeting
end

yell_greeting("bob")
