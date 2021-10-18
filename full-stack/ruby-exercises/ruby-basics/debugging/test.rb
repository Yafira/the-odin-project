# debugging with puts
def double_words_in_phrase(string)
    string_array = string.split(' ')
    string_array.map { |word| word * 2 }
    p string_array # p is a combination of puts and inspect
    string_array.join(' ')
end

double_words_in_phrase("This is a test")
# output:
# ["This", "is", "a", "test"]
# ["This", "is", "a", "test"]
# => "This is a test"

# debugging with puts and nil
# calling puts on anything that is nil or an empty string or collection will just print a blank line to your terminal.