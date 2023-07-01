function getStringPermutations(str) {
    if (str.length <= 2) return str.length === 2 ? [str, str[1] + str[0]] : [str];
    return str
      .split('')
      .reduce(
        (acc, letter, i) =>
        acc.concat(getStringPermutations(str.slice(0, i) + str.slice(i + 1)).map(val => letter + val)),
        []
      );
  }
  
  function getAllAnagrams(string) {
    const permutations = getStringPermutations(string);
    return [...(new Set(permutations)).values()];
  }
  
  function printAllAnagrams(string) {
    const anagrams = getAllAnagrams(string);
    console.log(`Anagrams for ${string} are:`);
    let cnt = 1;
    anagrams.forEach(anagram => {
      console.log(`#${cnt++}: ${anagram}`);
    });
  }
  
  console.log(printAllAnagrams('biro'));
  