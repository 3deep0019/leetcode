/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const map = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  const stack = [];
  for (const _s of s) {
    if (map[_s]) {
      stack.push(_s);
    } else {
      const pop = stack.pop();
      if (_s != map[pop]) {
        return false;
      }
    }
  }

  return stack.length == 0;
};