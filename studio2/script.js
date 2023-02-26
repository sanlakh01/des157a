(function (){

    "use strict";
    console.log("reading js");

    const overlay = document.querySelectorAll("#overlay");

    //the following are for the divs appearing.
    document.querySelector("#green").addEventListener("mouseenter", function(event){
        event.preventDefault();
        overlay[0].className = "show";
        console.log(overlay[0]);
        //document.getElementById("oo").className = "show";
    });

    document.querySelector("#copper").addEventListener("mouseenter", function(event){
        event.preventDefault();
        overlay[1].className = "show";
        console.log(overlay[1]);
    });

    document.querySelector("#cuffs").addEventListener("mouseenter", function(event){
        event.preventDefault();
        overlay[2].className = "show";
        console.log(overlay[2]);
    });

    document.querySelector("#phases").addEventListener("mouseenter", function(event){
        event.preventDefault();
        overlay[3].className = "show";
        console.log(overlay[3]);
    });

    document.querySelector("#black").addEventListener("mouseenter", function(event){
        event.preventDefault();
        overlay[4].className = "show";
        console.log(overlay[4]);
    });

    //the following are for the divs disappearing.
    document.querySelector("#green").addEventListener("mouseout", function(event){
        event.preventDefault();
        overlay[0].className = "hide";
        console.log(overlay[0]);
    });

    document.querySelector("#copper").addEventListener("mouseout", function(event){
        event.preventDefault();
        overlay[1].className = "hide";
        console.log(overlay[1]);
    });

    document.querySelector("#cuffs").addEventListener("mouseout", function(event){
        event.preventDefault();
        overlay[2].className = "hide";
        console.log(overlay[2]);
    });

    document.querySelector("#phases").addEventListener("mouseout", function(event){
        event.preventDefault();
        overlay[3].className = "hide";
        console.log(overlay[3]);
    });

    document.querySelector("#black").addEventListener("mouseout", function(event){
        event.preventDefault();
        overlay[4].className = "hide";
        console.log(overlay[4]);
    });
})();