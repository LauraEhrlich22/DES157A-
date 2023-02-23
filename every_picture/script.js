(function(){
    'use strict';
    console.log('reading js');

    const start_button = document.querySelector(".first-button");
    const tv = document.querySelector(".tv");
    const intro = document.querySelector(".intro");
    tv.classList.remove("zoom");
    intro.classList.remove("hide");

    
    start_button.addEventListener("click", function(event){
        event.preventDefault();
        console.log("here");
        tv.classList.add("zoom");
        start_button.classList.add("hide");
        intro.classList.add("hide");
    })
  
})();