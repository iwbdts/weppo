"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.persons = void 0;
exports.persons = [
    {
        name: "Jan Kowalski",
        age: 17,
        occupation: "Student",
    },
    {
        name: "Tomasz Malinowski",
        age: 20,
        role: "Administrator",
    },
];
// function logPerson(person: Person) {
//     let additionalInformation: string;
//     if (person.role) {
//     additionalInformation = person.role;
//     } else {
//     additionalInformation = person.occupation;
//     }
//     console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`);
//     }
function logPerson(person) {
    let additionalInformation;
    if ("role" in person) {
        additionalInformation = person.role;
    }
    else {
        additionalInformation = person.occupation;
    }
    console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`);
}
logPerson(exports.persons[0]);
