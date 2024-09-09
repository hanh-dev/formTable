//JSON: JavaScript Object Notation-> Lưu trữ và trao đổi dữ liệu
//Chủ yếu được sử dụng để truyền dữ liệu giữa Client và Server(API)
let person = {
    name: "Ho",
    age: 12,
    year: 2006,
    address:{
        provice: "Quang Tri",
        City: "Đà Nẵng"
    }
}
let jsonFirst = JSON.stringify(person)
console.log(jsonFirst)


//Phương thức để có thể làm việc với JSON
//1. JSON.stringìy(): Chuyển đổi một đối tượng JavaScript thành chuỗi JSON
//2. JSON.parse(): Chuyển đối chuỗi JSON thành chuỗi JavaScript
