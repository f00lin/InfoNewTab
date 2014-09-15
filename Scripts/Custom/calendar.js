// Array to store month names
var months = ['January',' February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

// Array to store week names
var weekDay = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];


// Get full days date
var date = new Date();

// Get day number
var day = date.getDate();

// Get month number
var month = date.getMonth();

// Get year
var year = date.getFullYear();


// Calculate if leap year
var leapYearCalc = function() {
    if (((year % 4 === 0) && (year % 100 != 0)) || (year % 400 === 0)) {
        return [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    }
    else {
        return [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    }
}

// Get number of days in each month
var monthDays = leapYearCalc();

// Get number of days in this month
var days_in_this_month = monthDays[month];

// Get first day of this month
var first_week_day = new Date(year, month, 0).getDay();



// unchanging records of NOW
var currentMonth = date.getMonth();
var currentYear = date.getFullYear();




// create calendar

var calInit = function() {
    
    // Define the variable which holds the calendar table
    var calendar_html = '<table class="calendarTable">';
    
    calendar_html += '<tr>';
    
    // Create row to display the week days (Monday - Sunday)
    for (week_day= 0; week_day < 7; week_day++) {
        calendar_html += '<td class="weekDay">' + weekDay[week_day] + '</td>';
        }
    calendar_html += '</tr><tr>';
    
    // Fill first row of the month with empty cells until the month starts.
    for (week_day = 0; week_day < first_week_day; week_day++) {
        calendar_html += '<td> </td>';
        }
    
    // Populate the days in the month
    week_day = first_week_day;
    for (day_counter = 1; day_counter <= days_in_this_month; day_counter++) {
        

        week_day %= 7;
        // Check if week ends, if yes move to next row
        if (week_day == 0) {
              calendar_html += '</tr><tr>';
          }

        // Show the current day in bold.
        if (day == day_counter) {
            
            if (month === currentMonth && year === currentYear) {
                calendar_html += '<td class="currentDay">' + day_counter + '</td>';
            }
            else {
                calendar_html += '<td class="monthDay"> ' + day_counter + ' </td>';
            }
        }
        
        else {
          calendar_html += '<td class="monthDay"> ' + day_counter + ' </td>';
          }
          
        week_day++;
        
        }
    
    // Close the Calendar table    
    calendar_html += '</tr>';
    calendar_html += '</table>';
    
    // Display the calendar heading
    document.getElementById("calHead").innerHTML = months[month] + ' ' + year;
    
    // Display the calendar.
    document.getElementById("cal").innerHTML += calendar_html;
}




// move forwards in time

var plusMonth = function() {
    
    document.getElementById("cal").innerHTML = '';
    
    if (month + 1 <= 11) {
        month = month + 1;
        }
    else {
        month = 0;
        year = year + 1;
        }
    
    monthDays = leapYearCalc();    
    days_in_this_month = monthDays[month];
    first_week_day = new Date(year, month, 0).getDay();
    calInit();
}  



// move backwards in time

var minusMonth = function () {
    
    document.getElementById("cal").innerHTML = '';
    
    month = month;
    year = year;
    
    if (month -1 >= 0) {
        month = month -1;
    }
    else {
        month = 11;
        year = year - 1;
    }
    
    monthDays = leapYearCalc();
    days_in_this_month = monthDays[month];
    first_week_day = new Date(year, month, 0).getDay();
    calInit();
}
        
    
    

document.addEventListener('DOMContentLoaded', function () { 
    calInit();
}, false)



document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#rightButton').addEventListener('click', plusMonth);
});


document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#leftButton').addEventListener('click', minusMonth);
});





