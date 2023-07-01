function getPermutations(array) {
  switch (array.length) {
    case 0:
      return array;
    case 1:
      return [...array];
    case 2:
      return [[...array], [array[1], array[0]]];
    default:
      return array.reduce((acc, element, i) => {
        getPermutations([...array.slice(0, i), ...array.slice(i + 1)]).map(
          (permutation) => acc.push([element, ...permutation])
        );
        return acc;
      }, []);
  }
}

function findMaxCombinedNumber(permutations) {
  let maxCombinedNumber = "";
  for (let permutation of permutations) {
    let combinedNumber = permutation.join("");
    if (combinedNumber > maxCombinedNumber) {
      maxCombinedNumber = combinedNumber;
    }
  }
  return maxCombinedNumber;
}

function printMaxCombinedNumber(array) {
  const permutations = getPermutations(array);
  console.log(
    `Max. combined number of ${array} is ${findMaxCombinedNumber(permutations)}`
  );
}

console.log(printMaxCombinedNumber([50, 2, 1, 9]));
console.log(printMaxCombinedNumber([5, 50, 56]));
console.log(printMaxCombinedNumber([420, 42, 423]));
