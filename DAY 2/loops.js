function vowelsAndConsonants(s) {
  for (var i = 0; i < s.length; i++) {
    //returns true if 'aeiou'
    if ("aeiou".includes(s[i])) {
      console.log(s[i]);
    }
  }

  for (var j = 0; j < s.length; j++) {
    //returns true if it is not a vowel
    if (!"aeiou".includes(s[j])) {
      console.log(s[j]);
    }
  }
}

function main() {
  const s = readLine(); //input
  vowelsAndConsonants(s); //calling the method
}
