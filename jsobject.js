let person=
{
    name:"John",
    age:30,
    city:"New York",
    weight:70
}
// console.log(person.name);
// console.log(person.age);
// console.log(person.city);
// console.log(person.weight);

//add new property
person.country="USA";
console.log(person.country);
//update existing property
person.age=31;
console.log(person.age);
//delete property
delete person.weight;
console.log(person.weight); //undefined
//print object
console.log(person);
//typeof object
console.log(typeof person); //object

//use case: create a function to print person's details
function printPersonDetails(person) {
    console.log("Name: " + person.name);
    console.log("Age: " + person.age);
    console.log("City: " + person.city);
    console.log("Country: " + person.country);
}
printPersonDetails(person);

//use case: create a function to calculate person's birth year
function calculateBirthYear(person) {
    const currentYear = new Date().getFullYear();
    return currentYear - person.age;
}
console.log("Birth Year: " + calculateBirthYear(person));

//use case: create a function to check if person is adult
function isAdult(person) {
    return person.age >= 18;
}
console.log("Is Adult: " + isAdult(person));

//use case: create a function to update person's city
function updateCity(person, newCity) {
    person.city = newCity;
}
updateCity(person, "Los Angeles");
console.log(person.city);