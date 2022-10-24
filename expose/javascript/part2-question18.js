function myFunc() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}

setInterval(myFunc, 1000);