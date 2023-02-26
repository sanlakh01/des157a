(function (){

    "use strict";
    console.log("reading js");

    const container = document.querySelector("#container");
    const hotSpots = document.querySelectorAll("#container div");
    const theImg = document.querySelector("div img");

    hotSpots.forEach(function (eachSpot){
        eachSpot.addEventListener("mouseover", zoomPhoto);
        eachSpot.addEventListener("mouseout", function(){
            theImg.className = "start";
        });
    });

    function zoomPhoto(event){
        const earring = event.target.id;
        console.log(earring);
        if (earring){
            theImg.className = "green";
        }

        // switch(earring){
        //     case "green": theImg.className = "green"; break;
        //     case "topright": theImg.className = "topright"; break; 
        //     case "bottomleft": theImg.className = "bottomleft"; break; 
        //     case "bottomright": theImg.className = "bottomright"; break; 
        //     case "center": theImg.className = "center"; break; 
        // }
    }
})();