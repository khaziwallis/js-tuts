/**
 * Check is the string is plaindrome or not
 */

const str = 'MALAYALAM';//prompt('Enter a String: ');

let result = isPalindrome(str);

console.log(result ? `${str} is palindrome` : `${str} is not palindrome`);

function isPalindrome(str) {
    const len = str.length;

    for(let i = 0; i <= len / 2; i++) {
        if (str[i] !== str[len - 1  - i]) {
            return false;
        }
    }
    return true;
}

result = isPalindrome(str);
console.log(result ? `${str} is palindrome` : `${str} is not palindrome`);


function checkPalindrome(str) {
    const reverseStr = str.split('').reverse().join('');
    if (reverseStr === str) {
        return true;
    }
    return false;
}