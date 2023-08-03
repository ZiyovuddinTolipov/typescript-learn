// TypeScriptda  tiplarni ozgartirish va  birlashtirish!
// unknown type, union type , literal type, type aliases, required and optional properties operators in type
// havfli usul
var a = 20;
var b = a;
// havfsiz usul
var c = 20.8298;
var e = c;
var f = c;
// (c as number).toFixed(2);
// (<number>c).toFixed(2);
// union type 
var g = 12;
g = "sssssssssssssssssssss";
g = true;
// literal type
var s;
s = "sm";
s = "md";
s = "lg";
var x = "OFf";
x = true;
var obj;
obj = { name: "str" };
obj = { age: 12 };
obj = { name: "str", age: 23 };
var obj2 = { name: "str", age: 12 };
var obj3 = { name: "str" };
obj3 = { name: "name", age: 12 };
// obj3.age =12; // xato
console.log("age" in obj ? "mavjud " : "mavjud emas");
