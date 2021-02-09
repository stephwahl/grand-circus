// 1. Declare a function named printTens
// ○ Parameter(s): n/a
// ○ Functionality: uses a loop to log, one by one, the tens from 10 to 100. (i.e. 10, 20, 30 … 100)

function printTens() {
// var i = 10;
// while(i <= 100) {
//     console.log(i);
//     i += 10;
// }

  for(let i = 10; i <= 100; i += 10) {
    console.log('Print Tens', i);
  }

} 
  printTens();


// 2. Declare a function named countUntilTens
// ○ Parameter(s): step
// ○ Functionality: uses a while loop to log, one by one, the numbers starting at step and adding step each time. It stops when the number is divisible by ten.
// For example, if step is 4, it will print 4, 8, 12, 16, 20. It will stop at 20 because 20 is divisible by 10.

// function countUntilTens(step) {
//   let total = step;
//     while(total % 10 != 0) {
//     console.log('Count until tens', total);  
//     total += step;
//   }
//   console.log('Count until tens', total);

// }
//   countUntilTens(4);

//BJ's solution to get 20 to print:

function countUntilTens(step) {
    let num = step;
  
    while (true) {  // just means the loop will continue forever, until break
      console.log('BJs solution', num);
  
      if (num % 10 === 0) {
        break;
      }
  
      num += step;
    }
  }
  countUntilTens(4);

// 3. Declare a function named hasVowels
// ○ Parameter(s): word
// ○ Functionality: returns true if the provided word contains one or more vowels and false if it contains no vowels.

function hasVowels(word) {
    word = word.toLowerCase();
  
    for (const letter of word) {
        if (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u") {
            return true;
          } 
    }
    return false;
     
    }
   
   console.log('Has vowels', hasVowels("ThE quick BrOwn fOx JUmps ovEr the lAZy DOG"));

// 4. Declare a function named testTemperature
// ○ Parameter(s): desiredTemp , actualTemp
// ○ Functionality: Given a desiredTemp and an actualTemp , tell the heating & cooling system what to do. Log one of these three things:
// ■ “Run A/C”
// ■ “Run heat”
// ■ “Stand by”

function testTempurature(desiredTemp, actualTemp) {
  if (actualTemp < desiredTemp) {
    console.log("Run heat");
  } else if (actualTemp > desiredTemp) {
      console.log("Run A/C");
  } else {
      console.log("Stand by");
  }

}
testTempurature(70, 70);


// 5. Declare a variable named dealership that is initialized to an array with the following objects: make model year hybrid
// Toyota Prius 2020 true
// Toyota Prius 2021 true
// Ford F-150 2015 false
// Ferrari Enzo 2004 false

const dealership = [
    {
      make: "Toyota",
      model: "Prius",
      year: 2020,
      hybrid: true,
    },
    {
      make: "Toyota",
      model: "Prius",
      year: 2021,
      hybrid: true,
    },
  
    {
      make: "Ford",
      model: "F-150",
      year: 2015,
      hybrid: false,
    },
  
    {
      make: "Ferrari",
      model: "Enzo",
      year: 2004,
      hybrid: false,
    },
  ];

  console.log("Original", dealership);


// 6. [2 points] Declare a function named findCars
// ○ Parameter(s): arrayOfCars , model
// ○ Functionality: When called, this function will return an array of all the cars from the arrayOfCars argument that have the specified model argument. If there are no cars that have that model, return an empty array.

// function findCars(arrayOfCars, model) {
//    for (const carModel of arrayOfCars) {
//     const carModel = arrayOfCars.find((car) => car.model === model);
//     console.log('Find cars by model', carModel);
//     // return carModel;
//    }   
// }

// findCars(dealership, "Prius");

//BJs solution that works

function findCars(arrayOfCars, model) {
    return arrayOfCars.filter(function (car) {
      return car.model === model;
    });
  }

  console.log('Find cars', findCars(dealership, "Prius"));

// 7. [2 points] Declare a function named addCar
// ○ Parameter(s): arrayOfCars , make , model , hybrid
// ○ Functionality: construct an object and add it to the beginning of the arrayOfCars . Use the parameters for the values, but always set the year to 2021. The object should have the same property names as the objects already
// in the array.

function addCar(arrayOfCars, make, model, hybrid) {
   arrayOfCars.unshift({
       make: make,
       model: model,
       year: 2021,
       hybrid: hybrid,
   });

}
addCar(dealership, "Chevy", "Malibu", true);
console.log('Add Car', dealership);


// 8. Declare a function named areThereAnyHybridsForSale
// ○ Parameter(s): arrayOfCars
// ○ Functionality: when called, this function will return true if there is a hybrid car in the arrayOfCars argument and false otherwise

function areThereAnyHybridsForSale(arrayOfCars) {
    for (let car of arrayOfCars) {
      if (car.hybrid === true) {
        return true;
        } 
    }
    return false;
}
console.log(dealership);

console.log('Are Hybrids for sale: ', areThereAnyHybridsForSale(dealership));