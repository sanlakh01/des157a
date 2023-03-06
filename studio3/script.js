(function (){

    "use strict";
    console.log(`reading js`);

    const play = document.querySelector("#overlay button");
    const overlay = document.getElementById("overlay");
    const info = document.querySelector("header button");

    //the following function closes the instruction overlay and shows the game area
    play.addEventListener("click", function(event){
        
        event.preventDefault();

        overlay.className = "hide";
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
})();