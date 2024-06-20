#!/usr/bin/node

/* searches for the biggest integer in the list of args, assuming that all args can be converted to integers */
if (process.argv.length <= 3) {
  console.log(0);
} else {
  const ints = [];
  for (let i = 2; i < process.argv.length; i++) {
    ints.push(parseInt(process.argv[i]));
  }
  console.log(ints.sort()[1]);
}
