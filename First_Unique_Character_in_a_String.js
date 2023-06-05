function firstUniqChar(s) {
  const charFreq = new Map();

  // Count the frequency of each character
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    charFreq.set(char, (charFreq.get(char) || 0) + 1);
  }

  // Find the first non-repeating character and return its index
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (charFreq.get(char) === 1) {
      return i;
    }
  }

  // If no non-repeating character is found, return -1
  return -1;
}

// Example usage:
console.log(firstUniqChar("leetcode")); // Output: 0
console.log(firstUniqChar("loveleetcode")); // Output: 2
console.log(firstUniqChar("aabb")); // Output: -1
