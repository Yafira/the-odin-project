# Sub Strings

def substrings(word, dictionary)
    result = Hash.new(0)
    string = word.downcase

    dictionary.each do |text|
        match = string.scan(text).length
        result[text] = match unless match == 0
    end

    return result
end

# test
dictionary = ["below","down","go","going","horn","how","howdy","it","i","low","own","part","partner","sit"]

p substrings("Howdy partner, sit down! How's it going?", dictionary)