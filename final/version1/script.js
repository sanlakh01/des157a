(function(){
    
    "use strict";
    console.log("reading javascript");
    const btns = document.querySelectorAll("button");

    //instructional overlay - to view
    for (let i=0; i<2; i++){
        btns[i].addEventListener("click", function(event){
            event.preventDefault();
    
            document.getElementById("overlay").className = "show";
        })
    }

    //to close overlay
    document.addEventListener("keydown", function(event){

        if(event.key){
            document.getElementById("overlay").className = "hide";
        }
    })

})();