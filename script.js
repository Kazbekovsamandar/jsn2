//alert confirm prompt
// const message=alert('Hello World');
// console.log(message);
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

//let a=45;
//let b=15;
//let y=a/b;
//console.log(y);

// takrorlanish 
// for while do while 

// 
// while -> davomida  misol uchun men dars otrgan paytim ,pul sanashyapti 
//
//let a=2;
//while(a<112)   // buyruq 
//{
// console.log(a);
// a=a+2;  //a ++
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

//const water=["coca cola","fanta","tiropic","chay", "flesh"];
//let text="";
//for (let i=0; i<water.length; i++)
  //{
  //  text+=water[i] + "<br>";
//}

//document.getElementById("demo").innerHTML=text;

//let a=6;
//for(let i=1;i<a;i++)
//{  
 // if(i%2==0)
 // {
//    console.log()
 // }
 //   console.log(i);
//}

// let i=0 yoki 1  ;i<a.lenght ;i<a ;i<=a ;i++

// 1 6 da  -> 2 
// do{ code  a++;} while()

//let kun = 4;   // 5kungi  malumot kere
//switch (kun)   // qavsdi ichi bir xil bolish ozgaruvchi bilan
//{
 // case 1:
  //  console.log("dushanba");
   // break;  // toxtatish
  //case 2:
   // console.log("seshanba");
 // break;
  //case 3:
  //console.log("chorshanba");
   //break;
  //case 4:
  //console.log("payshanba");
   // break;
    //case 5:
    //console.log("juma");
    //break;
   //case 6:
    //console.log("shanba");
    //break;
    //case 7:
   // console.log("yakshanba");
   // break;
    //default:
     // console.log("brat adashb qoldiz");
     // break;



//}

//let day;  // saqlanmagan 
//switch (new Date().getDay()) {  //  .getday()  vazifasi bugungi kundi chiqarb bersh 0
 // case 0:
  //  day = "yakshanba";
  //  break;
 // case 1:
   // day = "Monday";
   // break;
 // case 2:
  //  day = "Tuesday";
  //  break;
 // case 3:
  //  day = "Wednesday";
   // break;
 // case 4:
   // day = "Thursday";
   // break;
 // case 5:
    //day = "Friday";
    //break;
  //case  6:
  //  day = "Saturday";
//}
//document.getElementById("demo").innerHTML = "Today is " + day;

//let ovqat=7;
//switch(ovqat)
//{
 // case 1:
   // console.log("osh");
    //break;
  //case 2:
   // console.log("shorva");
  //  break;
//  case 3:
    //console.log("manti");
    //break;
  //case 4:
    //console.log("somsa");
    //break;
  //case 5:
    //console.log("lagman");
   // break;
  //case 6:
    //console.log("kabob");
   // break;
  //default:
   // console.log("menyuda bunaqa taom yo'q");
  //  break;  
//}

//let oy=5;
//switch(oy)
//{
  //case 1:
    //console.log("yanvar");
    //break;
  //case 2:
   // console.log("fevral");
    //break;
  //case 3:
   // console.log("mart");
    //break;
  //case 4:
  //  console.log("aprel");
   // break;
  //case 5:
   // console.log("may");
   // break;
  //case 6:
   // console.log("iyun");
   // break;
  //case 7:
   // console.log("iyul");
    //break;
 // case 8:
  //  console.log("avgust");
   // break;
  //case 9:
   // console.log("sentabr");
    //break;
 // case 10:
  //  console.log("oktabr");
   // break;
  //case 11:
    //console.log("noyabr");
   // break;
  //case 12:
   // console.log("dekabr");
    //break;
  //default:
   // console.log("bunday oy yo'q");
    //break;
//} 

//let fasilar=2;
//switch(fasilar)
//{
  //case 1:
    //console.log("Bahor");
 // break;
 // case 2:
  //   console.log("Yoz");
  // break;
  // case 3:
    // console.log("Kuz");
  // break;
  // case 4:
    // console.log("Qish");
  // break;
   // default:
      // console.log("bunday fasil yoq");
      //break;
//}

//let i=1;
//while(i<=100){
  //if(i % 5 != 0){
  //  console.log(i);
  //}
  //i++;
//}

//let a=5;
//if(a%2==1){
 // console.log('toq son');
//}
//else{
  //console.log('juft son');
//}

//let i = 1;
//while(i<=10){
 // console.log(i*i);
 // i++;
//}

//for(let i = 1; i <= 5; i++){
 // console.log((i ** 3));
//}


//document.getElementById("mySelect").onchange = function() {
 // myFunction();
//};  

// optionlardi ozgartirish onchangega misol  onchange faqat  

//function myFunction() {
  //let x = document.getElementById("mySelect").value;
//  document.getElementById("demo").innerHTML = "You selected: " + x;
//}
//myfunction  optionlardi almashtirish uchun

//

//document.getElementById("myInput").onchange = function() {
 // inputFunction();
//};

//function inputFunction() {
   // let inputVal = document.getElementById("myInput").value;
   // document.getElementById("inputDemo").innerHTML = "You entered: " + inputVal;

//}

//let a=4;
//let b=5;
//let c=a+b;
//console.log(c);

// funksiya -> kodni qayta qayta yozmaslik
// js funksiya , declaration,expression,arrow,
// FUNCTION DECLERATION
// 3 TA ASOSIY QISM  key->function nomi->

//function  SHowHelloworld()
//{
  //  console.log("Hello world!");
//}
//SHowHelloworld();

