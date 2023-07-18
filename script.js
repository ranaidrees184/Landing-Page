// let price= document.querySelector("#price");
// let items =document.querySelector("#items");
// let items=document.getElementById("items");
let price= document.querySelector("#price");
let items =document.querySelector("#items");
let caretup=document.querySelector("#caretup");
let caretdown=document.querySelector("#caretdown");
let mainimg=document.getElementById("img1");
let img2=document.getElementsByClassName("downimg");
// let img3=document.getElementById("img3");
// let img4=document.getElementById("img4");
// let img5=document.getElementById("img5");
// let img6=document.getElementById("img6");
for(i=0;i<img2.length;i++)
{
    img2[i].addEventListener("click",change,img2[i])
}

let X=1;

// images.forEach(img2.addEventListener("click",change));
// img2.addEventListener("click",change,img2);
// img3.addEventListener("click",change,img3);
// img4.addEventListener("click",change,img4);
// img5.addEventListener("click",change,img5);
// img6.addEventListener("click",change,img6);
// img2.addEventListener("click",change,img2);
function change(image)
{
    console.log("we aRE IN CHANGE FUNCTION");
    mainimg.src=this.src;
}


calculateprice();

function calculateprice()
{
    // price=Number(price);
    // items=Number(items);
    let totalprice=250;
    totalprice= totalprice*X;
    totalprice=Number(totalprice);
    price.textContent=`Total Price: $${totalprice}`;
    // console.log(totalprice);
}

caretup.addEventListener("click",increase);

function increase()
{
    X=X+1;
    // items=Number(items);
    // console.log(X);
    items.textContent=`${X}`;
    calculateprice();
}
caretdown.addEventListener("click",decrease);

function decrease()
{
    X=X-1;
    // items=Number(items);
    // console.log(X);
    items.textContent=`${X}`;
    calculateprice();
}


