// Heating and Cooling

// Define two variables:  actualTemp and desiredTemp

// let actualTemp = 70;
// let desiredTemp = 68

// Tell the system what to do 1. Run AC  2. Run Heat  3. Standby

// if (actualTemp < desiredTemp) {
//     console.log("Tell system to run the HEAT");
//   } else if (actualTemp > desiredTemp) {
//       console.log("Tell system to run the AC")
//   } else {
//       console.log("Tell systemto STANDBY")
//   }

let tempCelsius = 12
const targetUnit = prompt("Select a unit");
switch (targetUnit) {
    case "C":
        console.log(`${tempCelsius} ${targetUnit}`);
        break;
}




