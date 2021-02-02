var info1 = {
    title: "sun",
    link:"https://www.jd.com",
    go:function(){
        console.log("snsm");
    }
}

var {title,link} = info1;

console.log(title,link);


//对象传播操作符
var {...infor2} = info1;
console.log(infor2);
