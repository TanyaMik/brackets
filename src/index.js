module.exports = function check(str, bracketsConfig) {
  // let arr = str.split(', ');
  const sameBrackets = ['|', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
  const openBrackets = ['[', '{', '(', '|', '1', '3', '5', '7', '8'];
  const pairBrackets = {
    [']']: '[',
    ['}']: '{',
    [')']: '(',
    ['|']: '|',
    ['2']: '1',
    ['4']: '3',
    ['6']: '5',
    ['7']: '7',
    ['8']: '8',
  };

  function isBracketsOk(str) {
    let stack = [];
    for (let i = 0; i < str.length; i++) {
      let currentSymbol = str[i];

      if (openBrackets.includes(currentSymbol) &&
         currentSymbol !== stack[stack.length - 1]) {
        stack.push(currentSymbol);
        // console.log(stack);
      } else {
        if (stack.length !== 0) {
          let topElement = stack[stack.length - 1];
          if (pairBrackets[currentSymbol] === topElement) {
            stack.pop();
          } else {
            return false;
          }
        }
      }
    }
    return (stack.length === 0);
  }

  return isBracketsOk(str);
}
