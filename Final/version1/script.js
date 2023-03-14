(function(){
    "use strict";
    console.log("reading.js");

    var page1 = document.querySelector(".page1");
    var page2 = document.querySelector(".page2");
    var start = document.querySelector(".start");
    page1.classList.remove("hide");
    
    start.addEventListener("click", function(){
        page2.classList.remove("hide");
        page1.classList.add("hide");
    })
})();