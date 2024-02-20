# typescript-learn

.ts fayilni .js ga o'tkazib beradi.
tsc index.ts

xatoliklarni to'g'ri ko'rsatishi uchun .
tsc --init

config fayldagi comentdagini yoqib qoyamiz.
sourceMap: true ;

hadeb o'zgarishlarni terminalda run qilavermaslik uchun config faylga 
"watch": true , buyrug'ini qoshib qoyamiz.

xatolilarni siz tanlagan tilda chiqarish uchun
tsc -locale ru
    
agar kelayotgan malumot oldiga ? belgisini qo'ysak  shu o'zgaruvchidan ma'lumot kelmay qolsa ham xatolik bermaydi 
const carData =(carName:string,carYear?:number):string =>{

    return `Mashina nomi - ${carName}, Mashina yili - ${carYear}`
}
console.log(carData('BMW'));