"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumbersCollection_1 = require("./NumbersCollection");
// const numbersCollection = new NumbersCollection([100,3,-5,0]);
// const sorter = new Sorter(numbersCollection);
// sorter.sort();
// console.log(numbersCollection.data);
var numbersCollection = new NumbersCollection_1.NumbersCollection([100, 3, -5, 0]);
numbersCollection.sort();
console.log(numbersCollection.data);
// const charactersCollection = new CharactersCollection('Xaayb');
// const sorter = new Sorter(charactersCollection);
// sorter.sort();
// console.log(charactersCollection.data);
// const linkedList = new LinkedList();
// linkedList.add(500);
// linkedList.add(-10);
// linkedList.add(-3);
// linkedList.add(4);
// const sorter = new Sorter(linkedList);
// sorter.sort();
// linkedList.print();
