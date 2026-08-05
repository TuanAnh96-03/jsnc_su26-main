// console.log("javascript");
// $ PHP
// let

// let name = "tuananh";
// let age = 20;
// let isStudying = true;

// const birtDay = 2006

// console.log(name);

// // kiểu dữ liệu
// let greeting1 = "Hello";
// let greeting2 = "Xin chào";

// // Number
// let age = 20;
// let score = 10;

// // Boolean
// let isStudent = true;
// let isLoggedIn = false;

// console.log(greeting1);
// alert("Xin chào JavaScript");

// const h1 = document.getElementById("title");
// console.log(h1);
// const title = "Laptop-Máy tính"
// h1.innerHTML = `Danh sách ${title}`


let name = "Trần Tuấn Anh";
let age = 20;
let email = "tuananh03122006@gmail.com";
let address = "Hà Nội"

console.log(`
    Tên: ${name}
    Tuổi:${age}
    Email:${email}
    Địa chỉ:${address}
    `);


const student = {
  name: "Trần Tuấn Anh",
  age: 20,
};  

document.getElementById("title").innerHTML = `
<h2>${student.name}</h2>
<p>Tuổi: ${student.age}</p>
`;
