// let array = ["Wake Byron the poodle", "Leash Byron the poodle", "Walk to the park with Byron the poodle", "Throw the frisbee for Byron the poodle", "Walk home with Byron the poodle","Unleash Byron the poodle"]

function wakeDog(dogName, dogBreed) {
  return(`Wake ${dogName} the ${dogBreed}`);
}

function leashDog(dogName, dogBreed) {
  return(`Leash ${dogName} the ${dogBreed}`);
}

function walkToPark(dogName, dogBreed) {
  return(`Walk to the park with ${dogName} the ${dogBreed}`);
}

function throwFrisbee(dogName, dogBreed) {
  return(`Throw the frisbee for ${dogName} the ${dogBreed}`);
}

function walkHome(dogName, dogBreed) {
  return(`Walk home with ${dogName} the ${dogBreed}`);
}

function unleashDog(dogName, dogBreed) {
  return(`Unleash ${dogName} the ${dogBreed}`);
}

const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]

function exerciseDog(dogName, dogBreed) {
  const returnArray = [];
  for (let i = 0; i < routine.length; i++) {
    let doggoRoutine = routine[i](dogName, dogBreed)
    returnArray.push(doggoRoutine)
  }
  return returnArray
}
