// * Exercise
// ? Create an array that contain 4 foods that you like. Then complete these following tasks.

// ? 1. Locate your most favorite food in the array. Print its array index to the console.
// ? 2. Add your 3 favorite desserts or fruits into that array. Print the result to the console.

// ? CHALLENGES: Look at the Array methods slide. Pick one method to check if your most favorite food is existed in the array or not? (hint: return as boolean)

/*1.indexOf()
สำหรับ indexOf ก็จะมีหน้าที่คล้ายกับของ findIndex อีกเหมือนกัน 
โดยค่าที่ return จาก indexOf นั้นจะเป็น เลข index ของ array แรกที่เจอเหมือนกัน 
แต่สิ่งที่แตกต่างคือ argument แรกที่รับเข้ามาใน indexOf นั้นไม่ใช่ testing function 
แต่ว่าจะเป็น ค่าที่เราต้องการจะหาเลย ซึ่งถ้าไม่เจอก็จะ return ค่าออกมาเป็น -1 
แบบเดียวกับ findIndex*/

const favoriteFood = ["FireMeat", "Salmon", "Fire rice", "ramen"];
console.log(favoriteFood.indexOf("Salmon"));

//2.
favoriteFood.push("Cake", "Pingsu", "ice cream");
console.log(favoriteFood);

/*3.includes จะเป็นการเช็คว่า array นั้นมีค่าที่เราต้องการจะค้นหาอยู่หรือไม่
แต่สิ่งที่แตกต่างจาก function อย่าง find, findIndex และ indexOf ข้างต้น
ก็คือ ค่าที่ return ออกมาเป็น true หรือ false*/
const MostfavoriteFood = favoriteFood.includes("Salmon");
console.log(MostfavoriteFood);
