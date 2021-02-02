var info1 = {
    title: "sun",
    link:"https://www.jd.com",
    go:function(){
        console.log("snsm");
    }
}


//es6
    let title = "sun";
    let link = "https://www.jd.com";
var info2 = {
    title,
    link,
    go(){
        console.log("snsm");
    }
}

console.log(info1);
console.log(info2);
