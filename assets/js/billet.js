let plusMinus = document.querySelectorAll("i");

let heldags = 0;
let uge = 0;
let vip = 0;

for(index = 0; index < plusMinus.length; index++){{
    plusMinus[index].addEventListener("click", (e)=>{
        let parent = e.target.parentElement;
        let antal = parent.parentElement.childNodes[3].childNodes[0];
        if(parent.classList.value === "plus"){
           if(parent.parentElement.classList.value === "vip"){
            vip++;
            antal.innerText = vip;
           }else if(parent.parentElement.classList.value === "uge"){
            uge++;
            antal.innerText = uge;
           }else{
            heldags++;
            antal.innerText = heldags;
           }
        }else if(antal.innerText > 0){
            if(parent.parentElement.classList.value === "vip"){
             vip--;
             antal.innerText = vip;
            }else if(parent.parentElement.classList.value === "uge"){
             uge--;
             antal.innerText = uge;
            }else{
             heldags--;
             antal.innerText = heldags;
            }
         }
    })
}}



    
