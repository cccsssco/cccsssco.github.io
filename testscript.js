/*
    This program will take all of the odd numbers and push it into an array
    that will later be processed down and push the prime numbers form the array 
    of odd numbers and push it to another array 
*/
function primeNumbers(num) { // this will be a function for convenience
    const odds = [];
    // this loop will push the odd numbers to the const odds array
    for (let i = 0; i <= num; i++) {
        if (i % 2 == 1) {
            odds.push(i);
        }
    }
    console.log(odds.length);   // usually half of the var num
    const prime = odds;         // prime will have the same value ass odds to be processed later
    var check = odds.length;    // this variable is for the loop 
    var mod = 0;                // this variable is assigned here so that it wont be declared again and again    
    //this loop will process the prime array and push out the non-prime(composite) numbers
    for (let p = 0; p <= check; p++) {
        mod = prime[p + 1]      // the first item of the array will always be one so it first item must be avoided to avoid the loop from going forever.
        // this loop will push the prime numbers(well not most of them thats why it must be looped )
        for (let i = 0; i < check; i++) {
            if (mod ** 2 <= prime[i]) { // this will prevent the mod which is the divisor form being more than the dividend 
                if (prime[i] % mod != 0 || prime[i] / mod == 1) { // this will only prevent odd numbers divisible by the value of mod(divisor) from being pushed
                    prime.push(prime[i])
                }
            } else { // any number less than the square of the mod is pushed be cause it is for sure odd numbers 
                prime.push(prime[i])
            }
        }
        //this loop will push out the original items from the array
        for (let i = 0; i < check; i++) {
            prime.shift()
        }
        check = prime.length // this is for better effiency 
    }
    
    console.log(prime)
    console.log("There are "+ prime.length + " primes in total!");
}
primeNumbers(13326);    