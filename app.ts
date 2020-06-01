const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: 'Frank',
  age: 30,
  hobbies: ['computer games', 'poker'],
  role: [2, 'author'],
};

let favoriteActivites: string[];
favoriteActivites = ['Dota'];

console.log(person.name);
for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}
