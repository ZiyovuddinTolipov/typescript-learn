"use strict";
// TypeScriptda  tiplarni ozgartirish va  birlashtirish!
// unknown type, union type , literal type, type aliases, required and optional properties operators in type
// havfli usul
let a = 20;
let b = a;
// havfsiz usul
let c = 20.8298;
let e = c;
let f = c;
// (c as number).toFixed(2);
// (<number>c).toFixed(2);
// union type 
let g = 12;
g = "sssssssssssssssssssss";
g = true;
// literal type
let s;
s = "sm";
s = "md";
s = "lg";
let x = "OFf";
x = true;
let obj;
obj = { name: "str" };
obj = { age: 12 };
obj = { name: "str", age: 23 };
let obj2 = { name: "str", age: 12 };
let obj3 = { name: "str" };
obj3 = { name: "name", age: 12 };
// obj3.age =12; // xato
console.log("age" in obj ? "mavjud " : "mavjud emas");
////////////////////////////////////////////////////////////////
const carData = (car) => {
    return `Mashina nomi - ${car.carName}, Mashina yili - ${car.carYear}`;
};
console.log(carData({ carName: 'Nexia 2' }));
//# sourceMappingURL=app.js.map