let fruits = ["Apple", "Banana", "Orange"]
console.log(fruits[0])
console.log(fruits.length)
// Method of array
// push(): Thêm một hay nhiều phần tử vào cuối mạng
fruits.push("Mango")
console.log(fruits.length)
// pop(): Loại bỏ phần tử cuối của mạng
fruits.pop();
console.log(fruits.length)
//shift(): Xóa phần tử đầu của mạng
console.log(fruits)
fruits.shift();
console.log(fruits)
//unshift(): Thềm vào phần tử đầu của mạng
fruits.unshift("Lemon")
console.log(fruits)
let newFruits = fruits.slice(0,1)
console.log(newFruits)
let numbers = [1,3,6]
console.log(numbers)
numbers.splice(1,1,5)
console.log(numbers)
let numberNews = [1, 2, 3, 4, 5]
console.log(numberNews)
console.log(numberNews.push(6))
console.log(numberNews)
numberNews.shift()
console.log(numberNews)
let second = numberNews.splice(1,3)
console.log(second)

