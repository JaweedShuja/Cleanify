export default (month, year) => {
  function getFirstDayOfMonth(zeroBasedMonthNum, fullYear) {
    var monthNames = [
      'January',
      'Febuary',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    var dateStr = `${monthNames[zeroBasedMonthNum]} 1, ${fullYear}, 00:00:00`;
    var monthStart = new Date(dateStr);
    return monthStart;
  }
  function daysInMonth(zeroBasedMonthNumber) {
    var days = [];
    if (year % 4 == 0) {
      days = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    } else {
      days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    }
    return days[zeroBasedMonthNumber];
  }
  var MyMonthArray = [[,], [,], [,], [,], [,], [,], [,]];

  var day = new Date();
  console.log(MyMonthArray);
  let counter = 1;
  for (let i = 0; i < 7; i++) {
    for (let j = 0; j < 7; j++) {
      if (i == 0 && j < getFirstDayOfMonth(month, year).getDay()) {
        MyMonthArray[i][j] = -1;
      } else {
        if (counter <= daysInMonth(month)) {
          MyMonthArray[i][j] = counter;
          counter++;
        } else {
          MyMonthArray[i][j] = -1;
        }
      }
    }
  }
  return MyMonthArray;
};
