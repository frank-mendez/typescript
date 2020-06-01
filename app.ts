// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: 'Frank',
//   age: 30,
//   hobbies: ['computer games', 'poker'],
//   role: [2, 'author'],
// };
// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const person = {
  name: 'Frank',
  age: 30,
  hobbies: ['computer games', 'poker'],
  role: Role.ADMIN,
};

let favoriteActivites: string[];
favoriteActivites = ['Dota'];

console.log(person.name);
for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

if (person.role === Role.ADMIN) {
  console.log('is admin');
}
