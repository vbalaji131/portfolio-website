function update() {
let dateTime = new Date();
let day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let hr = dateTime.getHours();
let sec = dateTime.getSeconds();

if(hr < 12){
    document.querySelector(".shift").innerHTML ="AM";
}else{
    document.querySelector(".shift").innerHTML ="PM";
    hr = hr % 12;
}

document.querySelector(".time").innerHTML = nF(hr) + ":" + nF(dateTime.getMinutes()) + ":" + nF(dateTime.getSeconds());
document.querySelector(".date").textContent = nF(dateTime.getDate()) + "/" + nF((dateTime.getMonth()+1)) + "/" + dateTime.getFullYear() + " , " + day[dateTime.getDay()];
   
}
setInterval(update, 1000);

function nF(number) {
    let num = ("0" + number).slice(-2);
    return num;
}
