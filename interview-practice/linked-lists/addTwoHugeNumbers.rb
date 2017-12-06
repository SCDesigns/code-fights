def addTwoHugeNumbers(a, b)
    result = get_num_string(a).to_i + get_num_string(b).to_i
    generate_result(result)
end

def get_num_string(node)
    num_string = ""
    num_string += node.value.to_s.rjust(4, '0')
    next_node = node.next
    while next_node
        num_string += next_node.value.to_s.rjust(4, '0')
        next_node = next_node.next
    end
    num_string
end

def generate_result(number)
    result = []
    num_chars = number.to_s.chars
    temp = []
    until num_chars.empty?
        temp.unshift(num_chars.pop)
        if temp.length == 4
            result.unshift(temp.join(''))
            temp = []
        end
    end
    result.unshift(temp.join('')) unless temp.empty?
    list = []
    result.map! { |el| ListNode.new(el.to_i) }
    result.each_with_index do |el, idx|
        el.next = result[idx + 1] if idx < result.length
    end
    result[0]
end
