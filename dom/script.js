var hd= document.getElementById("head1")
hd.style.color="blue"
// hd.innerText="text changed"
hd.innerHTML='<p>changed into p tag</p>'
// using class name

var list=document.getElementsByClassName("list");
for(let i=0;i<list.length;i++){
    list[i].style.color="red"
}

// using tag name
var tag1=document.getElementsByTagName("li");
tag1[2].style.backgroungColor="yellow";
// using query selector
var inp =document.querySelector("input");
inp.placeholder="pling!!"
//query selector using class name
var qclss=document.querySelector(".qclass");
qclss.style.backgroungColor="green"
// query selector using id
var btn=document.querySelector("#login");
btn.textContent="changed"
