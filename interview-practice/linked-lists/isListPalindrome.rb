def isListPalindrome(l)
    return true if l.nil?
    result = [l.value]
    next_node = l.next
    while next_node
        result << next_node.value
        next_node = next_node.next
    end
    result == result.reverse
end
