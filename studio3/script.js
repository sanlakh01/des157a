//THING SEEMS TO TRANSFER ONLY TWICE - FIGURE IT OUT

(function (){

    "use strict";
    console.log(`reading js`);

    const play = document.querySelector("#overlay button"); //startgame!
    const overlay = document.getElementById("overlay");
    const info = document.querySelector("header button");
    const cloud = document.getElementById("cloud");
    const mona = document.getElementById("mona");

    const gameData = {
        players: ["cloud, mona"],
        score: [0,0],
        var1: 0,
        var2: 0,
        sum: 0, 
        count: [0,0], //when it hits 8, player has no more attempts
        index: 0
    }

    //the following function closes the instruction overlay and shows the game area - assigns player
    play.addEventListener("click", function(event){
        
        event.preventDefault();

        overlay.className = "hide";

        gameData.index = Math.round(Math.random()); //random generates b/w 0-1, round rounds up/down to 0 or 1
        console.log(gameData.index);
        //tells you who is playing
        if(gameData.index){
            //mona
            document.querySelector("#two h3").className = "show";
        }
        else{
            //cloud
            document.querySelector("#one h3").className = "show";
        }

        setUpTurn();
    })

    //the following function is for the information button to work
    info.addEventListener("click", function(event){
        
        event.preventDefault();

        overlay.className = "show";
        play.className = "hide";
    })

    //the following function is to escape the instructional overlay when you hit the esc key
    document.addEventListener("keydown", function(event){
        
        const key = event.key;

        if(key === "Escape"){
            overlay.className = "hide";
        }
    })

    //sets up the game area for the respective cat
    function setUpTurn(){

        if(gameData.index){
            //mona
            mona.className = "show";
            mona.innerHTML = '<h3>your chance of waking <span style="color: #9A8479">mona</span> up is</h3>';
            mona.innerHTML += "<h3>--</h3>";
            mona.innerHTML += '<button id="chore">chore time!</button>';
            cloud.className = "hide";
        }
        else{
            //cloud
            cloud.className = "show";
            cloud.innerHTML = '<h3>your chance of waking <span style="color: #707070">cloud</span> up is</h3>';
            cloud.innerHTML += "<h3>--</h3>";
            cloud.innerHTML += '<button id="chore">chore time!</button>';
            mona.className = "hide";
        }

        playGame();
    }

    //records random number generator, shows the total. 
    function playGame(){

        gameData.index ? (mona.innerHTML = '<h3>your chance of waking <span style="color: #9A8479">mona</span> up is</h3>') : (cloud.innerHTML = '<h3>your chance of waking <span style="color: #707070">cloud</span> up is</h3>');

        gameData.var1 = Math.floor(Math.random() * 50) + 1;

        gameData.var2 = Math.floor(Math.random() * 50) + 1;

        gameData.sum = gameData.var1 + gameData.var2;

        if(gameData.sum == 25 || gameData.sum == 50 || gameData.sum == 75 || gameData.sum == 100){
            //failing condition
            if(gameData.index){
                mona.innerHTML += '<h3 id="awake">Mona is awake!</h3>';
                document.getElementById("awake").style.color = "#811919";
                mona.innerHTML += '<h3><span style="color: #707070">cloud&lsquo;s</span> turn</h3>';
            }
            else{
                cloud.innerHTML += '<h3 id="awake">Cloud is awake!</h3>';
                document.getElementById("awake").style.color = "#811919";
                cloud.innerHTML += '<h3><span style="color: #9A8479">mona&lsquo;s</span> turn</h3>';
            }

            gameData.score[gameData.index] = 0; 
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);

            showCurrentScore();

            setTimeout(setUpTurn, 3000);
        }
        else if(gameData.sum == 11 || gameData.sum == 22 || gameData.sum == 33 || gameData.sum == 44 || gameData.sum == 55 || gameData.sum == 66 || gameData.sum == 77 || gameData.sum == 88 || gameData.sum == 99){
            //something else
        }
        else{
            gameData.score[gameData.index] +=gameData.sum;

            if(gameData.index){
                mona.innerHTML += '<h3 id="sleep">Mona is asleep!</h3>';
                document.getElementById("sleep").style.color = "#1D6716";
                mona.innerHTML += '<button id="chore">chore time!</button> <button id="pass"><span style="color: #707070">cloud&lsquo;s</span> turn</button>';
            }
            else{
                cloud.innerHTML += '<h3 id="sleep">Cloud is asleep!</h3>';
                document.getElementById("sleep").style.color = "#1D6716";
                cloud.innerHTML += '<button id="chore">chore time!</button> <button id="pass"><span style="color: #9A8479">mona&lsquo;s</span> turn</button>';
            }

            document.getElementById("chore").addEventListener("click", function(){
                setUpTurn();
            })

            document.getElementById("pass").addEventListener("click", function(){
                gameData.index ? (gameData.index = 0) : (gameData.index = 1);
                setUpTurn();
            })
        }

    }
})();