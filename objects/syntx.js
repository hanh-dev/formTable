//Object được dùng đẻ lưu trữ các cặp key-value và cho phép nhóm các giá trị liên quan đến nhau
let person = {
    name: "Hanh",
    age: 18,
    job: "developer"
}
//Truy cập để láy thuộc tính của đối tượng
//c1. sử dụng dấu .
console.log(person.name)
//c2. sử dụng dấu ngoặc vuông
console.log(person["name"])
console.log("Viet Nam Toi")
//Thay đổi giá trị thuộc tính
person.name = "John";
console.log(person)
//Thêm thuộc tính
person.school = "PNV";
console.log(person)
//Xóa thuộc tính
delete person.school;
console.log(person)


//Các phương thức quan trọng với đối tượng
//1. Object.keys()-> Trả về một mảng chứa tất cả các key của đối tượng
console.log(Object.keys(person))
//2. Object.values(item)-> Trả về một mảng chứa các values
console.log(Object.values(person))
//3. Object.entries(item) -> Trả về một mảng cặp [key, value]
console.log(Object.entries(person))

//Kiểm tra xem một đối tượng có chứa key cụ thể hay không
console.log(person.hasOwnProperty("name"))
console.log(person.hasOwnProperty("home"))


//Thực hành
let student = {
    name: "Ho Hanh",
    age: 18,
    class: "PNV26B"
}
console.log(student)
student.school = "PNV";
console.log(student)
student.age = 12;
console.log(student)
delete student.age;
console.log(student)
//Sử dụng các phương thức
console.log(Object.keys(student))
console.log(Object.values(student))

