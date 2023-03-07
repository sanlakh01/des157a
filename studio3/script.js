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
        sum: [0,0], 
        count: [0,0], //when it hits 8, player has no more attempts
        index: 0,
        fails: [0,0] //tallies the player with the least amount of fails
    }

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

    //the following function closes the instruction overlay and shows the game area - assigns player
    play.addEventListener("click", function(event){
        
        event.preventDefault();

        overlay.className = "hide";

        gameData.index = Math.round(Math.random()); //random generates b/w 0-1, round rounds up/down to 0 or 1
        console.log(gameData.index);  //tells you who is playing

        setUpTurn();
    })

    //sets up the game area for the respective cat
    function setUpTurn(){

        console.log("set up!");

        if(gameData.index){
            //mona
            mona.className = "show";
            mona.innerHTML = '<h3>your chance of waking <span style="color: #9A8479">mona</span> up is</h3>';
            mona.innerHTML += "<h3></h3>";
            document.querySelector("#two h3").className = "show";
            document.querySelector("#one h3").className = "hide";
            cloud.className = "hide";

        }
        else{
            //cloud
            cloud.className = "show";
            cloud.innerHTML = '<h3>your chance of waking <span style="color: #707070">cloud</span> up is</h3>';
            cloud.innerHTML += "<h3></h3>";
            document.querySelector("#one h3").className = "show";
            document.querySelector("#two h3").className = "hide";
            mona.className = "hide";
        }

        playGame();
    }

    document.addEventListener("click", function(event){

        event.stopPropagation();

        if(event.target.id === "chore"){
            setUpTurn();
            console.log("chore");
        }

        if(event.target.id === "pass"){
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);

                setUpTurn();
                console.log("pass");
        }
    });

    //records random number generator, shows the total. 
    function playGame(){

        console.log(`${gameData.count[0]} & ${gameData.count[1]}`)
        if(gameData.count[0] === 8 || gameData.count[1] === 8){
            checkWinningCondition();

            return;
        }

        gameData.count[gameData.index]++;

        if(gameData.index){
            mona.innerHTML = '<h3>your chance of waking <span style="color: #9A8479">mona</span> up is</h3>';
        }
        else{
            cloud.innerHTML = '<h3>your chance of waking <span style="color: #707070">cloud</span> up is</h3>';
        }

        gameData.var1 = Math.floor(Math.random() * 50) + 1;

        gameData.var2 = Math.floor(Math.random() * 50) + 1;

        gameData.sum[gameData.index] = gameData.var1 + gameData.var2;

        if(!(gameData.sum[gameData.index] % 9)){

            //failing condition
            if(gameData.index){
                mona.innerHTML = '<h3>your chance of waking <span style="color: #9A8479">mona</span> up is</h3><h3 id="awake">Mona is awake!</h3>';
                document.getElementById("awake").style.color = "#811919";
                mona.innerHTML += `<h3>${gameData.sum[gameData.index]}</h3>`;
                mona.innerHTML += '<h3><span style="color: #707070">cloud&lsquo;s</span> turn</h3>';
                //corresponding cat pics
                document.getElementById("sm").className = "hide";
                document.getElementById("smm").className = "hide";
                document.getElementById("am").className = "show";
            }
            else{
                cloud.innerHTML += '<h3 id="awake">Cloud is awake!</h3>';
                document.getElementById("awake").style.color = "#811919";
                cloud.innerHTML += `<h3>${gameData.sum[gameData.index]}</h3>`;
                cloud.innerHTML += '<h3><span style="color: #9A8479">mona&lsquo;s</span> turn</h3>';

                //corresponding cat pics
                document.getElementById("sc").className = "hide";
                document.getElementById("smc").className = "hide";
                document.getElementById("ac").className = "show";
            }

            gameData.score[gameData.index] = 0; 
            gameData.fails[gameData.index]++;
 
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);

            setTimeout(setUpTurn, 3000);
        }
        else if(!(gameData.sum[gameData.index] % 5)){

            //semi fail condition
            
            if(gameData.index){
                mona.innerHTML += `<h3>${gameData.sum[gameData.index]}</h3>`;
                mona.innerHTML += '<h3 id="semi">Mona was disturbed!</h3>';
                mona.innerHTML += '<h3><span style="color: #707070">cloud&lsquo;s</span> turn</h3>';
                //corresponding cat pics
                document.getElementById("sm").className = "hide";
                document.getElementById("smm").className = "show";
                document.getElementById("am").className = "hide";
            }
            else{
                cloud.innerHTML += `<h3>${gameData.sum[gameData.index]}</h3>`;
                cloud.innerHTML += '<h3 id="semi">Cloud was disturbed!</h3>';
                cloud.innerHTML += '<h3><span style="color: #9A8479">mona&lsquo;s</span> turn</h3>';
                //corresponding cat pics
                document.getElementById("sc").className = "hide";
                document.getElementById("smc").className = "show";
                document.getElementById("ac").className = "hide";
                
            }
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);
            gameData.fails[gameData.index]++;
            setTimeout(setUpTurn, 2000);
        }
        else{
            //pass condition

            if(gameData.index){
                mona.innerHTML += `<h3>${gameData.sum[gameData.index]}</h3>`;
                mona.innerHTML += '<h3 id="sleep">Mona is asleep!</h3>';
                document.getElementById("sleep").style.color = "#1D6716";
                mona.innerHTML += '<button id="chore">chore time!</button> <button id="pass">cloud&lsquo;s turn</button>';
                //corresponding cat pics
                document.getElementById("sm").className = "show";
                document.getElementById("smm").className = "hide";
                document.getElementById("am").className = "hide";
            }
            else{
                cloud.innerHTML += `<h3>${gameData.sum[gameData.index]}</h3>`;
                cloud.innerHTML += '<h3 id="sleep">Cloud is asleep!</h3>';
                document.getElementById("sleep").style.color = "#1D6716";
                cloud.innerHTML += '<button id="chore">chore time!</button> <button id="pass">mona&lsquo;s turn</button>';  
                //corresponding cat pics
                document.getElementById("sc").className = "show";
                document.getElementById("smc").className = "hide";
                document.getElementById("ac").className = "hide";
            }

        }

        gameData.sum[gameData.index] = 0;

    }

    function checkWinningCondition(){

            //stop the game..
        overlay.className = "show";

        gameData.fails[0] > gameData.fails[1] ? (overlay.innerHTML = "<h2>Cloud's parent was most successful. Enjoy his snores!</h2>") : (overlay.innerHTML = "<h2>Mona's parent was most successful. Enjoy her snores!</h2>");

        overlay.innerHTML += '<button id="new">play again?</button>';

        document.getElementById("new").addEventListener("click", function(){
            location.reload();
        })
    }

})();