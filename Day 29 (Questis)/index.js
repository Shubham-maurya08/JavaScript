function showTime(){
    var date = new Date();
    var hrs = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();

    var time = hrs + ":" + min + ":" + sec + "";
    document.getElementById("MyClockDisplay").innerText = time;

    document.getElementById("MyClockDisplay").textContent = time;

    setTimeout(showTime,1000);
}
showTime();

//Q:2
document.getElementById("print-button").addEventListener("click",function(){
    var dropdown = document.getElementById("dropdown");
    var result = document.getElementById("result");

    result.innerHTML = "Dropdown:" + dropdown.options[dropdown.selectedIndex].text;
});

