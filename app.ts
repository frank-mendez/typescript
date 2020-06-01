const person = {
  name: 'Frank',
  age: 30,
  hobbies: ['computer games', 'poker'],
};

let favoriteActivites: string[];
favoriteActivites = ['Dota'];

console.log(person.name);
for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}
