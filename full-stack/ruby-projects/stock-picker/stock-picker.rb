# Stock Picker

def stock_picker(prices)
    profit = 0
    days = 0

    prices.each_with_index do |price, day|
        for i in day..prices.length - 1
        if prices[i] - price > profit
            profit = prices[i] - price
            days = [day, i]
            end
        end
    end
    days
end

p stock_picker([17,3,6,9,15,8,6,1,10])
# [1,4]  # for a profit of $15 - $3 == $12