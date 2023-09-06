function myPrimeList(limit) {
    const primes = [];

    for (let number = 2; number <= limit; number++) {
        let isPrime = true;

        for (let i = 2; i < number; i++) {
            if (number % i === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            primes.push(number);
        }
    }
    return primes;
}
console.log(myPrimeList(18));


