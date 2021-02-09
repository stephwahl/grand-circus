// Build Specifications:
// Declare an interface called Car that contains the following properties:
//  make - string
//  model - string
//  year - number
//  hybrid - boolean
interface Car {
    make: string;
    model: string;
    year: number;
    hybrid: boolean;
}
// Declare an array called dealership which is of type Car array
// Add these four objects to dealership:
// make model year hybrid
// Toyota Prius 2020 true
// Toyota Prius 2021 true
// Ford F-150 2015 false
// Ferrari Enzo 2004 false
const dealership : Car[] = [
    {make: "Toyota", model: "Prius", year: 2020, hybrid: true},
    {make: "Toyota", model: "Prius", year: 2021, hybrid: true},
    {make: "Ford", model: "F-150", year: 2015, hybrid: false},
    {make: "Ferrari", model: "Enzo", year: 2004, hybrid: false}
];
// Declare a function named findCars
// ○ Parameter(s): arrayOfCars (type Car array), model (type string)
// ○ Return type: Car array
// ○ Functionality: When called, this function will return an array of all the cars from
// the arrayOfCars argument that have the specified model argument. If there are
// no cars that have that model, return an empty array.
function findCars(arrayOfCars: Car[], model: string): Car[] {
    return arrayOfCars.filter(car => car.model === model);
}
console.log(findCars(dealership, "Prius"));
// Declare a function named addCar
// ○ Parameter(s): arrayOfCars (type Car array), make (type string), model (type
//     string), year (type number), hybrid (type boolean)
//     ○ Return type: void
//     ○ Functionality: construct an object of type Car and push it into arrayOfCars
function addCar(arrayOfCars: Car[], make: string, model: string, year: number, hybrid: boolean): void {
    arrayOfCars.push({make, model, year, hybrid});
}

addCar(dealership, "Chevy", "Nova", 1978, false);
console.log(dealership);
// Declare a function named areThereAnyHybridsForSale
// ○ Parameter(s): arrayOfCars (type Car array)
// ○ Return type: boolean
// ○ Functionality: when called, this function will return true if there is a hybrid car in
// the arrayOfCars argument and false otherwise.
function areThereAnyHybridsForSale(arrayOfCars: Car[]): boolean {
    for (let car of arrayOfCars) {
        if (car.hybrid) {
            return true;
        }
    }

    return false;
}
console.log(areThereAnyHybridsForSale(dealership));
// Declare a function named expiredWarranty
// ○ Parameter(s): car (type Car)
// ○ Return type: boolean
// ○ Functionality: when called, this function will return true if the provided car has a
// year less than or equal to 2010 and false otherwise.
function expiredWarranty(car: Car): boolean {
    if (car.year <= 2010) {
        return true;
    } else {
        return false;
    }
}



// Setup:
// 1. Create your TS file, script.ts.
// 2. On the command line run…
// tsc --init
// 3. (Optional) In VS Code, modify the tsconfig.json file. Change "target": "es5" to "target":
// "es6". This will allow you to use all the beautiful ES6 features that we love!
// 4. To start TypeScript automatically compiling, run this on the command line.
// tsc --watch
// 5. In a separate command line tab or window run your JavaScript with one of two options:
// a. node script.js - run each time you test
// b. nodemon script.js - run once to automatically re-run your code every time
// you save