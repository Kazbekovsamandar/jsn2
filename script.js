//alert confirm prompt
//const message=alert('Hello World');
//console.log(message);
//confirm inglizchadan tasdiqlash va ikki xil malumot
//const age = confirm("are you 18+");
//console.log(age);

//const message =+prompt("son kiriting");
//console.log(typeof (message));//null
//typeof ->malumot turini bilish uchun4


//string nma?
//char
//string bu so'zlar b/n ishlash uchun ishlatamiz

//let a='Hello';
//a=Number(b);
//let b=prompt("ikkinCHi SON");
//b=Number(b);
//let c=a+b;
// 1usul prompt sozini oldiga +
// 2usul promt ovlas paski qatorga  Number funksiyasini qo'yish
// minusda string ham amal qilyapti lekin plus ishlamayapti
// minus ozgauvchidan bittasi string bop qosa NaN qaytaradi
//console.log(c);

//const age=+prompt("Birinchi SON");
//const a=+prompt("ikkinCHi SON");
//const b=age+a;
//console.log(b);


//const person = {
    //firstName: "donyor",
  //  lastName: "mamaniyozov",
   // age: 16,
    //eyeColor: "brown"
//}

//document.getElementById("demo").innerHTML = person.firstName + " is " + person.age + " years old.";


 //if 
 // boolen true false  -> nimadir false else 
 // if(meni ayam ) -> oyin oynaladi agar ob qoysachi oynalmedi ,agar stadion gaplashse  futbol oynemiz bomasachi barbr 
 //let a=5;
 //if(a>5){  // true bolsa if qismini 
  //  console.log('a 5 dan katta');
//} 
//else if(a==5){   
  //    console.log('5ga teng');
//}  
//else {     // false bolsa else 
  //  console.log('5dan kichik');
//}

//let a=6;
//if(a%2==1){
//console .log(1);


//}
//else{
//console.log('2');
//}

//let a=8;
//if(a>9);
//console.log('U maktab oquvchisi');

//let a=4;
//let b=10;
//let y=a*b;
//console.log(y);

// takrorlanish 
// for while do while 

// 
// while -> davomida  misol uchun men dars otrgan paytim ,pul sanashyapti 
//
//let a=1;
//while(a<10)   // buyruq 
//{
 //console.log(a);
 //a=a+2;  //a ++
         // amal 
//}
// amalimi oxrgi qiymati false bolsa chqb ketadi

//let a=3;
//do{
  //console.log(a);
  //a++;
//}  // true likka tekshiradi keyin false
//while(a<10);

//const message =alert("17 yoshdan katta bo'lganlar saytga kirish mumkin?!");
//console.log(message);

//let age=+prompt("bironta son kiriting");
//age=Number(age);
//let a=+prompt("son kiriting");
//a=Number(a);
//const b=age+a;
//console.log(b);

const car=["bmw","mercedes","audi","toyota", "nissan"];
let text="";
for (let i=0; i<car.length; i++)
  {
    text+=car[i] + "<br>";
}

document.getElementById("demo").innerHTML=text;

