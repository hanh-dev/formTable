//DOM: Document Object Model->
//Các phương thức của DOM
//1. getElementById
document.getElementById("changeTitle").addEventListener('click',function(){
    document.getElementById("title").textContent = "Title Change"
})

document.getElementById("changeNumbers").addEventListener("click",function(){
    document.getElementById("number").textContent = "Đã chuyển thành công"
})

document.getElementById("chuyenMau").addEventListener('click',function(){
    const textElement = document.getElementById("hcn")
    // kiem tra dieu kien
    if(textElement.style.color == "red"){
        textElement.style.color = "blue"
        textElement.style.fontSize = "34px"
        textElement.style.backgroundColor = "orange"
        textElement.textContent = "Đã chuyển màu"   
    }else{
        textElement.style.color = "red"
    }
})

//Thêm, xóa phần tử
document.getElementById("addItem").addEventListener('click',function(){
    const change = document.getElementById("menu")
    const newItem = document.createElement("li")
    newItem.textContent = "New Item"
    change.appendChild(newItem)
})
//ví dụ 2
// document.getElementById("addFashion").addEventListener("click",function(){
//     const mainFashion = document.getElementById("fashion")
//     const newFashion = document.createElement("li")
//     newFashion.textContent = "New Fashion"
//     mainFashion.appendChild(newFashion)
// })
document.getElementById("alertMe").addEventListener('click',function(){
    alert("Hello moij nguwoif")
})
document.getElementById('addFashion').addEventListener('click', function(){
    const main = document.getElementById('fashion')
    const add = document.createElement('li')
    add.textContent = 'Add new'
    main.appendChild(add)
})
