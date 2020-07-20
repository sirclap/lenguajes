import * as utils from './utils';
import {SlothMachine} from './slot';

// Array functions
var datos = [1,2,3];
console.log(`Head: ${utils.head(datos)}`);
console.log(`Tail: ${utils.tail(datos)}`);
console.log(`Init: ${utils.init(datos)}`);
console.log(`Last: ${utils.last(datos)}`);
console.log(`Concat: ${utils.concat(datos, datos)}`);
console.log(`Concat All: ${utils.concatAll(datos, datos, datos)}`);
console.log('Inmutable check');
console.log(datos);

// Clone object
var usuario = {
    name: "José",
    age: 25
};

console.log('Clone object');
console.log(utils.clone(usuario));

// Merge objects
const a = { name: "Maria", surname: "Ibañez", country: "SPA" };
const b = { name: "Luisa", age: 31, married: true };
console.log('Merge objects');
console.log(utils.merge(a, b));

// Books
const books = [
    { title: "Harry Potter y la piedra filosofal", isRead: true },
    { title: "Canción de hielo y fuego", isRead: false },
    { title: "Devastación", isRead: true },
  ];
  
console.log(`Devastación is read: ${utils.isBookRead(books, "Devastación")}`); 
console.log(`Canción de hielo y fuego is read: ${utils.isBookRead(books, "Canción de hielo y fuego")}`); 
console.log(`Los Pilares de la Tierra is read: ${utils.isBookRead(books, "Los Pilares de la Tierra")}`); 
    
// Slot machine
console.log('Slot machine');
const machine1 = new SlothMachine();
machine1.play(); 
machine1.play(); 
machine1.play(); 
machine1.play(); 
machine1.play(); 