module.exports = (date, { monthLength = "short" } = {}) => {
    // takes the month and turns it into a digit or default to a short version
    let months;
  
    if (monthLength === "short") {
      months = {
        0: 1,
        1: 2,
        2: 3,
        3: 4,
        4: 5,
        5: 6,
        6: 7,
        7: 8,
        8: 9,
        9: 10,
        10: 11,
        11: 12,
      };
    } else {
      months = {
        0: "Jan",
        1: "Feb",
        2: "Mar",
        3: "Apr",
        4: "May",
        5: "Jun",
        6: "Jul",
        7: "Aug",
        8: "Sep",
        9: "Oct",
        10: "Nov",
        11: "Dec",
      };
    }
  
    // constantan variables to retrieve date and time
    const dateObj = new Date(date);
    console.log('dateObj: ', dateObj);
    const formMonth = months[dateObj.getMonth()];
    const formDate = dateObj.getDate();
    const formYear = dateObj.getFullYear().toString().substr(-2);
    const formMinute = ("0" + dateObj.getMinutes()).substr(-2);
    console.log(formMinute);
    // turns the hour into a 12hr format and sets midnight to 12
    let hours = dateObj.getHours();
  
    if (hours > 12) {
      hours -= 12;
    } else if (hours === 0) {
      hours = 12;
    } else {
      hours;
    }
  
    // set a 'am or 'pm in the timestamp based on the time of day
    let portionOfDay;
  
    if (dateObj.getHours() >= 12) {
      portionOfDay = "PM";
    } else {
      portionOfDay = "AM";
    }
  
    // variable to make the new timestamp and in the order that I selected
    const formattedDateStamp = `${hours}:${formMinute} ${portionOfDay} on ${formMonth}/${formDate}/${formYear}`;
    console.log(formattedDateStamp);
    //   returning the new timestamp
    return formattedDateStamp;
  };