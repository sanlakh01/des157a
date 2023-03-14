(function(){
    
    "use strict";
    console.log("reading javascript");
    const btns = document.querySelectorAll("button");
    const hotSpots = document.querySelectorAll('main div');
    const theImg = document.getElementById("image");

    const aBody = document.querySelector("body");

    //instructional overlay - to view
    btns[1].addEventListener("click", function(event){
        event.preventDefault();

        document.getElementById("overlay").className = "show";
    })

    //to close overlay
    document.addEventListener("keydown", function(event){

        if(event.key){
            document.getElementById("overlay").className = "hide";
        }
    })

   // will be used to determine which hotspot div you mouse over, if any.
   let thisSpot;
   // will be used to determine when the mouse has stopped moving.
   let movingMouse;

   // This is the function that zooms in on the photo
   function zoomPhoto(event) {
       //update thisSpot with the part of the image the user is mousing over
       thisSpot = event.target.id;
       console.log(`zooming into ${thisSpot}`);
       switch (thisSpot) {
           case 'one': theImg.className = 'one'; break;
           case 'two': theImg.className = 'two'; break;
           case 'three': theImg.className = 'three'; break;
           case 'four': theImg.className = 'four'; break;
           case 'five': theImg.className = 'five'; break;
           case 'six': theImg.className = 'six'; break;
           case 'seven': theImg.className = 'seven'; break;
           case 'eight': theImg.className = 'eight'; break;
       }
       aBody.style.backgroundColor = "#765b95";
   }

   // Add event listeners to each of the hotspots
   hotSpots.forEach(function (eachSpot) {
       // when you mouse over a hotspot, zoom in on it.
       eachSpot.addEventListener('mouseover', zoomPhoto);
       
       // when you mouse out of a hotspot, update thisSpot to 
       // indicate you are not over a hotspot.
       eachSpot.addEventListener('mouseout', function () {
           thisSpot = 'out';
           console.log(thisSpot);
           aBody.style.backgroundColor = "#000009";
       });
   });

})();