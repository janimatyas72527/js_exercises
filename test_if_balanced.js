function checkBalanced(stack, char) {
  if (["[]", "()", "{}"].includes(`${stack[stack.length - 1]}${char}`)) {
    stack.pop();
    return true;
  }
  return false;
}

function isBalanced(string) {
  let stack = [];
  let isBalanced = true;

  for (let char of string) {
    if (["[", "(", "{"].includes(char)) {
      stack.push(char);
    } else if (["]", ")", "}"].includes(char)) {
      isBalanced = checkBalanced(stack, char);
    } else {
      isBalanced = false;
    }
    if (!isBalanced) {
      break;
    }
  }
  return isBalanced;
}

function testIfBalanced(string) {
  console.log(`${string} is balanced: ${isBalanced(string)}`);
}

testIfBalanced("{{)(}}");
testIfBalanced("({)}");
testIfBalanced("[({})]");
testIfBalanced("{}([])");
testIfBalanced("{()}[[{}]]");
