"use strict";
// // TypeScriptda  tiplarni ozgartirish va  birlashtirish!
// // unknown type, union type , literal type, type aliases, required and optional properties operators in type
// // havfli usul
// let a: any = 20;
// let b: number = a;
// // havfsiz usul
// let c: unknown = 20.8298;
// let e: number = <number>c;
// let f: number = c as number;
// // (c as number).toFixed(2);
// // (<number>c).toFixed(2);
// // union type 
// let g: string | number | boolean = 12;
// g = "sssssssssssssssssssss";
// g = true;
// // literal type
// let s: "sm" | "md" | "lg";
// s = "sm";
// s = "md";
// s = "lg";
// // type aliases
// type Sizes = "12" | "OFf" | true | 13 | number;
// let x: Sizes = "OFf";
// x = true;
// type OBJ = { name: string } | { age: number };
// let obj: OBJ;
// obj = { name: "str" };
// obj = { age: 12 };
// obj = { name: "str", age: 23 };
// type OBJ2 = { name: string } & { age: number };
// let obj2: OBJ2 = { name: "str", age: 12 };
// type OBJ3 = { name: string, age?: number };
// let obj3: OBJ = { name: "str" };
// obj3 = { name: "name", age: 12 };
// // obj3.age =12; // xato
// console.log("age" in obj ? "mavjud " : "mavjud emas");
// //\************************************************************************************************
// type carType ={
//     carName:string,
//     carYear?:number
// }
// type BMWType = carType & {
//     color:string,
//     price:string,
// }
// // type strOrNum = string | number;
// // const ds:strOrNum = "12"
// interface Icar {
//     carName:string,
//     carYear?:number
// }
// interface IBmw extends Icar {
//     color:string,
//     price:string,
// }
// const carPoint =(point:Icar):void =>{
//     const carInfo:IBmw = point as IBmw;
// }
// const carData =(car:Icar):string =>{
//     return `Mashina nomi - ${car.carName}, Mashina yili - ${car.carYear}`
// }
// const logBmw =(data:IBmw):string =>{
//     return `Nomi - ${data.carName} , narxi : ${data.price}`;
// }
// console.log(logBmw({carName:"Bmw x5",color:"black",price:'100$'}))
// console.log(carData({carName:'Nexia 2'}));
// const canvas = document.getElementById("canvas") as HTMLCanvasElement;
// Literal type
// let car: "mers" = "mers";
// car = "mers";
// type actionType = "show" | 'hide'
// const div = document.getElementById("div") as HTMLCanvasElement;
// function showElement(action: actionType): 1 | 0 {
//     switch (action) {
//         case "hide":
//             return 0;
//         case "show":
//             return 1;
//     }
// }
// ENUM
// enum Dictionary {
//     Rus,
//     Uzb,
//     Eng
// }
// const uzbIndex = Dictionary.Uzb;
// const uzb = Dictionary[uzbIndex]
// console.log(uzb);
// const runEnum = () :number => {
//     return 2;
// }
// enum Decision {
//     Yes = 1,
//     No = runEnum(),
// }
// enum Numbers {
//     One,
//     Two,
//     Three
// }
// function getUzbNumber(number: Numbers): string {
//     switch (number) {
//         case Numbers.One:
//                 return "Bir";
//         case Numbers.Two:
//                 return "Ikki";
//         case Numbers.Three:
//                 return "Uch";
//     }
// }
// Tuples 
// const array: [number, string, boolean] = [21, "Tolipov", true]
// Generics 
function loggerData(number) {
    console.log(number);
    return number;
}
loggerData(12);
loggerData({ fullName: "Tolipov Ziyoviddin", surName: "Tolipov" });
loggerData('hello world!');
//# sourceMappingURL=app.js.map