function isPalindrome(word) {
    let wordLower = word.toLowerCase();
    for (let i = 0; i < wordLower.length / 2; i++) {
        if (wordLower[i] != wordLower[wordLower.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

console.log(isPalindrome("racecar"));
console.log(isPalindrome("madam"));
console.log(isPalindrome("moonlight"));
console.log(isPalindrome("aviary"));