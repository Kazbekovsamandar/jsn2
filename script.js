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


document.getElementById("mySelect").onchange = function() {
  myFunction();
};  

// optionlardi ozgartirish onchangega misol  onchange faqat  

function myFunction() {
  let x = document.getElementById("mySelect").value;
  document.getElementById("demo").innerHTML = "You selected: " + x;
}
//myfunction  optionlardi almashtirish uchun

//

document.getElementById("myInput").onchange = function() {
  inputFunction();
};

function inputFunction() {
    let inputVal = document.getElementById("myInput").value;
    document.getElementById("inputDemo").innerHTML = "You entered: " + inputVal;

}