var person = {
    name: 'Frank',
    age: 30,
    hobbies: ['computer games', 'poker']
};
var favoriteActivites;
favoriteActivites = ['Dota'];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
