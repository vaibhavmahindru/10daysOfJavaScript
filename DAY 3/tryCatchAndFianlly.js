function reverseString(s) {
  try {
    s = s.split("").reverse().join("");
  } catch (e) {
    console.log(e.message);
  } finally {
    console.log(s);
  }
}
//split splits the string object int a string array
//reverse reverses the elements of a newly created array
//join joins the array into a string
function main() {
  const s = eval(readLine());

  reverseString(s);
}
