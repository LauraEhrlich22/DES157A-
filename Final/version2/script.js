(function(){
    "use strict";
    console.log("reading.js");

    var page1 = document.querySelector(".page1");
    var page2 = document.querySelector(".page2");
    var page3 = document.querySelector(".page3");
    var page4 = document.querySelector(".page4");
    var start = document.querySelector(".start");
    var next = document.querySelector(".f1");
    var finish = document.querySelector(".f2");
    var jerseys = document.querySelector(".gamejerseys");
    
    var startGame = document.getElementById('startgame');
    var gameControl = document.getElementById('gamecontrol');
    var game = document.querySelector("#game");
    var score = document.getElementById('score');
    var actionArea = document.getElementById('actions');
    // var jerseys = document.querySelector(".jerseys");
    // var gamejerseys = document.querySelector(".gamejerseys");
    var s1 = document.querySelector(".s1");
    var s2 = document.querySelector(".s2");
    var winner = document.querySelector(".winner");
    // var p1 = document.querySelector("#p1").value;
    // var p2 = document.querySelector("#p2").value;
    var whistle = document.querySelector("#whistle");
    var ball = document.querySelector("#ball");
    var pass = document.querySelector("#passSound");
    var count1 = 0;
    var count2 = 0;
    let alienCount1 = document.querySelector(".alien-count1");
    let alienCount2 = document.querySelector(".alien-count2");
    let currPlayer;
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

    page1.classList.remove("hide");
    
    start.addEventListener("click", function(e){
        console.log("test");
        e.preventDefault();
        page2.classList.remove("hide");
        page1.classList.add("hide");
        // page1.remove();
    })

    next.addEventListener("submit", function(e){
        e.preventDefault();
        console.log("here");
        page1.classList.add("hide");
        page3.classList.remove("hide");
        page2.remove(); 
    })

    finish.addEventListener("submit", function(e){
        e.preventDefault();
        page3.remove();
        page1.remove();
        page4.classList.remove("hide");
        jerseys.classList.remove("hide");
             game.classList.remove("hide");
        actionArea.classList.remove("hide")
        whistle.play();
       
        gameData.index = Math.round(Math.random());
        console.log(gameData.index);

        // gameControl.innerHTML = '<h2 id="quittext"></h2>';
        // gameControl.innerHTML += '<button id ="quit">Quit</button>';
        

        // document.getElementById('quit').addEventListener("click", function(){
        //     location.reload();
        // });
        console.log(setUpTurn());
    })

    

    // startGame.addEventListener("click", function(){
    //     jerseys.classList.add("hide");
    //     gamejerseys.classList.remove("hide");
    //     game.classList.remove("hide");
    //     actionArea.classList.remove("hide")
    //     whistle.play();
       
    //     gameData.index = Math.round(Math.random());
    //     console.log(gameData.index);

    //     gameControl.innerHTML = '<h2 id="quittext"></h2>';
    //     gameControl.innerHTML += '<button id ="quit">Quit</button>';
        

    //     document.getElementById('quit').addEventListener("click", function(){
    //         location.reload();
    //     });
    //     console.log(setUpTurn());
    // });

    function setUpTurn(){
        game.innerHTML = `<p class="roll2">Roll the dice for the ${gameData.players[gameData.index]}</p>`;
        currPlayer = gameData.players[gameData.index];
        // actionArea.innerHTML = '<button class="roll1">Shoot the Ball</button>';
        document.querySelector('.shoot').addEventListener('click', function(){
            console.log(addAlien());
            console.log(throwDice());
        })

    }

    function throwDice(){

        // console.log(checkWinningCondition());
        actionArea.innerHTML = '';
        gameData.rolll = Math.floor(Math.random()*6)+1;
        gameData.rollll = Math.floor(Math.random() * 6) + 1;
        game.innerHTML = `<p>Roll the dice for the ${gameData.players[gameData.index]}</p>`;
        game.innerHTML += `<img src = "${gameData.dice[gameData.rolll-1]}"><img src = "${gameData.dice[gameData.rollll-1]}">`;
        gameData.rollSum = gameData.rolll + gameData.rollll;

        if(gameData.rollSum === 2){
            console.log("snake eyes were rolled");
            game.innerHTML += '<p>Oh snap! Snake eyes!</p>';
            gameData.score[gameData.index] = 0;
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);
            setTimeout(setUpTurn, 2000);
            // if(currPlayer = "player 1"){
            //     count1 +=1;
            // }
            // console.log(showCurrentScore());
            // console.log(checkWinningCondition());
        }

        else if(gameData.rolll === 1 || gameData.rollll === 1){
            console.log("one of the two dice was a 1");
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);
            if(currPlayer == "player 1"){
                count1 +=1;
            }
            if(currPlayer == "player 2"){
                count2 +=1;
            }
            // game.innerHTML += `<p>Sorry, one of your rolls was one, switching to ${gameData.players[gameData.index]}</p>`;
            setTimeout(setUpTurn, 2000);
            // console.log(showCurrentScore());
            // console.log(checkWinningCondition());
        }

        else{
            console.log("the game proceeds");
            gameData.score[gameData.index] = gameData.score[gameData.index] + gameData.rollSum;
            actionArea.innerHTML = '<button id="rollagain">Shoot again</button><button class="pass">Pass</button>';
            document.querySelector(".pass").addEventListener('click', function(){
                gameData.index ? (gameData.index = 0) : (gameData.index = 1);
                console.log("here");
                setUpTurn();
                console.log(`${count1}`)
                // pass.play();
                // console.log(showCurrentScore());
                // console.log(checkWinningCondition());
            })

            document.getElementById('rollagain').addEventListener('click', function(){
                setUpTurn();
                ball.play();
            })
            // ole.log(showCurrentScore());
            // console.log(checkWinningCondition());
        }

        // function checkWinningCondition(){
        //     if(gameData.score[gameData.index] > gameData.gameEnd){
        //         s1.innerHTML = `${gameData.score[0]}`;
        //         winner.innerHTML = `<h2>${gameData.players[gameData.index]} wins with ${gameData.score[gameData.index]} points!</h2>`;

        //         actionArea.innerHTML = '';
        //         document.getElementById('quit').innerHTML = "Start a New Game?";
        //         document.getElementById('quit').style.backgroundColor = "green";
        //         // console.log(showCurrentScore());
        //     }
        //     else{
        //         score.innerHTML = `${gameData.score[0]}`;
        //         s1.innerHTML = `${gameData.score[0]}`;
        //         s2.innerHTML = `${gameData.score[1]}`;
        //     }
        // }

        // function showCurrentScore(){
        //     score.innerHTML = `<p>The score is currently <strong>${gameData.players[0]} ${gameData.score[0]}</strong> ${gameData.players[1]} ${gameData.score[1]}</strong></p>`;
        // }
    }
    
    function addAlien(){
        if(currPlayer == "player 1"){
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
                winner.innerHTML = "Player 2 wins!";
            }
            else if(count1 === 5){
                alienCount1.innerHTML = "ALIEN";
                winner.innerHTML = "Player 2 wins! Refresh to play again";
            }
        }
        else if(currPlayer == "player 2"){
            if(count2 === 0){
                alienCount2.innerHTML = "";
            }
            else if(count2 === 1){
                alienCount2.innerHTML = "A";
            }
            else if(count1 === 2){
                alienCount2.innerHTML = "AL";
            }
            else if(count2 === 3){
                alienCount2.innerHTML = "ALI";
            }
            else if(count2 === 4){
                alienCount1.innerHTML = "ALIE";
                // winner.innerHTML = "Player 2 wins!";
            }
            else if(count2 === 5){
                alienCount1.innerHTML = "ALIEN";
                winner.innerHTML = "Player 1 wins! Refresh to play again";
            }
        }

    }
})();