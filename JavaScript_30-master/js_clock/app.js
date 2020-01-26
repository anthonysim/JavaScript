// a function that starts right when the webpage is loaded.

function startTime() {
    // grabs the current date and grabs the hours, minutes, and seconds.
    let today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    let month = today.getMonth() + 1;
    let date = today.getDate();
    let year = today.getFullYear();
    m = checkTime(m);
    s = checkTime(s);

    // sets the day of the week from numeric to the actual statement of the day.
    let day = today.getDay();

    if (day === 1)
        day = 'Monday';
    else if (day === 2)
        day = "Tuesday";
    else if (day === 3)
        day = "Wednesday";
       else if (day === 4)
        day = "Thursday";
    else if (day === 5)
        day = "Friday";
    else 
        day = "Saturday";

    // if else on changing the hours so it doesn't follow military time.
    if (h <= 12) {
        document.getElementById('txt').innerHTML =
        h + ":" + m + ":" + s + " " + "AM";
        // this resets the function every second. note, 1000 milliseconds = 1 second.
        // so this function restarts itself every second. 
        setTimeout(startTime, 500);

        // this displays the current date.
        document.getElementById('date').innerHTML = 
        day + " " + month + "-" + date + "-" + year;
    } else {
        h = h - 12;

        document.getElementById('txt').innerHTML =
        h + ":" + m + ":" + s + " " + "PM";
        // this resets the function every second. note, 1000 milliseconds = 1 second.
        // so this function restarts itself every second. 
        setTimeout(startTime, 1000);

        // this displays the current date.
        document.getElementById('date').innerHTML = 
        month + "-" + date + "-" + year;
    }
  };

  // this function checks if seconds is a single digit, if so, a "0" is added in front of it
  // to ensure its always a double digit.
  function checkTime(i) {
    if (i < 10) {
        i = "0" + i
    }  
    return i;
  };
