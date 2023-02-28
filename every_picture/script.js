(function(){
    'use strict';
    console.log('reading js');

    //creating varaibles from classes and IDs
    const start_button = document.querySelector(".first-button");
    const tv = document.querySelector(".tv");
    const intro = document.querySelector(".intro");
    const arrow = document.querySelector(".arrow");
    const imgstatic = document.querySelector(".first-example");
    const sidebar = document.querySelector(".sidebar");
    const sidebar2 = document.querySelector("#s2");
    const normalVis = document.querySelector(".normal-vision-button");
    const clearImg = document.querySelector(".first-example2");
    const floaters = document.querySelector(".floaters");
    const afterImageBase = document.querySelector(".after-image-base");
    const section3 = document.querySelector("#s3");
    const halo = document.querySelector(".halo");
    const after = document.querySelector(".after-image");

    //making sure the correct elements are showing and hidden at start
    tv.classList.remove("zoom");
    tv.classList.remove("zoom5");
    tv.classList.remove("zoom4");
    tv.classList.remove("zoom3");
    tv.classList.remove("zoom2");
    arrow.classList.remove("hide");
    intro.classList.remove("hide");
  

    //setting up
    start_button.addEventListener("click", function(event){
        event.preventDefault();
        tv.classList.add("zoom");
        start_button.classList.add("hide");
        intro.classList.add("hide");
    })

    //what to do on load
    window.addEventListener('load', function () {
		const posts = document.querySelectorAll('section');
		let postTops = [];
		let pageTop;
		let counter = 1;
		let prevCounter = 1;
		let doneResizing;
        let lastPageTop;

		// new variables for setting scroll direction...
		let exitDirection;
		let enterDirection;
        let scrollingUp = 0;
        let scrollingDown = 0;
        let clicked = 0;
		resetPagePosition();

        //defines what happens at certain breakpoints of the scroll where the if statements define what happens on scroll down and else if on scroll up
		window.addEventListener('scroll', function () {
            //first section zooms in the tv
			pageTop = window.pageYOffset;
            if(lastPageTop > pageTop){
                scrollingDown = 0;
                console.log(`Last page top: ${lastPageTop} pageTop: ${pageTop}`);
            }
            else{
                scrollingDown = 1;
            }
            console.log(`pagetop: ${pageTop} counter: ${counter} postTops[counter]: ${postTops[counter]}`);
			if (pageTop > 10 && scrollingDown == 1) {
                tv.classList.add('zoom');
                console.log("here");
				counter++;
				console.log(`scrolling down ${counter}`);
			} 
            else if(pageTop > 10 && scrollingDown == 0){
                tv.classList.remove('zoom');
            }
            if (pageTop > 30 && scrollingDown == 1) {
                tv.classList.add('zoom2');
				console.log(`scrolling up ${counter}`);
			}
            else if(pageTop > 30 && scrollingDown == 0){
                tv.classList.remove('zoom2');
            }
            if (pageTop > 60 && scrollingDown == 1) {
                tv.classList.add('zoom3');
				console.log(`scrolling up ${counter}`);
			}
            else if(pageTop > 60 && scrollingDown == 0){
                tv.classList.remove('zoom3');
            }
            if (pageTop > 90 && scrollingDown == 1) {
                tv.classList.add('zoom4');
				console.log(`scrolling up ${counter}`);
			}
            else if(pageTop > 90 && scrollingDown == 0){
                tv.classList.remove('zoom4');
            }
            if (pageTop > 120 && scrollingDown == 1) {
                tv.classList.add('zoom5');
				console.log(`scrolling up ${counter}`);
			}
            else if(pageTop > 120 && scrollingDown == 0){
                tv.classList.remove('zoom5');
            }
            //first sidebar
            if(pageTop > 140 && scrollingDown == 1){
                console.log("animation");
                tv.style.opacity = 0;
                arrow.classList.add("hide");
                imgstatic.classList.remove("hide-image");
                normalVis.classList.remove("hide-image");
                // imgstatic.style.position = "fixed";
                normalVis.addEventListener("click", function(){
                    if(clicked == 0){
                        clicked = 1;
                        imgstatic.classList.add("hide-image");
                        clearImg.classList.remove("click-hide-image");
                        normalVis.innerHTML = "back to VSS";
                    }
                    else if(clicked == 1){
                        clicked = 0;
                        normalVis.innerHTML = "See Normal Vision";
                        imgstatic.classList.remove("hide-image");
                        clearImg.classList.add("click-hide-image");
                    }
                    
                })
            }
            else if(pageTop > 140 && scrollingDown == 0){
                tv.style.opacity = 100; 
                arrow.classList.remove("hide");
                imgstatic.classList.add("hide-image");
                normalVis.classList.add("hide-image");
                // sidebar.classList.add("hide-image");
            }
            if(pageTop > 180 && scrollingDown == 1){
                sidebar.classList.remove("hide-image");
                
            }
            else if(pageTop > 180 && scrollingDown == 0){
                sidebar.classList.add("hide-image");
            }

            //second sidebar
            if (pageTop > 400 && scrollingDown == 1){
                // sidebar.style.position = "absolute";
                sidebar2.classList.remove("hide-image");
                floaters.classList.remove("hide-image");
                // sidebar2.style.opacity = "0";
            }
            else if(pageTop > 400 && scrollingDown == 0){
                sidebar2.classList.add("hide-image");
                floaters.classList.add("hide-image");
            }
            //moving to afterimages section
            if(pageTop > 600 && scrollingDown == 1){
                sidebar.style.position = "absolute";
                imgstatic.style.position = "absolute";
                sidebar2.style.position = "absolute";
                normalVis.style.position = "absolute";
                floaters.style.position = "absolute";
            }
            else if(pageTop > 600 && scrollingDown == 0){
                sidebar.style.position = "fixed";
                imgstatic.style.position = "fixed";
                sidebar2.style.position = "fixed";
                normalVis.style.position = "fixed";
                floaters.style.position = "fixed";
                
            }
            //attempt failed at adding in a mouseover to add halo effect (not enough time to fix)
            if(pageTop > 700 && scrollingDown == 1){
                afterImageBase.classList.remove("hide-image");
                section3.classList.remove("hide-image");
                section3.addEventListener("mouseover", function(){
                    halo.classList.remove("hide-image");
                    // section3.classList.add("hide-image");
                })
                halo.classList.add("hide-image");
             
            }

            else if(pageTop > 700 && scrollingDown == 0){
                afterImageBase.classList.add("hide-image");
                section3.classList.add("hide-image");
            }
            //moving the original image to show the after-image
            if(pageTop > 900 && scrollingDown == 1){
                afterImageBase.style.right = "100vw";
                after.classList.remove("hide-image");
            }
            else if(pageTop > 900 && scrollingDown == 0){
                afterImageBase.style.right = "10vw";
                after.classList.add("hide-image");
            }
            //end in black screen
            if(pageTop > 1100){
                afterImageBase.style.position = "absolute";
                after.style.position = "absolute";
                section3.style.position = "absolute";
            }
            lastPageTop = pageTop;
            
        })
  

    function resetPagePosition() {
        postTops = [];
        posts.forEach(function (post) {
            postTops.push(Math.floor(post.getBoundingClientRect().top) + window.pageYOffset);
        });

        const pagePosition = window.pageYOffset + 300;
        counter = 0;

        postTops.forEach(function (post) { if (pagePosition > post) { counter++; } });

    }

    }); // end window load function

})();