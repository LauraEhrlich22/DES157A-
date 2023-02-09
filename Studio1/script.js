(function (){
    "use strict";
    console.log("reading js");

    const myForm = document.querySelector("#madlib");
    const overlay = document.querySelector("#overlay")
    const userOut = document.querySelectorAll("#userOut");
    const friendOut = document.querySelectorAll("#friendOut");
    const genderOut = document.querySelector("#genderOut");
    const verbOut = document.querySelector("#verbOut");
    const celebrityOut = document.querySelector("#celebrityOut")
    const emojiOut = document.querySelector("#emojiOut")

    myForm.addEventListener('submit', function(event){
        event.preventDefault();
        const userName = document.querySelector("#username").value;
        const friendName = document.querySelector("#friend").value;
        const aGender = document.querySelector("#gender").value;
        const noun = document.querySelector("#noun").value;
        const verb = document.querySelector("#verb").value;
        const emoji = document.querySelector("#emoji").value;
        const celebrity = document.querySelector("#celebrity").value;
        console.log(userName + friendName + aGender + noun +verb+emoji+celebrity);
        
        // + aGender + noun + verb + emoji + celebrity);

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

    })
})();