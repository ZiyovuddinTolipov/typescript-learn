// TypeScriptda  tiplarni ozgartirish va  birlashtirish!
// unknown type, union type , literal type, type aliases, required and optional properties operators in type

// havfli usul
let a: any = 20;
let b: number = a;

// havfsiz usul
let c: unknown = 20.8298;

let e: number = <number>c;
let f: number = c as number;

// (c as number).toFixed(2);
// (<number>c).toFixed(2);

// union type 
let g: string | number | boolean = 12;
g = "sssssssssssssssssssss";
g = true;

// literal type
let s: "sm" | "md" | "lg";
s = "sm";
s = "md";
s = "lg";

// type aliases

type Sizes = "12" | "OFf" | true | 13 | number;

let x: Sizes = "OFf";
x = true;

type OBJ = { name: string } | { age: number };

let obj: OBJ;

obj = { name: "str" };
obj = { age: 12 };
obj = { name: "str", age: 23 };

type OBJ2 = { name: string } & { age: number };
let obj2: OBJ2 = { name: "str", age: 12 };

type OBJ3 = { name: string, age?: number };

let obj3: OBJ = { name: "str" };
obj3 = { name: "name", age: 12 };

// obj3.age =12; // xato
console.log("age" in obj ? "mavjud " : "mavjud emas");

const carData =(carName:string,carYear?:number):string =>{

    return `Mashina nomi - ${carName}, Mashina yili - ${carYear}`
}
console.log(carData('BMW'));