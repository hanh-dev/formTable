
const semester1 = document.getElementById('s1')
const semester2 = document.getElementById('s2')
const year = document.getElementById('years')
const sumarise = document.getElementById('sumarise')
const check = document.getElementById('check')
const resetAll = document.getElementById('resetAll')
check.onclick = function(){
    if(semester1.value.trim()!==''|| semester2.value.trim()!==''){
        //chuyển giá trị chuỗi sang số
        const value = parseInt(year.value,10);
        const s1 = parseFloat(semester1.value);
        const s2 = parseFloat(semester2.value);
        let result = 0;
        //Kiểm tra điều kiện
        if(value === 1){
            result = (s1+s2)/2
        }else if(value === 2){
            result = (s1+s2*2)/3
        }else{
            result = (s1+s2*3)/4
        }
        sumarise.value = result;
    }else{
        alert('Vui lòng điền đầy đủ vô')
    }
}
resetAll.addEventListener('click', function(){
    semester1.value = '';
    semester2.value = '';
    sumarise.value = '';
    year.value = '1';
})
