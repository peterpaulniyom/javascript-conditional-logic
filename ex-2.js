//Exercise 2
let lightBulbStatus = "On";

// Start coding here.
function lightBulb(status) {
    if (status === "On") {
        console.log("Light bulb is On.");
    } else if (status === "Off") {
        console.log("Light bulb is Off.");
    } else if (status === "Broken") {
        console.log("Light bulb is Broken.");
    } else {
        console.log("Please choose the correct input (On/Off/Broken)");
    }
}

lightBulbStatus = "Broken";
lightBulb(lightBulbStatus);