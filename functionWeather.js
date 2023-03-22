const weatherToday = "Rainy";

function exerciseDog(dogName, dogBreed) {
    if (weatherToday === "Rainy") {
    return `${dogName} did not exercise due to rain`;
}
console.log(`Wake ${dogName} the ${dogBreed}`);
console.log(`Leash ${dogName} the ${dogBreed}`);
console.log(`Walk to the park ${dogName} the ${dogBreed}`);
console.log(`Throw the frisbee for ${dogName} the ${dogBreed}`);
console.log(`Walk home with ${dogName} the ${dogBreed}`);
console.log(`Unleash ${dogName} the ${dogBreed}`);
}
const result = exerciseDog("Byron", "poodle");
console.log(result);