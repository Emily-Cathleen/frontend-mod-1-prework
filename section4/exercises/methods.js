/*
In the exercise below, write your own code where indicated
to achieve the desired result.

Make sure to run the file with node in your command line.
*/


// YOU DO: Add two methods to the `lunchOrder` object below.
  // 1. `prepare` - log out a sentence to let the user know the order is being worked on.
  // 2. `complete` - log out a sentence to let the user know the order is complete.

// Log to the console each property on the `lunchOrder` object.
// Call each method and run the file in node to verify they are working as expected.

var lunchOrder = {
  dish: "BLT",
  beverage: "iced tea",
  tableNumber: 47
  prepare: function() {
    console.log("Order is being worked on");
  }
  complete: function() {
    console.log("Order is complete!");
  }
  console.log(lunchOrder);
}

/* var zebraObject = {
  name: "Angela",
  age: 3,
  height: "5ft",
  diet: ["grass", "leaves", "water"],
  feed: function() {
    console.log("Give grass to the Zebra");
  }
};

zebraObject.feed(); //logs "Give grass to the Zebra" */
