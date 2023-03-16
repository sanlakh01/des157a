(function(){
    
    "use strict";
    console.log("reading javascript");
    alert("Task 1: Make the website (it is not fully functional yet, so the website works if the image moves). \nTask 2: Find the instructions/guide. \nGoal: Explore the page. \nEnjoy!");
    const btns = document.querySelectorAll("button");
    const hotSpots = document.querySelectorAll('#container div');
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
           case 'one': theImg.className = 'one';
                        aBody.style.backgroundColor = "#765b95"; 
                        break;
           case 'two': theImg.className = 'two'; 
                        aBody.style.backgroundColor = "#765b95";
                        break;
           case 'three': theImg.className = 'three'; 
                        aBody.style.backgroundColor = "#765b95";
                        break;
           case 'four': theImg.className = 'four'; 
                        aBody.style.backgroundColor = "#765b95";
                        break;
           case 'five': theImg.className = 'five';
                        aBody.style.backgroundColor = "#765b95"; 
                        break;
           case 'six': theImg.className = 'six'; 
                        aBody.style.backgroundColor = "#765b95";
                        break;
           case 'seven': theImg.className = 'seven'; 
                        aBody.style.backgroundColor = "#765b95";
                        break;
           case 'eight': theImg.className = 'eight'; 
                        aBody.style.backgroundColor = "#765b95";
                        break;
       }
       
   }

   // Add event listeners to each of the hotspots
   hotSpots.forEach(function (eachSpot) {
       // when you mouse over a hotspot, zoom in on it.
        eachSpot.addEventListener('mouseover', zoomPhoto);
        eachSpot.addEventListener("click", function(){
            const content = document.getElementById("content");
            content.className = "show";
        });
       
       // when you mouse out of a hotspot, update thisSpot to 
       // indicate you are not over a hotspot.
       eachSpot.addEventListener('mouseout', function () {
            thisSpot = 'out';
            console.log(thisSpot);
            aBody.style.backgroundColor = "#000009";
            const content = document.getElementById("content");
            content.className = "hide";
       });
   });

   document.addEventListener('mousemove', function(){
    clearTimeout(movingMouse);
    if(thisSpot == 'out'){
        movingMouse = setTimeout(function(){
            theImg.className = 'start';
            console.log('zooming out!');
        }, 1000);
    }
});

})();