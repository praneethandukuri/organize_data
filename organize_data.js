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
        favouriteActivity: ["playing fetch in the park"],
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
        favouriteActivity: ["knows over 20 phrases", "mimics ananya's voice"],
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
        favouriteActivity: ["Lounging in the sun"],
      },
      {
        name: "Leo",
        type: "Cat",
        breed: "Persian",
        age: 3,
        vaccinated: true,
        favouriteActivity: ["Lounging in the sun"],
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
        favouriteActivity: [
          "hopping around her backyard and nibbling on carrots",
        ],
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

// 5. Which cities do the individuals live in?
const peopleAndNatives = (people) =>
  people.map((person) => ({ name: person.name, city: person.city }));

// 6. How many hobbies are shared across the group? What are they?
const listOfTotalHobbies = function (people) {
  const personsHobbies = people.flatMap((person) => person.hobbies);

  return { hobbiesCount: personsHobbies.length, hobbies: personsHobbies };
};

// 7. How many pets belong to people who are currently unemployed?
const totalPetsWithUnemployed = (people) =>
  people.filter((person) => !person.isEmployed).flatMap((person) => person.pets)
    .length;

// 8. What is the average age of the individuals mentioned in the passage?
const averageAge = (people) => {
  const ages = people.map((person) => person.age);

  return ages.reduce((sum, current) => sum + current) / ages.length;
};

// 9. How many individuals have studied computer science, and how many of them have pets?
const cs_students_with_pets = (people) =>
  people
    .filter((person) => person.studied.includes("Computer Science"))
    .filter((person) => person.pets).length;

// 10. How many individuals own more than one pet?
const peopleWithMoreThanOnePet = (people) =>
  people.filter((person) => person.pets.length > 1).length;

// 11. Which pets are associated with specific favorite activities?
const petsNotWithFavouriteActivities = (people) =>
  people
    .flatMap((person) => person.pets)
    .filter((pet) => pet.favouriteActivity.length !== 0)
    .map((pet) => ({
      name: pet.name,
      type: pet.type,
      favouriteActivity: pet.favouriteActivity,
    }));

//12. What are the names of all animals that belong to people who live in Bangalore or Chennai?
const pets_with_native_of_BLR_CHN = (people) =>
  people.filter((person) => ["Bangalore", "Chennai"].includes(person.city));

// 13. How many vaccinated pets belong to people who do not own a car?
const totalPetsWithPersonNoCar = (people) =>
  people
    .filter((person) => !person.ownsCar)
    .flatMap((person) => person.pets)
    .filter((pet) => pet.vaccinated).length;
