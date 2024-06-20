#!/usr/bin/node

/* Searches for the second biggest integer in the list of args, assuming that all args can be converted to integers */
if (process.argv.length <= 3) {
  console.log(0);
} else {
  const ints = [];
  for (let i = 2; i < process.argv.length; i++) {
    ints.push(parseInt(process.argv[i]));
  }

  // Sort the array in descending order
  ints.sort((a, b) => b - a);

  // Print the second element which is the second largest
  console.log(ints[1]);
}
