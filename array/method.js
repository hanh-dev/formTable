// Filter-> Lọc dữ liệu
// Find-> Lọc dữ liệu
// Sự khác nhau giữa filter và find
// Find sau khi tìm thấy một cái điều kiện phù hợp thì nó sẽ lấy và kết thúc luôn
//Filter sẽ trả ra một cái array-> Cứ cái nào thỏa mãn điều kiện thì được lưu hết
const users = [
    {
        id: 7,
        email: 'hovanhanh@gmail',
        class: 'PNV26B',
    },
    {
        id: 8,
        email: 'hieu@gmail',
        class: 'PNV26A',
    },
    {
        id: 12,
        email: 'huu@gmail',
        class: 'PNV26A',
    },
    {
        id: 9,
        email: 'nam@gmail',
        class: 'PNV26B',
    }
];
//Filter
users.filter((user)=>{
    console.log(user.id)
})
const filterUser = users.filter((user)=>{
    return user.id === 7 || user.id ===8;
})
console.log(filterUser)
//Find
const findUser = users.find(user=>{
    return user.id === 7 || user.id === 8;
})
console.log(findUser)
//map -> Dùng để chỉnh sửa(custom)
const lengthArr =[1, 4, 8]
let areaArr = []
for(let i = 0; i<lengthArr.length; i++){
    areaArr.push(lengthArr[i]*lengthArr[i])
}
console.log(lengthArr)
console.log(areaArr)

const lengthArrNew = [1, 4, 8]
const areaArrNew = lengthArrNew.map(length=>length*length)
console.log(areaArrNew)
