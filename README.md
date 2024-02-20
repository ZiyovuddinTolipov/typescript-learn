# typescript-learn

.ts fayilni .js ga o'tkazib beradi.
tsc index.ts

xatoliklarni to'g'ri ko'rsatishi uchun .
tsc --init

config fayldagi comentdagini yoqib qoyamiz.
``` json
sourceMap: true ;
```

## hadeb o'zgarishlarni terminalda run qilavermaslik uchun config faylga 
``` json
"watch": true ,
```
 buyrug'ini qoshib qoyamiz.

## xatolilarni siz tanlagan tilda chiqarish uchun
```command
tsc -locale ru
```
## agar kelayotgan malumot oldiga ? belgisini qo'ysak  shu o'zgaruvchidan ma'lumot kelmay qolsa ham xatolik bermaydi 
```typescript
const carData =(carName:string,carYear?:number):string =>{

    return `Mashina nomi - ${carName}, Mashina yili - ${carYear}`
}
console.log(carData('BMW'));
```

## Turlarni mana shunday yozsa ham bo'ladi
```typescript
type carType ={
    carName:string,
    carYear?:number
}

const carData =(car:carType):string =>{

    return `Mashina nomi - ${car.carName}, Mashina yili - ${car.carYear}`
}


console.log(carData({carName:'Nexia 2'}));
```