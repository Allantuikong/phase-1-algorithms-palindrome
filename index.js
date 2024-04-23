function isPalindrome(word) {
  // Write your algorithm here
  /*
  The algorithm will involve removing spaces and special characters from the input string,
  converting the string to lowercase, and then comparing characters from the start and end of the string.
  */
  word = word.toLowerCase().replace(/[^a-z]/g, '');

  let left = 0;
  let right = word.length - 1;
  while (left < right) {
    if (word[left] !== word[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;

}

// Add your pseudocode here
 /*
  1. Remove any spaces or special characters from the input string.
  2. Convert the input string to lowercase for case-insensitive comparison.
  3. Compare the characters at corresponding positions from the start and end of the string.
  4. If they all match, return true (indicating it's a palindrome), otherwise return false.
  */

/*
Our  function aims to achieve the following:
Remove any spaces or special characters from the input string.
Compare the characters at corresponding positions from the start and end of the string.
If they all match, return true (indicating it's a palindrome), otherwise return false.
*/


// Add written explanation of your solution here
/*
The function first removes any spaces or special characters from the input string and converts it to lowercase to ensure case-insensitive comparison. Then, it compares characters from the start and end of the string simultaneously. If all corresponding characters match, the function returns true, indicating that the word is a palindrome. Otherwise, it returns false.
*/


// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
