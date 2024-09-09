document.getElementById('thaydoi').addEventListener('click',function(){
    const newPara = document.getElementById('para')
    newPara.textContent = 'Nội dung đã thay đổi'
})
//bài 2:
const list = document.getElementById('myList')
const inputValue = document.getElementById('inputItem')
const addItem = document.getElementById('select')
const removeAll = document.getElementById('remove')
// Tinh năng thêm phân tử
addItem.addEventListener('click',function(){
    //Thêm các phần tử mới cho danh sách
    if (inputValue.value.trim() !==''){
        const newItem = document.createElement('li')
        newItem.textContent = inputValue.value
        //Thêm nút xóa sau các phần tử mới đã tạo thành
        const addButton = document.createElement('button')
        addButton.textContent = 'Xóa'
        addButton.style.marginLeft = '20px' // Cách Item một khoảng về phía bên trái
        //Tính năng xóa phần tử
        addButton.addEventListener('click',function(){
            list.removeChild(newItem)
        })
        newItem.appendChild(addButton)
        list.appendChild(newItem)
        inputValue.value = '' // Xóa nội dung ô input mỗi khi thêm phần tử xong
        //Xóa hết tất cả các sản phẩm
        removeAll.addEventListener('click',function(){
            list.innerHTML = ''
        })
    }else{
        alert('Đã thêm thất bại')
    }
})
// Hiển thị và ẩn văn bản
// Cách 1:
// const showContent = document.getElementById('showContent')
// const contentDiv = document.getElementById('contentDiv')
// const hideContent = document.getElementById('hideContent')
// showContent.onclick = function(){
//     contentDiv.style.display = 'block'
// }
// hideContent.onclick = function(){
//     contentDiv.style.display = 'none'
// }
//Cách 2:
const showContent = document.getElementById('showContent')
const contentDiv = document.getElementById('contentDiv')
const hideContent = document.getElementById('hideContent')
showContent.addEventListener('click',function(){
    contentDiv.style.display = 'block'
})
hideContent.addEventListener('click', function(){
    contentDiv.style.display = 'none'
})
// Đếm số lần click
const justClick = document.getElementById('justClick')
const times = document.getElementById('showTiems')
var read = 0
justClick.addEventListener('click', function(){
    read+=1
    document.getElementById('showTimes').innerHTML = read;
})
//Hiển thị thông báo
const notify = document.getElementById('notify')
notify.onclick = function(){
    alert('Xin chảo')
}
//Chỉnh sửa trực tiếp nội dung
