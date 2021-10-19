# Caesar Cipher
def caesar_cipher(string, shift)
    cipher_msg = ''
    string.each_codepoint do |asc| # yields the order of each char
        cipher_msg << case asc
        when 'a'.ord..'z'.ord # lowercase
            'a'.ord + (asc - 'a'.ord + shift) % 26 # 26 represents length of alphabet
        when 'A'.ord..'Z'.ord # uppercase
            'A'.ord + (asc - 'A'.ord + shift) % 26
        else
            asc
        end
    end
    cipher_msg
end

puts caesar_cipher("What a string!", 5)