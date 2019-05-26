function displayTime() {


    var time = new Date(),
        hours = time.getHours(),
        minutes = time.getMinutes(),
        months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    var suffix = "AM";

    if (hours >= 12) {
        suffix = "PM";
        hours = hours - 12;
    }

    if (hours == 0) {
        hours = 12;
    }
    document.getElementById('displayTime').innerHTML = hours + ":" + minutes;
    document.getElementById('suffix').innerHTML = suffix;
    document.getElementById('displayDate').innerHTML = months[time.getMonth()] + " " + time.getDate() + ", " + time.getFullYear();

}
setInterval(displayTime, 1000);

function closeButton(){
    // document.getElementById('close').onclick = function(){
    //     this.parentNode.parentNode
    //     .removeChild(this.parentNode);
    //     return false;
    // };
    var close = document.getElementById("linkMessage");
    close.parentNode.removeChild(close);
}

