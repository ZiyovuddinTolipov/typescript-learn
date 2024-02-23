# typescript-learn

.ts fayilni .js ga o'tkazib beradi.

```command
tsc index.ts
```

xatoliklarni to'g'ri ko'rsatishi uchun .

```command
tsc --init
```

config fayldagi comentdagini yoqib qoyamiz.

```json
"sourceMap": true ,
```

## hadeb o'zgarishlarni terminalda run qilavermaslik uchun config faylga

```json
"watch": true ,
```

buyrug'ini qoshib qoyamiz.

## xatolilarni siz tanlagan tilda chiqarish uchun

```command
tsc -locale ru
```

## agar kelayotgan malumot oldiga ? belgisini qo'ysak shu o'zgaruvchidan ma'lumot kelmay qolsa ham xatolik bermaydi

```typescript
const carData = (carName: string, carYear?: number): string => {
  return `Mashina nomi - ${carName}, Mashina yili - ${carYear}`;
};
console.log(carData("BMW"));
```

## Tiplar

## Turlarni mana shunday yozsa ham bo'ladi

```typescript
type carType = {
  carName: string;
  carYear?: number;
};

const carData = (car: carType): string => {
  return `Mashina nomi - ${car.carName}, Mashina yili - ${car.carYear}`;
};
console.log(carData({ carName: "Nexia 2" }));
```

## Biror o'zgaruvchi uchun ham _type_ hususiyatidan foydalansa ham bo'ladi.

```typescript
type strOrNum = string | number;
const ds: strOrNum = "12";
```

## interface

### vorislik

### interface da vorislik

```typescript
interface Icar {
  carName: string;
  carYear?: number;
}

interface IBmw extends Icar {
  color: string;
  price: string;
}

const carData = (car: Icar): string => {
  return `Mashina nomi - ${car.carName}, Mashina yili - ${car.carYear}`;
};

const logBmw = (data: IBmw): string => {
  return `Nomi - ${data.carName} , narxi : ${data.price}`;
};
console.log(logBmw({ carName: "Bmw x5", color: "black", price: "100$" }));
console.log(carData({ carName: "Nexia 2" }));
```

### type da vorislik

```typescript
type carType = {
  carName: string;
  carYear?: number;
};
type BMWType = carType & {
  color: string;
  price: string;
};
```

### Bunday holatlar ham mavjud

```typescript
interface Icar {
  carName: string;
  carYear?: number;
}
interface IBmw extends Icar {
  color: string;
  price: string;
}
const carPoint = (point: Icar): void => {
  const carInfo: IBmw = point as IBmw;
};
```

### Canvas

```typescript
const canvas = document.getElementById("canvas") as HTMLCanvasElement;
```

## Literal type bunda o'zgaruvch qiymati faqat 'mers' bo'lishi mumkun holos

```typescript
let car: "mers" = "mers";
car = "mers";
```

### bunday holatlarda ham ishlatiladi

```typescript
type actionType = "show" | "hide";

const div = document.getElementById("div") as HTMLCanvasElement;

function showElement(action: actionType): boolean {
  switch (action) {
    case "hide":
      return false;
    case "show":
      return true;
  }
}
```

### funksiyadan qaytadigan qiymatni ham o'zgartirishmiz mumkun

```typescript
type actionType = "show" | "hide";

const div = document.getElementById("div") as HTMLCanvasElement;

function showElement(action: actionType): 1 | 0 {
  switch (action) {
    case "hide":
      return 0;
    case "show":
      return 1;
  }
}
```

## ENUM

### ko'rinishi

```typescript
enum Dictionary {
  Rus,
  Uzb,
  Eng,
}
```

### Dictionary dan qiymat olish

```typescript
enum Dictionary {
  Rus,
  Uzb,
  Eng,
}
const uzbIndex = Dictionary.Uzb;
const uzb = Dictionary[uzbIndex];
console.log(uzb);
```
