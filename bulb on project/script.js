let bulb= document.querySelector("#bulb")
let btn= document.querySelector("button")
flag=0
btn.addEventListener("click", function(){
    if(flag==0){
        bulb.style.backgroundColor="yellow"
        btn.innerHTML="OFF"
        flag=1
    }
    else{
        bulb.style.backgroundColor="white"
        flag=0
        btn.innerHTML="ON"
    }
})
