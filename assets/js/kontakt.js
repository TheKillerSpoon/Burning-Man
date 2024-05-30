let form = document.querySelector("form");

let nameinput = document.querySelector("#name");
let emailinput = document.querySelector("#email");
let topicinput = document.querySelector("#topic");
let messageinput = document.querySelector("#message");

let validRequrements = [nameinput, emailinput, topicinput, messageinput]

form.addEventListener("submit", (e)=>{
    e.preventDefault();

    
    let isValid = true;
    

    for(index = 0; index < validRequrements.length; index++){
        if(validRequrements[index].value.trim() === ""){
            validRequrements[index].classList.add("missing")
            isValid = false;
        }else{
            validRequrements[index].classList.remove("missing")
        }
    }

    

    if(isValid){
        form.submit();
    }
})