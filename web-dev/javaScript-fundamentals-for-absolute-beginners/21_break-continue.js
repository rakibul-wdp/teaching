// break

for (let i = 0; i < 10; i++) {
  // console.log(i);

  if (i >= 5) {
    break;
  }
}

let num = 30;
while (num > 20) {
  if (num < 25) {
    break;
  }

  // console.log(num);

  num--;
}

// continue - skip the rest of the code for this iteration

for (let i = 1; i < 10; i++) {
  if (i % 2 !== 0) {
    continue;
  }

  // console.log(i);
}

let n = 0;
while (n < 25) {
  n++;

  if (n % 5 !== 0) {
    continue;
  }

  console.log(n);
}