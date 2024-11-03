//Exercise 4
// Switch Statement
let lightBulbStatus = "On";

//Start coding here

function lightBulb(lightBulbStatus){
switch (lightBulbStatus) {
    case "On":
        console.log("Light bulb is On.");
        break;
    case "Off":
        console.log("Light bulb is Off.");
        break;
    case "Broken":
        console.log("Light bulb is Broken.");
        break;
    default:
        console.log("Please choose the correct input (On/Off/Broken)");
}
}
lightBulbStatus = 'Off';

lightBulb(lightBulbStatus);