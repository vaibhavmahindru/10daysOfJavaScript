function getDayName(dateString) {
  let dayName;
  // Write your code here
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  // created an array for the day names
  var date = new Date(dateString);
  //creating a new instance for the date
  dayName = days[date.getDay()];
  //getDay method returns an integer 0-6 corresponding to the day of the week

  return dayName;
}
