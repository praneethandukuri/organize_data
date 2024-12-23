const people = [
  {
    name: "Rahul",
    age: 30,
    profession: "software engineer",
    city: "Pune",
    hobbies: ["playing chess", "gardening"],
    pets: [
      {
        name: "Max",
        type: "Dog",
        breed: "golden retriever",
        age: 4,
        vaccinated: true,
        favouriteActivity: "playing fetch in the park",
      },
    ],
    isEmployed: true,
    ownsCar: true,
    studied: ["Computer Science"],
  },

  {
    name: "Ananya",
    age: 30,
    profession: "cook",
    city: "Bangalore",
    hobbies: ["cooking", "experimenting with Italian recipes"],
    pets: [
      {
        name: "Kiwi",
        type: "Parrot",
        vaccinated: true,
        traits: ["knows over 20 phrases", "mimics ananya's voice"],
      },
    ],
    isEmployed: false,
    ownsCar: false,
    studied: ["Computer Science", "Graphic Design"],
  },

  {
    name: "Ramesh",
    age: 45,
    profession: "Business Owner",
    city: "Jaipur",
    hobbies: ["Gardening", "Reading historical fiction"],
    pets: [
      {
        name: "Bella",
        type: "Cat",
        breed: "Persian",
        age: 3,
        vaccinated: true,
        favouriteActivity: "Lounging in the sun",
      },
      {
        name: "Leo",
        type: "Cat",
        breed: "Persian",
        age: 3,
        vaccinated: true,
        favouriteActivity: "Lounging in the sun",
      },
    ],
    isEmployed: true,
    ownsCar: true,
    studied: [],
  },

  {
    name: "Kavya",
    age: 28,
    profession: "Dancer",
    city: "Chennai",
    hobbies: ["modern fantasy novels", "binge-watching sci-fi shows"],
    pets: [
      {
        name: "Snowy",
        type: "Rabbit",
        age: 2,
        vaccinated: true,
        favouriteActivity:
          "hopping around her backyard and nibbling on carrots",
      },
    ],
    isEmployed: false,
    ownsCar: false,
    studied: [],
  },
];

//1. How many individuals are currently employed?
const totalEmployedPersons = (people) =>
  people.filter((person) => person.isEmployed).length;

//2. How many people own a car?
const totalPersonsOwnedCar = (people) =>
  people.filter((person) => person.ownsCar).length;

// 3. How many pets are fully vaccinated?
const totalVaccinatedPets = (people) =>
  people.flatMap((person) => person.pets).filter((pet) => pet.vaccinated)
    .length;

//4. What are the names of all the pets, and what type of animal is each?
const namesAndTypeOfPets = (people) =>
  people
    .flatMap((person) => person.pets)
    .map((pet) => ({ petName: pet.name, petType: pet.type }));
