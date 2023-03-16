(function(){
    "use strict";
    console.log("reading.js");
    // alert("Hello! Welcome to the game of alien! A couple of tasks for ya: 1. read the instructions and create an avatar for your self. 2. shoot the ball 3. pass the ball");
    var page1 = document.querySelector(".page1");
    var page2 = document.querySelector(".page2");
    var page3 = document.querySelector(".page3");
    var page4 = document.querySelector(".page4");
    var start = document.querySelector(".start");
    var next = document.querySelector(".f1");
    var finish = document.querySelector(".f2");
    var jerseys = document.querySelector(".gamejerseys");
    const buzzer = document.querySelector("#buzzer");
    var startGame = document.getElementById('startgame');
    var gameControl = document.getElementById('gamecontrol');
    var game = document.querySelector("#game");
    var score = document.getElementById('score');
    var actionArea = document.getElementById('actions');
    // var jerseys = document.querySelector(".jerseys");
    // var gamejerseys = document.querySelector(".gamejerseys");
    var winner = document.querySelector(".winner");
    // var p1 = document.querySelector("#p1").value;
    // var p2 = document.querySelector("#p2").value;
    var whistle = document.querySelector("#whistle");
    var ball = document.querySelector("#ball");
    var pass = document.querySelector("#pass");
    const body = document.querySelector("body");
    var count1 = 0;
    var count2 = 0;
    const hoop = document.querySelector(".hoop");
   
    let currPlayer;
    const color1 =document.querySelector(".gjersey1");
    const color2 = document.querySelector(".gjersey2"); 
    const p1 = document.querySelector(".p1");
    const p2 = document.querySelector(".p2");
    let name2 = document.querySelector("#name2").value;
    let c = 0;
    let color_val1 = 0;
    let color_val2 = 0;
    const shoot = document.querySelector(".shoot");
    const pass2 = document.querySelector(".pass");
    
   


    jerseys.classList.remove("hide");

    //all javascript is mostly the same with the exception of added variables for hiding and showing based on click
    

    var gameData = {
        dice: ['1die.png', '2die.png', '3die.png', '4die.png', '5die.png', '6die.png'],
        players: ['player 1', 'player 2'],
        score: [0,0],
        roll: [0,0],
        rolll: 0,
        rollll: 0,
        rollSum: 0,
        index: 0,
        gameEnd: 29
    };

    const a1colors = ['purple1.png', 'lightblue1.png', 'green1.png', 'orange1.png'];
    const a2colors = ['purple2.png', 'orange2.png', 'green2.png', 'lightblue2.png'];
    const hoop_shots = ['make.png', 'missed-shot.png','hoop.png' ];

    let radio1 = document.getElementsByName("color1");
    let radio2 = document.getElementsByName("color2");
    page1.classList.remove("hide");
    
    start.addEventListener("click", function(e){
        console.log("test");
        e.preventDefault();
        page2.classList.remove("hide");
        page1.classList.add("hide");
        whistle.play();
        // page1.remove();
    })

    
    for(let i = 0; i < radio1.length; i++){
        radio1[i].addEventListener("click", function(){
            if(radio1[i].value == "purple"){
                console.log("purple");
                color_val1 = 0;
                // color1.innerHTML = "<img class='gjersey1' id= 'img1' src='purple1.png' alt='alien1'>";
            }
            else if(radio1[i].value == "green"){
                // color1.innerHTML = a1colors[1];
                color_val1 = 2;
                // color1.innerHTML = "<img class='gjersey1' id= 'img1' src='green1.png' alt='alien1'>";
            }
            else if(radio1[i].value == "blue"){
                color_val1 = 1;
                // color1.innerHTML = "<img class='gjersey1' id= 'img1' src='lightblue1.png' alt='alien1'>";
            }
            else if(radio1[i].value == "orange"){
                color_val1 = 3;
            }
        })
    }
    
    for(let i = 0; i < radio2.length; i++){
        radio2[i].addEventListener("click", function(){
            // color2.innerHTML += "<div class='alien-count2'></div>";
            if(radio2[i].value == "purple"){
                console.log("purple");
                color_val2 = 0;
                // color2.innerHTML = "<img class='gjersey2' id= 'img1' src='purple2.png' alt='alien2'>";

            }
            else if(radio2[i].value == "orange"){
                color_val2 = 1;
                // color1.innerHTML = a1colors[1];
                // color2.innerHTML = "<img class='gjersey2' id= 'img1' src='orange2.png' alt='alien2'>";
            }
            else if(radio2[i].value == "green"){
                color_val2 = 2;
                // color2.innerHTML = "<img class='gjersey2' id= 'img1' src='green2.png' alt='alien2'>";
            }
            else if(radio2[i].value == "blue"){
                color_val2 = 3;
                // color2.innerHTML = "<img class='gjersey2' id= 'img1' src='green2.png' alt='alien2'>";
            }
        })
    }
    
    next.addEventListener("submit", function(e){
        e.preventDefault();
        console.log("here");
        page1.classList.add("hide");
        page3.classList.remove("hide");
        const n1 = document.querySelector(".name1").value;

        color1.innerHTML += `<h3 class="s1">0</h3>`;
        color1.innerHTML += "<div class='alien-count1'></div>";
        color1.innerHTML += `<img class='gjersey1' id= 'img1' src=${a1colors[color_val1]} alt='alien1'>`;
        color1.innerHTML += `<h3 class="p1">${n1}</h3>`;
        gameData.players[0] = n1;
        console.log(p1);
        
        page2.remove();
         
        // console.log(`the color is ${c}`);
    })


    finish.addEventListener("submit", function(e){
        e.preventDefault();
       
        page1.remove();
        page4.classList.remove("hide");
        jerseys.classList.remove("hide");
        game.classList.remove("hide");
        actionArea.classList.remove("hide")
        // whistle.play();
       
        gameData.index = Math.round(Math.random());
        console.log(gameData.index);

        const n2 = document.querySelector(".name2").value;
        console.log(n2);
        color2.innerHTML += `<h3 class="s2">0</h3>`;
        color2.innerHTML += "<div class='alien-count2'></div>";
        color2.innerHTML += `<img class='gjersey2' id= 'img1' src=${a2colors[color_val2]} alt='alien1'>`;
        color2.innerHTML += `<h3 class="p2">${n2}</h3>`;
        gameData.players[1] = n2;
        page3.remove();
        

        // gameControl.innerHTML = '<h2 id="quittext"></h2>';
        // gameControl.innerHTML += '<button id ="quit">Quit</button>';
        

        // document.getElementById('quit').addEventListener("click", function(){
        //     location.reload();
        // });
        console.log(setUpTurn());
    })


    function setUpTurn(){
        console.log(`roll count: ${c}`);
        c += 1;
        game.innerHTML = `<p class="roll2">${gameData.players[gameData.index]}, it's your turn to play!</p>`;
        currPlayer = gameData.players[gameData.index];
        // actionArea.innerHTML = '<button class="roll1">Shoot the Ball</button>';
        document.querySelector('.shoot').addEventListener('click', function(){
            console.log("roll");
            pass.play();
            console.log(throwDice());
           
        
        })

    }

    function throwDice(){

        currPlayer = gameData.players[gameData.index];
        actionArea.innerHTML = '';
        gameData.rolll = Math.floor(Math.random()*6)+1;
        gameData.rollll = Math.floor(Math.random() * 6) + 1;
        game.innerHTML = `<p>${gameData.players[gameData.index]}, it's your turn to play!</p>`;
        game.innerHTML += `<img src = "${gameData.dice[gameData.rolll-1]}"><img src = "${gameData.dice[gameData.rollll-1]}">`;
        gameData.rollSum = gameData.rolll + gameData.rollll;
        console.log(`left roll = ${gameData.rolll}`);
        console.log(`right roll = ${gameData.rollll}`);
        console.log(`current player: ${currPlayer}`);

        if(gameData.rollSum === 2){
            console.log("snake eyes were rolled");
            // game.innerHTML += '<p>Oh snap! Snake eyes!</p>';
           
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);
            if(currPlayer == gameData.players[0]){
                console.log("count1 arrived");
                count1 = 5;
                console.log(addAlien());
                console.log(`count1: ${count1}`); 
                console.log(`count2: ${count2}`); 
            }
            if(currPlayer == gameData.players[1]){
                console.log("count2 arrived");
                count2 = 5;
                console.log(addAlien());
                console.log(`count1: ${count1}`); 
                console.log(`count2: ${count2}`); 
            }
            pass.play();
        }

        else if(gameData.rolll === 1 || gameData.rollll === 1){
            hoop.innerHTML = `<img class='mshot' src=${hoop_shots[1]}>`;
            console.log("one of the two dice was a 1");
            game.innerHTML = '<p>One of the balls was a 1. Switching players!</p>';
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);
            // game.innerHTML = `<p>${gameData.players[gameData.index]}, it's your turn to play!</p>`;
            if(currPlayer == gameData.players[0]){
                console.log("count1 arrived");
                count1 +=1;
                console.log(addAlien());
                console.log(`count1: ${count1}`); 
                console.log(`count2: ${count2}`); 
            }
            if(currPlayer == gameData.players[1]){
                console.log("count2 arrived");
                count2 +=1;
                console.log(addAlien());
                console.log(`count1: ${count1}`); 
                console.log(`count2: ${count2}`); 
            }
     
            pass.play();
           
            // game.innerHTML += `<p>Sorry, one of your rolls was one, switching to ${gameData.players[gameData.index]}</p>`;
            // console.log(showCurrentScore());
            // console.log(checkWinningCondition());
        }

        else{
            hoop.innerHTML = `<img class='mshot' src=${hoop_shots[0]}>`;
            // setTimeout(hoop.innerHTML = `<img class='mshot' src=${hoop_shots[2]}>`, 2000);
            // const anim_in = document.querySelector(".mshot");

            // anim_in = made-shot.gif
            
            console.log("the game proceeds");
            // gameData.score[gameData.index] = gameData.score[gameData.index] + gameData.rollSum;
            gameData.score[gameData.index] += gameData.rolll + gameData.rollll;
            console.log(`score1: ${gameData.score[0]}`);
            console.log(`score2: ${gameData.score[1]}`);
            let s1 = document.querySelector(".s1");
            let s2 = document.querySelector(".s2");

            s1.innerHTML = gameData.score[0];
            s2.innerHTML = gameData.score[1];
            // actionArea.innerHTML = '<button id="rollagain">Shoot again</button><button class="pass">Pass</button>';
            document.querySelector(".pass").addEventListener('click', function(){
                gameData.index ? (gameData.index = 0) : (gameData.index = 1);
                currPlayer = gameData.players[gameData.index];
                game.innerHTML = `<p>Turn passed to ${gameData.players[gameData.index]}</p>`;
                hoop.innerHTML = `<img class='mshot' src=${hoop_shots[2]}>`;
                console.log("pass");
                console.log(`${count1}`)
                console.log(`count1: ${count1}`); 
                console.log(`count2: ${count2}`); 
                // pass.play();
                // setTimeout(setUpTurn, 2000);
                // console.log(showCurrentScore());
                // console.log(checkWinningCondition());
                ball.play();
            })

            
            // document.querySelector('.shoot').addEventListener('click', function(){
            //     ball.play();
            // })
            // ole.log(showCurrentScore());
            // console.log(checkWinningCondition());
        }
        // setTimeout(setUpTurn, 2000);
        // anim_in.remove();
        // hoop.innerHTML = `<img class='mshot' src=${hoop_shots[2]}>`;
    }
    
    function addAlien(){
        // console.log(`count1: ${count1}`); 
        let alienCount1 = document.querySelector(".alien-count1");
        if(currPlayer == gameData.players[0]){
            if(count1 === 0){
                alienCount1.innerHTML = "";
            }
            else if(count1 === 1){
                alienCount1.innerHTML = "A";
            }
            else if(count1 === 2){
                alienCount1.innerHTML = "AL";
            }
            else if(count1 === 3){
                alienCount1.innerHTML = "ALI";
            }
            else if(count1 === 4){
                alienCount1.innerHTML = "ALIE";
            }
            else if(count1 === 5){
                alienCount1.innerHTML = "ALIEN";
                winner.innerHTML =  `${currPlayer} wins! `;
                buzzer.play();
                winner.innerHTML += "<button class='gg'>Play Again?</button>"
                hoop.remove();
                shoot.remove();
                pass2.remove();
                const start_over = document.querySelector(".gg");
                start_over.addEventListener("click", function(){
                location.reload();
    })
            }
            
        }
        else if(currPlayer == gameData.players[1]){
            let alienCount2 = document.querySelector(".alien-count2");
            // console.log(`count2: ${count2}`); 
            if(count2 === 0){
                alienCount2.innerHTML = "";
            }
            else if(count2 === 1){
                alienCount2.innerHTML = "A";
            }
            else if(count2 === 2){
                alienCount2.innerHTML = "AL";
            }
            else if(count2 === 3){
                alienCount2.innerHTML = "ALI";
            }
            else if(count2 === 4){
                alienCount2.innerHTML = "ALIE";
                // winner.innerHTML = "Player 2 wins!";
            }
            else if(count2 === 5){
                alienCount2.innerHTML = "ALIEN";
                winner.innerHTML = `${currPlayer} wins! `;
                buzzer.play();
                winner.innerHTML += "<button class='gg'>Play Again?</button>";
                hoop.remove();
                shoot.remove();
                pass2.remove();
                const start_over = document.querySelector(".gg");
                start_over.addEventListener("click", function(){
                location.reload();
    })
            }
        }

    }

    const quit = document.querySelector(".quit");
    quit.addEventListener("click",function(){
        location.reload();
    })

    

})();