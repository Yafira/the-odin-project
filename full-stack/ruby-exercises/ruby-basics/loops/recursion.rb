# Recursion
# the act of calling a method from within itself

# Simple example
def doubler(start)
    puts start * 2
end
# doubler(2) => 4
# doubler(4) => 8
# doubler(8) => 16

# using recursion
def doubler(start)
    puts start
    if start < 10
      doubler(start * 2)
    end
end
# doubler(2)
# 2
# 4
# 8
# 16

# Fibonacci
def fibonacci(number)
    if number < 2
    number
    else
    fibonacci(number - 1) + fibonacci(number - 2)
    end
end

puts fibonacci(6)