try {
  let decide = prompt(
    "What would you like to calculate?\nd - distance\nt - time\ns - speed"
  ).toLowerCase();
  console.log(decide);

  // check if input is d, t, or s using regex
  if (!/d|t|s/.test(decide)) throw "Please enter d, t, or s";
  console.log(decide);

  //Calculations for distance
  if (decide == "d") {
    let time = prompt("Please enter the amount of time - in hours");
    let speed = prompt("Please enter the speed - in mph");
    if (time < 0 || speed < 0) {
      throw "No negative numbers please";
    }
    if (isNaN(time) || isNaN(speed)) {
      throw "Only numbers please";
    }
    console.log(
      `Time: ${time} hours * Speed:${speed} mph = ${time * speed} miles`
    );

    //Calculations for time
  } else if (decide == "t") {
    let dist = prompt("Please enter a distance - in miles");
    let speed = prompt("Please enter the speed - in mph");
    if (dist < 0 || speed < 0) {
      throw "No negative numbers please";
    }
    if (isNaN(dist) || isNaN(speed)) {
      throw "Only numbers please";
    }
    console.log(
      `Distance: ${dist} miles at ${speed} mph will take ${dist / speed} hours`
    );

    //Calculations for Speed
  } else if (decide == "s") {
    let dist = prompt("Please enter a distance - in miles");
    let time = prompt("Please enter the amount of time - in hours");
    if (dist < 0 || time < 0) {
      throw "No negative numbers please";
    }
    if (isNaN(dist) || isNaN(time)) {
      throw "No negative numbers please";
    }
    console.log(
      `${dist} miles in ${time} hours will mean a speed of ${dist / time} mph`
    );
  }
} catch (err) {
  console.log(err);
}
