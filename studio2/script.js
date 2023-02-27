(function (){

    "use strict";
    console.log("reading js");

    //THE FOLLOWING FUNCTION LOADS THE PRE-LOAD ANIMATION
    window.addEventListener("load", function(){
        const preloader = document.getElementById('preloader');
		preloader.className = 'fadeout';

		// wait until the animation has completed
		preloader.addEventListener('animationend', function () {

			//once the animation is done, remove the preloader div.
			preloader.style.display = 'none';
		});
    })

    //THE FOLLOWING 5 FUNCTIONS HAVE MOUSEOVER INTERACTIONS FOR ALL THE EARRINGS. 
    document.querySelector("#green").addEventListener("mouseover", function(event){
        event.preventDefault();

        //OVERLAY DIALOG BOX
        document.querySelector("#overlay1").className = "show";
        console.log(`overlay 1 - green moon phases earrings`);
        
        //ZOOM IN TO GREEN EARRING
        document.querySelector("#image").className = "one";
    });

    document.querySelector("#copper").addEventListener("mouseover", function(event){
        event.preventDefault();

        //OVERLAY DIALOG BOX
        document.querySelector("#overlay2").className = "show";
        console.log(`overlay 2 - copper moon earrings`);

        //ZOOM IN TO COPPER EARRING
        document.querySelector("#image").className = "two";
    });

    document.querySelector("#cuffs").addEventListener("mouseover", function(event){
        event.preventDefault();
        
        //OVERLAY DIALOG BOX
        document.querySelector("#overlay3").className = "show";
        console.log(`overlay 3 - ear cuffs with dangles`);

        //ZOOM IN TO CUFFS
        document.querySelector("#image").className = "three";
    });

    document.querySelector("#phases").addEventListener("mouseover", function(event){
        event.preventDefault();

        //OVERLAY DIALOG BOX
        document.querySelector("#overlay4").className = "show";
        console.log(`overlay 4 - white moon phase earrings`);

        //ZOOM IN TO WHITE EARRING
        document.querySelector("#image").className = "four";
    });

    document.querySelector("#black").addEventListener("mouseover", function(event){
        event.preventDefault();

        //OVERLAY DIALOG BOX
        document.querySelector("#overlay5").className = "show";
        console.log(`overlay 5 - black moon earrings`);

        //ZOOM IN TO BLACK EARRING
        document.querySelector("#image").className = "five";
    });

    //THE FOLLOWING 5 FUNCTIONS HAVE MOUSEOUT INTERACTIONS FOR ALL THE EARRINGS. 
    document.querySelector("#green").addEventListener("mouseout", function(event){
        event.preventDefault();

        //OVERLAY DIALOG BOX
        document.querySelector("#overlay1").className = "hide";
        console.log(`overlay 1 CLOSE`);

        //ZOOM OUT TO FULL IMAGE
        document.querySelector("#image").className = "start";
    });

    document.querySelector("#copper").addEventListener("mouseout", function(event){
        event.preventDefault();

        //OVERLAY DIALOG BOX
        document.querySelector("#overlay2").className = "hide";
        console.log(`overlay 2 CLOSE`);

        //ZOOM OUT TO FULL IMAGE
        document.querySelector("#image").className = "start";
    });

    document.querySelector("#cuffs").addEventListener("mouseout", function(event){
        event.preventDefault();

        //OVERLAY DIALOG BOX
        document.querySelector("#overlay3").className = "hide";
        console.log(`overlay 3 CLOSE`);

        //ZOOM OUT TO FULL IMAGE
        document.querySelector("#image").className = "start";
    });

    document.querySelector("#phases").addEventListener("mouseout", function(event){
        event.preventDefault();

        //OVERLAY DIALOG BOX
        document.querySelector("#overlay4").className = "hide";
        console.log(`overlay 4 CLOSE`);

        //ZOOM OUT TO FULL IMAGE
        document.querySelector("#image").className = "start";
    });

    document.querySelector("#black").addEventListener("mouseout", function(event){
        event.preventDefault();

        //OVERLAY DIALOG BOX
        document.querySelector("#overlay5").className = "hide";
        console.log(`overlay 5 CLOSE`);

        //ZOOM OUT TO FULL IMAGE
        document.querySelector("#image").className = "start";
    });
})();