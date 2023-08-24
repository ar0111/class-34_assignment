// const student = {
//     name: "Arafat Rahman",
//     job: "Software Engineer"
// }

// console.log(student);

// const person = new Object();
// person.name = "Rokeya"
// console.log(person);

// const human = Object.create(null);
// human.name = "Salman Khan";
// console.log(human);

// const human = Object.create(student);
// console.log(human.name);

// class People {
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
// }

// const people1 = new People("Mahmudullah", 40);
// // console.log(people1);

// const student = {
//     name: "Showariar",
//     inRich: true,
//     money: 1000,
//     subjects: ['English', 'Bangla', 'DSA'],
//     bestFriend: {
//         name: "Sajib",
//         major: "Science"
//     },

//     takeExam: function(){
//         console.log(this.name, "Taking Exam");
//     },
//     giveTreat: function(expense, tips){
//         this.money = this.money - expense - tips;
//         return this.money;
//     }
// }

// student.takeExam();
// const remaining = student.giveTreat(500, 50);
// console.log(remaining);
// const remaining2 = student.giveTreat(500, 100);
// console.log(remaining2);

// const bottle = {
//     color: 'Green',
//     hold: 'water',
//     price: 50,
//     isCleaned: true
// }

// const bottleKeys = Object.keys(bottle);
// // console.log(bottleKeys);

// const bottleValues = Object.values(bottle);
// // console.log(bottleValues);

// const pairs = Object.entries(bottle);
// console.log(pairs);

// Object.seal(bottle);
// Object.freeze(bottle);
// bottle.price = 100;
// bottle.height = 15;
// delete bottle.price;
// console.log(bottle);

const person = {
    id: 100,
    money: 12000,
    name: "Manna Vai",
    giveTreat: function(expense, tips){
        this.money = this.money - expense - tips;
        return this.money;
    }
}

const hero = {
    id: 200,
    money: 6000,
    name: "Maruf"
}

const normalHero = {
    id: 104,
    money: 10000,
    name: "Hero Alam"
}

// console.log(person.giveTreat(500));
// console.log(hero.giveTreat(500));
// const heroTreat = person.giveTreat.bind(hero);
// console.log(heroTreat(1000));
// console.log(heroTreat(2000));

// console.log(person.giveTreat.call(hero, 200, 300));
// console.log(person.giveTreat.apply(normalHero, [3000, 1000]));

function Manus(name){
    this.name = name;
}

const man = new Manus("Arafat Rahman");
console.log(man);