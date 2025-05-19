let a = 10;
let b = 20;
let c;
let d;
let e;

// a : 10 ; b : 20
console.log(`a : ${a} ; b : ${b}`);

// c = a + b => c : 30
c = a + b;
console.log(`c = a + b => c : ${c}`);

// d = b % 2 => d : 0 ; e = b % 3 => e : 2
d = b % 2;
e = b % 3;
console.log(`d = b % 2 => d:${d};e = b % 3 => e:${e}`);

// a += b => a = a + b => a : 30
a += b;
console.log(`a += b => a = a + b => a : ${a}`);

// b++ => b : 21
b++;
console.log(`b++ => b : ${b}`);

// a == 30 : true
console.log(`a == 30 : ${a == 30}`);

// a === 30 : true
console.log(`a === 30 : ${a === 30}`);

// a == '30' : true
console.log(`a == '30' : ${a == "30"}`);

// a === '30' : false
console.log(`a === '30' : ${a === "30"}`);

// a == c : true
console.log(`a == c : ${a == c}`);

// a == 30 && b == 21 : true
console.log(`a == 30 && b == 21 : ${a == 30 && b == 21}`);

// a == 30 && b == 20 : true
console.log(`a == 30 && b == 20 : ${a == 30 && b == 20}`);

// a == 30 || b == 20 : true
console.log(`a == 30 || b == 20 : ${a == 30 || b == 20}`);
