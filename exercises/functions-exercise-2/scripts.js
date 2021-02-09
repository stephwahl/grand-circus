(function() {
    // Code goes in here
    let facingForward = true;
    let position = 0;

    function moveForward(distance) {
        if (facingFoward === true)
           {
               position = position + distance
           }
           else{
               position = position - distance
           }
       }
       function movebackward(distance) {
           if (facingFoward === true)
              {
                  position = position - distance
              }
              else{
               position = position + distance }
          }
          function printlocation() {
           console.log(position)
              }
              function turnAround() {
               if (facingFoward === true)
                  {
                   (facingFoward = false)
                  }
                  else{
                   position = position - distance }
              }





    

//    function moveForward(distance) {
//         // increase position by distance
//         position = position + distance;
//     }

//     function moveBackward(distance) {
//         // decrease position by distance

//     }

//     function turnAround() {
//         // switch value of facingForward
//     }

    
//     function printLocation() {
//         console.log(`Your position is ${position}`);
//     }

})()