function isPalindrome(x) {

    for (let i = 1; i < x.length; i++) {
        if (x[i].toUpperCase() !== x[x.length - 1 - i].toUpperCase()) {
            return false;
        }
    }
    return true;
  }
  console.log(isPalindrome("Abba"));
  