/**
 * Bilangan prima adalah bilangan asli yang lebih besar dari angka 1,
 * yang faktor pembaginya adalah 1 dan bilangan itu sendiri.
 * Contoh: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71...
 */

const isPrime = n => {
  for (let i = 2; i < n; i += 1) {
    if (n % i === 0) {
      return false;
    }
  }
  return n > 1;
};

const primeNumbers = n => {
  const arrPrime = [];

  for (let i = 0; arrPrime.length < n; i += 1) {
    if (isPrime(i)) {
      arrPrime.push(i);
    }
  }

  return arrPrime.join(',') || '0';
};

export default primeNumbers;
