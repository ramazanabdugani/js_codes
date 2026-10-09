console.log("Скрипт успешно установлен!"); alert("Welcome to world JavaScript!");
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

for (let i=10; i>=1; i--) {
    console.log(i)
};

let sum=0;
for (let i=1;i<=100;i++) {
    sum +=i;
}
console.log(sum);

let cities = ["Кентау","Туркестан","Шымкент","Актобе","Алматы"];
console.log("Қалалар:");

for (let i = 0; i < cities.length; i++) {
    console.log(i + 1 + ". " + cities[i]);
}
console.log("for...of арқылы:");

for (let city of cities) {
    console.log(city);
}
console.log("20-ға дейінгі жұп сандар:");

for (let i = 2; i <= 20; i += 2) {
    console.log("*".repeat(i));
};
const nums = [5, 12, 8, 130, 44];
const r = nums
    .map (n => n *2)    
    .filter (n => n > 10);
console.log(r);

console.log (nums.length) ;