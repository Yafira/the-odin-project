# Bubble Sort

def bubble_sort(array)
        n = array.size # n is array length
        return array if n <= 1
        loop do
        # create a variable that will be checked to avoid infinite loop.
        swapped = false

        # ruby arrays are zero-index based, subtract 1
        (n - 1).times do |i|
            if array[i] > array[i+1]
                array[i], array[i+1] = array[i+1], array[i]
                swapped = true
            end
        end

        break if not swapped
    end

    array
end

p bubble_sort([4,3,78,2,0,2])
#=> [0,2,2,3,4,78]