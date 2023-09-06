function myArraySum(array) {
    //  la méthode reduce sert à calculer la somme des éléments dans le tableau
    return array.reduce((sum, current) => sum + current, 0);
}

// Exemple d'utilisation de la fonction
console.log(myArraySum([4, 24, 52, 14, 32, 56])); // 182
