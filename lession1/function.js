function myFunction(){
    var number = parseInt(document.getElementById("day").value);
    var display;
    switch(number){
        case 1:
            display = "Monday";
            break;
        case 2:
            display = "Tuesday";
            break;
        case 3:
            display = "Wednesday";
            break;
        case 4:
            display = "Thursday";
            break;
        case 5:
            display = "Friday";
            break;
        case 6:
            display = "Saturday";
            break;
        case 7:
            display = "Sunday";
            break;
        default:
            display = "Not suitable"
    }
    document.getElementById("demo").innerHTML = display;
}