//let age=17;
//console.log(age);
//function sayHellotoUser(name)
//{
   // let age=16;
  //  console.log(`Hello ${name},he is ${age} years old`);
//}

//sayHellotoUser("Muhammadaziz");
//console.log(age);

// () -> argument dynamic malumotlar

// ""  ` ` -> backstick

// argumentdi ichida name

// lakal va global malumot turi

// lokal malumot turi -> functiondi  blok sxemasi ichida boladi

// global malumot turi -> functiondi blok sxemasi ichida bolmasa

//let age=> 17 edi , funksiya ichida 20 bersak ham u tasir qilmadi ,funksiya ichida 20 tashqarida esa 17


//function getCalculations(a,b)
//{
  //  return a+b;  // malumotdi qaytaradi ozida saqlab turadi, i ustida amal bajarsa boladi 
   // ozidan keyin ishlatmidi 
  //  let tyu=25;
   // console.log(tyu);
//}
//const ae=18+(getCalculations(4,7));
//console.log(ae);

//function SHowHelloworld()
//{
 //   console.log("Hello world!");
//}
//SHowHelloworld();

//let a=4;
//let b=5;
//let c=a+b;
//console.log(c);

// funksiya -> kodni qayta qayta yozmaslik
// js funksiya , declaration,expression,arrow,
// FUNCTION DECLERATION
// 3 TA ASOSIY QISM  key->function nomi->

//function  SHowHelloworld()
//{
 //   console.log("Hello world!");
//}
//SHowHelloworld();

//let age=17;
//console.log(age);
//function sayHellotoUser(name)
//{
   // let age=20;
  //  console.log(`Hello ${name},he is ${age} years old`);
//}

//sayHellotoUser("Sardor");
//console.log(age);

// () -> argument dynamic malumotlar

// ""  ` ` -> backstick

// argumentdi ichida name

// lakal va global malumot turi

// lokal malumot turi -> functiondi  blok sxemasi ichida boladi

// global malumot turi -> functiondi blok sxemasi ichida bolmasa

//let age=> 17 edi , funksiya ichida 20 bersak ham u tasir qilmadi ,funksiya ichida 20 tashqarida esa 17

//const ae=18+(getCalculations(4,7));
//console.log(ae);

//function getCalculations(a,b)
//{
 //   return a+b;  // malumotdi qaytaradi ozida saqlab turadi, i ustida amal bajarsa boladi 
   // ozidan keyin ishlatmidi 
 //   let tyu=25;
  //  console.log(tyu);
//}


// function decleration => biz uni script ichida xohlagan joyimizda chaqiramiz

// const HelloWorld=function()
// {
//    console.log("Hello world!");
// }
// HelloWorld();
//const CalculateXojiaka=function(a,b)
//{
  //  return a+b;
//}
//console.log(CalculateXojiaka(9,7));

// function expression


// arrow function =>

//const CalculateXojiaka1=(a,b)=>
//{
 //   return a+b;
//}

// amal 1ta bolsa => bir qatorda blok sxemasiz yoziladi
//console.log(CalculateXojiaka1(9,8));

// metod -> tayyor funksiya => obyektda,arrayda,stringda =>

  //const hojiaka='Jamiaat!'; // 12 ta belgi bor
  //console.log(hojiaka.length);
 
  // lenght -> metod -> property
  // qiymat 
  // metod  funksiya  () =>argument
  //console.log('Bu harf',hojiaka.charAt(2));
  //console.log(hojiaka[5]);  // property
  //console.log(hojiaka[5]='A');
  //console.log('Harflarni kattalashtrdik',uzbekistan.toUpperCase());
 //console.log('harflarni kichraytirdik',hojiaka.toLowerCase());
//console.log('kesish:',hojiaka.slice(0,-5));// -minus son 
 //=> metod faqat return qiymat qaytaradi
 //console.log('toza kesish',hojiaka.substring(0,-5));

//  slice=> substring
// console.log(hojiaka);

// function powerOfFive(a) {
//   return Math.pow(a, 5);
// }

// Misol uchun a = 2 deb olaylik
//let a = 3;
//console.log(`${a} ning 5-darajasi:`, powerOfFive(a));

//function addNumbers(a, b) {
  //return a + b; // a va b ning yig‘indisini qaytaradi
//}

//let result = addNumbers(5, 3); // 5 + 3 = 8
//console.log(result); // 8 chiqadi

//let word = "ONA"; // Asl matn
//let arr = word.split(""); // Harflarni massivga aylantiramiz
//arr[1] = "T"; // 1-indexdagi "N" ni "T" ga almashtiramiz
//word = arr.join(""); // Massivni qayta stringga aylantiramiz

//console.log(word); // "OTA" chiqadi

//let text = "andijon vil";

//let upperText = text.toUpperCase(); // Hammasini katta harfga o‘zgartirish
//console.log(upperText); // "ANDIJON VIL"

// let lowerText = text.toLowerCase(); // Hammasini kichik harfga o‘zgartirish
// console.log(lowerText); // "andijon vil"

// let text = "XUJAABAD";
// let result = text.slice(1, 4); // 1-indexdan 4-indexgacha bo'lgan qismini olamiz

// console.log(result); // "UJA"

//silce -> substring


const Password='     ozbekiston';
// trim
console.log(Password);
console.log(Password.trim());
console.log(Password.trimStart());
// trimSart- oldidagi space chopadi
console.log(Password.trimEnd());
// trim methoddi bizga ortiqcha spacelarni qirqish uchun ishlatamiz

// trimdi bizga ortiqcha spacelarni qirqish uchun ishlatamiz

const son=13.4;
console.log(son);
