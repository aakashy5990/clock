let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");
let day = document.getElementById("days");
let month = document.getElementById("months");
let year = document.getElementById("years");
setInterval(()=>{
    let currentTime = new Date();
    // console.log(currentTime.getHours());
    
    hrs.innerHTML = (currentTime.getHours()<10?"0":"") + currentTime.getHours();
    min.innerHTML = (currentTime.getMinutes()<10?"0":"") + currentTime.getMinutes();
    sec.innerHTML = (currentTime.getSeconds()<10?"0":"") + currentTime.getSeconds();
    day.innerHTML = (currentTime.getDate()<10?"0":"") + currentTime.getDate() + "-";
    month.innerHTML = (currentTime.getMonth()<10?"0":"") + currentTime.getMonth() + "-";
    year.innerHTML = (currentTime.getFullYear()<10?"0":"") + currentTime.getFullYear();
},1000)



