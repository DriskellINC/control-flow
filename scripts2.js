// Print prime for all prime numbers within set range
let low = 4; // Change this to change lower bound
let high = 20; // Change this to change upper bound

for (let i = low; i <= high; i++){ // From 4 to 20
    let flag = 0; // Keeps track of prime

    for (let j = 2; j < i; j++){ // goes through every number lower than i, and divides i by that number
        if (i % j === 0){ // if i / number has no remainder
            flag = 1; // i is not prime
            break; // break out of loop
        }
    }

    if (flag === 0){ // if i is greater than 3 and not flagged
        console.log(`${i} is prime.`); // i is prime
    }
}