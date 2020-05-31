function getLetter(s) {
  let letter;
  // Write your code here
  //includes() method returns true if the string contains the specified string passed in it and false if it doesn't.
  switch (true) {
    case "aeiou".includes(s[0]):
      letter = "A";
      break;

    case "bcdfg".includes(s[0]):
      letter = "B";
      break;

    case "hjklm".includes(s[0]):
      letter = "C";
      break;

    case "npqrstvwxyz".includes(s[0]):
      letter = "D";
      break;

    //A deafault case for all the undefined entries.
    default:
      letter = "N/A";
  }
  return letter;
}

function main() {
  const s = readLine();

  console.log(getLetter(s));
}
