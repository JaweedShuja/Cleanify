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
  var days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  return days[zeroBasedMonthNumber];
}

function MonthDay(number, isThisMonth) {
  this.day = number;
  this.thisMonth = isThisMonth;
  return this;
}

function test3(monthIndex, year) {
  var firstDay = getFirstDayOfMonth(monthIndex, year).getDay();
  if (firstDay == 0) firstDay = 6;
  else firstDay--;

  var daysFromLastMonth = firstDay;
  var result = [];

  var daysInLastMonth = daysInMonth(monthIndex - 1);
  var first = daysInLastMonth - daysFromLastMonth + 1;
  console.log(first);
  for (var i = 0; i < daysFromLastMonth; i++) {
    //result.push(first+i);
    result.push(new MonthDay(first + i, false));
  }

  for (var i = 1; i <= daysInMonth(monthIndex); i++)
    //result.push( i );
    result.push(new MonthDay(i, true));

  var daysDone = result.length;
  var daysToGo = 6 * 7 - daysDone;
  for (var i = 1; i <= daysToGo; i++)
    //result.push( i );
    result.push(new MonthDay(i, false));

  return result;
}

var MyMonthArray = [[,], [,], [,], [,], [,], [,], [,]];
MyMonthArray[0][0] = 'SUN';
MyMonthArray[0][1] = 'MON';
MyMonthArray[0][2] = 'TUE';
MyMonthArray[0][3] = 'WED';
MyMonthArray[0][4] = 'THU';
MyMonthArray[0][5] = 'FRI';
MyMonthArray[0][6] = 'SUT';

var day = new Date();
console.log('Month Index: ' + day.getMonth());
console.log('Full Year: ' + day.getFullYear());
console.log(
  'First Day of Month: ' +
    getFirstDayOfMonth(day.getMonth(), day.getFullYear()).getDay(),
);
console.log('Days In Month: ' + daysInMonth(day.getMonth()));
console.log(MyMonthArray);
let counter = 1;
for (let i = 1; i < 7; i++) {
  for (let j = 0; j < 7; j++) {
    if (
      i == 1 &&
      j < getFirstDayOfMonth(day.getMonth(), day.getFullYear()).getDay()
    ) {
      MyMonthArray[i][j] = -1;
    } else {
      if (counter <= daysInMonth(day.getMonth())) {
        MyMonthArray[i][j] = counter;
        counter++;
      } else {
        MyMonthArray[i][j] = -1;
      }
    }
  }
}
console.log(MyMonthArray);
