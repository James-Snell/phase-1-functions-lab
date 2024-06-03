// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    //returns the number of blocks given a value
    if (someValue > 42 ) {
        return someValue - 42}
    else {
        return 42 - someValue;
    }
    
  }


  function distanceFromHqInFeet(someValue) {
    return distanceFromHqInBlocks(someValue)*264;
    // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
    // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
    // the return value of distanceFromHqInBlocks can then be used to calculate feet
  }


  function distanceTravelledInFeet(start, destination) {
    return Math.abs((start-destination))*264;
    //returns the number of feet traveled
  }


  function calculatesFarePrice(start, destination) {
    //returns the fare for the customer
    if (Math.abs((start - destination) * 264) < 400) {
        console.log("Free ride!")
        return 0
    } else if (Math.abs((start - destination) * 264) >= 400 && Math.abs((start - destination) * 264) <=2000) {
        console.log(".02 cents a mile")
        return (Math.abs((start - destination) * 264) - 400) * .02;
    } else if (Math.abs((start - destination) * 264) > 2000 && Math.abs((start - destination) * 264) <= 2500) {
        console.log("$25 flat fee")
        return 25
    } else {
        console.log("Too far out")
        return 'cannot travel that far'
    }
    
  }