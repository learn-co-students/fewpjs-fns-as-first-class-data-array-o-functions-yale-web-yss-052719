function wakeDog(dogName, dogBreed) {
  let string = `Wake ${dogName} the ${dogBreed}`;
  // create a string
  console.log(string);
  // print to the console
  return string;
  // return it
}

function leashDog(dogName, dogBreed) {
  let string = `Leash ${dogName} the ${dogBreed}`;
  console.log(string);
  return string;
}

function walkToPark(dogName, dogBreed) {
  let string = `Walk to the park with ${dogName} the ${dogBreed}`;
  console.log(string);
  return string;
}

function throwFrisbee(dogName, dogBreed) {
  let string = `Throw the frisbee for ${dogName} the ${dogBreed}`;
  console.log(string);
  return string;
}

function walkHome(dogName, dogBreed) {
let string = `Walk home with ${dogName} the ${dogBreed}`;
console.log(string);
return string;
}

function unleashDog(dogName, dogBreed) {
  let string = `Unleash ${dogName} the ${dogBreed}`;
  console.log(string);
  return string;
}

let routine = [ wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog ]

function exerciseDog(dogName, dogBreed) {
  let array = [];
  for (let i = 0; i < routine.length; i++) {
  let x = routine[i](dogName, dogBreed);
  array.push(x);
  }
  return array;
}
