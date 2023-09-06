function myIsInString(haystack, needle) {
    // Vérifie si la chaîne 'needle' se trouve dans 'haystack'
    return haystack.includes(needle);
}

console.log(myIsInString("hello World", "llo"));    // true
console.log(myIsInString("hello World", "ere"));   // false