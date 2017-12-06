// Note: Write a solution that only iterates over the string once and uses O(1) additional memory, since this is what you would be asked to do during a real interview.
//
// Given a string s, find and return the first instance of a non-repeating character in it. If there is no such character, return '_'.
//
// Example
//
// For s = "abacabad", the output should be
// firstNotRepeatingCharacter(s) = 'c'.
//
// There are 2 non-repeating characters in the string: 'c' and 'd'. Return c since it appears in the string first.
//
// For s = "abacabaabacaba", the output should be
// firstNotRepeatingCharacter(s) = '_'.
//
// There are no characters in this string that do not repeat.
//
// Input/Output
//
// [time limit] 4000ms (js)
// [input] string s
//
// A string that contains only lowercase English letters.
//
// Guaranteed constraints:
// 1 ≤ s.length ≤ 105.
//
// [output] char
//
// The first non-repeating character in s, or '_' if there are no characters that do not repeat

// My Solution
function firstNotRepeatingCharacter(s) {
  var comp = s.split("").reverse().join("");
  for (var i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) === ((s.length - 1) - comp.indexOf(s[i]))) {
      return s[i];
    }
  }
  return '_'
}

// Highly Voted Solution

function firstNotRepeatingCharacter(s) {
    var arr = s.split("");
    for(var i = 0; i < arr.length; i++){
        var chr = arr[i];
        if( arr.indexOf(arr[i]) == arr.lastIndexOf(arr[i])){
            return arr[i]
        }
    }
    return "_"
}
