// Find the sum of all the multiples of 3 or 5 below 1000.

// First I need to be able to count to 1000 - can use loop (i'm sure there is a more optimized way)
// I also need to be able to store the multiples of 3 and 5 so I can add them up (an array would work)
let nums = [];
// Need to initialize total
let total = 0;

function loop() {
  for (let i = 0; i < 1000; i++) {
    // Then need to grab each multiple of 3 or 5 and push them into array
    if (i % 3 === 0 || i % 5 === 0) {
      nums.push(i);
    }
    if (i === 999) {
      totaler();
    }
  }
}

function totaler() {
  // Next need to sum up the numbers in the array (maybe a for each?)
  nums.forEach(num => {
    total += num;
  });
  console.log(total);
}

loop();
