(function (){
    "use strict";
    console.log("reading js");

    const myForm = document.querySelector("#madlib");
    const overlay = document.querySelector("#overlay")
    const userOut = document.querySelectorAll("userOut");
    const friendOut = document.querySelectorAll("friendOut");
    const genderOut = document.querySelector("#genderOut");
    const verbOut = document.querySelector("#verbOut");
    const celebrityOut = document.querySelector("#celebrityOut");
    const emojiOut = document.querySelector("#emojiOut");

    const open = document.querySelector(".box");

    const phone = document.querySelector(".phone");
    const close = document.querySelector("#x");
    const refresh = document.querySelector(".fa");

    myForm.addEventListener('submit', function(event){
        event.preventDefault();
        const userName = document.querySelector("#username").value;
        const friendName = document.querySelector("#friend").value;
        const aGender = document.querySelector("#gender").value;
        const noun = document.querySelector("noun").value;
        const verb = document.querySelector("#verb").value;
        const emoji = document.querySelector("#emoji").value;
        const celebrity = document.querySelector("#celebrity").value;
        console.log(userName + friendName + aGender + noun +verb+emoji+celebrity);

        for(let i=0; i< userOut.length; i++){
            userOut[i].innerHTML = userName;
        }
        
        for(let i=0; i<friendOut.length; i++){
            friendOut[i].innerHTML = friendName;
        }
        
        genderOut.innerHTML = aGender;
        verbOut.innerHTML = verb;
        celebrityOut.innerHTML = celebrity;
        emojiOut.innerHTML = emoji;
        //add the overlay
        overlay.classList.remove("hidden");
        myForm.classList.add("hidden");
        refresh.classList.remove("hidden");

    })

    open.addEventListener("click", function(e){
        e.preventDefault();
        const noun = document.querySelector("#noun").value;
        if(noun == "chair"){
            console.log("here");
            phone.classList.add("chair");
            overlay.classList.add("hidden");
            myForm.classList.add("hidden");
            close.classList.remove("hidden");
        }
        else if(noun == "gumball"){
            phone.classList.add("gumball");
            overlay.classList.add("hidden");
            myForm.classList.add("hidden");
            close.classList.remove("hidden");
        }
        else if(noun == "balloon"){
            phone.classList.add("balloon");
            overlay.classList.add("hidden");
            myForm.classList.add("hidden");
            close.classList.remove("hidden");
        }
    })

    close.addEventListener("click", function(e){
        e.preventDefault();
        phone.classList.remove("chair");
        phone.classList.remove("balloon");
        phone.classList.remove("gumball");
        overlay.classList.remove("hidden");
        close.classList.add("hidden");
    })

    refresh.addEventListener("click", function(e){
        overlay.classList.add("hidden");
        myForm.reset();
        myForm.classList.remove("hidden");
        refresh.classList.add("hidden");
    })

})();
