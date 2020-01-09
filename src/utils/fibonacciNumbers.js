/**
 * Bilangan fibonacci berawal dari 0 dan 1, kemudian angka berikutnya didapat 
 * dengan cara menambahkan kedua bilangan yang berurutan sebelumnya.
 * Contoh: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181...
 */

const fibonacciNumbers = n => {
  const arrFibonacci = [];
  let prev = 1;
  let next = 0;
  let curr = 0;

  for (let i = 0; i < n; i += 1) {
    curr = next;
    next = prev + next;
    prev = curr;

    arrFibonacci.push(curr);
  }

  return arrFibonacci.join(', ');
}

export default fibonacciNumbers;
