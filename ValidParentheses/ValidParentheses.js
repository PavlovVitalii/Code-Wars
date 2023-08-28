function validParentheses(parenStr) {
    var count = 0;
    for (var i = 0; i < parenStr.length; i++) {
      if (parenStr[i] == '(') count++;
      if (parenStr[i] == ')') count--;
      if (count < 0) return false;
    }
    
    return count === 0;
  }
