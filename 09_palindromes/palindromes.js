const palindromes = function (a) {
    const onlyLettersNumbers = a.toLowerCase().replace(/[^a-z0-9]/g, "");
    const word = onlyLettersNumbers.split('');
    const reversed = word.reverse('');
    const reversedString = reversed.join('');
    if (onlyLettersNumbers === reversedString){
        return true
    } else {
        return false
    }
};

// Do not edit below this line
module.exports = palindromes;
