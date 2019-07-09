function wakeDog(dogName, dogBreed) {
    const task = `Wake ${dogName} the ${dogBreed}`;
    console.log(task);
    return task;
}

function leashDog(dogName, dogBreed) {
    const task = `Leash ${dogName} the ${dogBreed}`
    console.log(task);
    return task
}

function walkToPark(dogName, dogBreed) {
    const task = `Walk to the park with ${dogName} the ${dogBreed}`;
    console.log(task);
    return task;
}

function throwFrisbee(dogName, dogBreed) {
    const task = `Throw the frisbee for ${dogName} the ${dogBreed}`;
    console.log(task);
    return task;
}

function walkHome(dogName, dogBreed) {
    const task = `Walk home with ${dogName} the ${dogBreed}`;
    console.log(task);
    return task;
}

function unleashDog(dogName, dogBreed) {
    const task = `Unleash ${dogName} the ${dogBreed}`;
    console.log(task);
    return task;
}

let routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]

function exerciseDog(dogName, dogBreed) {
    let exercise = [];
    for (let i = 0; i < routine.length; i++) {
        exercise.push(routine[i](dogName, dogBreed));
    }
    return exercise
}