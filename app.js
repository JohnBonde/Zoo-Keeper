class Shark {
  constructor(name, age, length, weight, food) {
    this.name = name;
    this.age = age;
    this.length = length;
    this.weight = weight;
    this.food = food
  }
  eat() {
    console.log(this.food);
  }
}
class Bear {
  constructor(name, age, gender, weight, food) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.weight = weight;
    this.food = food
  }
}
class Dog {
  constructor(name, age, gender, weight, breed, sound) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.weight = weight;
    this.breed = breed;
    this.sound = sound
  }
  speak() {
    console.log(this.sound);
  }
}
class Cat {
  constructor(name, age, gender, weight, breed, sound) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.weight = weight;
    this.breed = breed;
    this.sound = sound
  }
  speak() {
    console.log(this.sound);
  }
}
class Bird {
  constructor(name, age, gender, weight, sound) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.weight = weight;
    this.sound = sound
  }
  speak() {
    console.log(this.sound);

  }
}
let brutus = new Shark('Brutus', 5, 40, 2500, 'fish');
let bubba = new Bear('Bubba', 4, 'male', 900, 'salmon');
let sophie = new Dog('Sophie', 13, 'female', 60, 'Golden Retriever', 'woof');
let calypso = new Cat('Calypso', 2, 'female', 9, 'Calico-tourtishell', 'meow');
let peaches = new Bird('Peaches', 1, 'male', 1, 'tweet');
let catty = new Cat('Catty', 5, 'female', 9, 'Torby', 'meow');
let cats = [];
cats.push(calypso, catty);
console.log(cats);


