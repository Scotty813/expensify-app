//
// OBJECT DESTRUCTURING
//

// const person = {
//     name: "Scott",
//     age: 28,
//     location: {
//         city: "Tampa",
//         temp: 1000
//     }
// }

// const { name, age } = person;
// console.log(`${name} is ${age}`);

// const { city, temp: temperature } = person.location;
// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}`);
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const { name: publisherName = "Self-Published" } = book.publisher;

// console.log(publisherName);


//
// ARRAY DESTRUCTURING
//

const address = ['13103 South Juniper Street', 'Tampa', 'Fl', '33612'];

const [ , city, state ] = address;

console.log(`You are in ${city} ${state}`);







