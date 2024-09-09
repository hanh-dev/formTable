
const semester1 = document.getElementById('s1')
const semester2 = document.getElementById('s2')
const year = document.getElementById('years')
const sumarise = document.getElementById('sumarise')
const check = document.getElementById('check')
const resetAll = document.getElementById('resetAll')
const textResult = document.getElementById('display'); // Biến để có thể lấy kết quả là danh hiệu gì
let result = 0;
check.onclick = function(){
    if(semester1.value.trim()!==''|| semester2.value.trim()!==''){
        //chuyển giá trị chuỗi sang số
        const value = parseInt(year.value);
        const s1 = parseFloat(semester1.value);
        const s2 = parseFloat(semester2.value);
        //Kiểm tra điều kiện
        if(value === 1){
            result = (s1+s2)/2
        }else if(value === 2){
            result = (s1+s2*2)/3
        }else{
            result = (s1+s2*3)/4
        }
        sumarise.value = result.toFixed(2);
        if(result>=9){
            textResult.style.color = 'green'
            return textResult.textContent = 'Học sinh ngoan thôi nhé'
        }else{
            textResult.style.color = 'red'
            return textResult.textContent = 'Về học bài ngay!!'
        }
    }else{
        alert('Vui lòng điền đầy đủ vô')
    }
}
resetAll.addEventListener('click', function(){
    semester1.value = '';
    semester2.value = '';
    sumarise.value = '';
    textResult.textContent = '';
})
