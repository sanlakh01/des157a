(function(){
    
    "use strict";
    console.log("reading javascript");
    const btns = document.querySelectorAll("button");
    const hotSpots = document.querySelectorAll('#container div');
    const theImg = document.getElementById("image");
    const content = document.getElementById("content");
    const aBody = document.querySelector("body");

    //the following function runs the pre-loader
    window.addEventListener("load", function(){
        const preloader = document.getElementById('preloader');
		preloader.className = 'fadeout';

		// wait until the animation has completed
		preloader.addEventListener('animationend', function () {

			//once the animation is done, remove the preloader div.
			preloader.style.display = 'none';
		});
    });

    //instructional overlay - to view
    btns[1].addEventListener("click", function(event){
        event.preventDefault();
        document.getElementById("overlay").className = "show";
    });

    //to close both overlays
    document.addEventListener("keydown", function(event){

        if(event.key){
            document.getElementById("overlay").className = "hide";
            document.getElementById("shopping").className = "hide";
        }
    });

    //shopping viewing!
    btns[0].addEventListener("click", function(event){
        event.preventDefault();
        document.getElementById("shopping").className = "show";
    });

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
                        content.innerHTML = `<p>These earrings are my basic moon earrings. I bought these in 2022, from the Davis Street Market- I don't remember from whom. I picked these up because they are simple white dangles that aren't oversized, unlike my green pair. I wear these a lot, and they're super comfortable. In fact, I've worn these so often that the finish on the bar is almost gone.</p>`;
                        break;
           case 'two': theImg.className = 'two'; 
                        aBody.style.backgroundColor = "#765b95";
                        content.innerHTML = `<p>This pair is one of my most unique pairs. These earrings are part of a themed set. I bought these in 2022, from Etsy - they were one of my first clay earrings. I picked these up because I liked how unique the hardware was, and I liked the sun on top of the moon. It wears so well on my ears, and because of the hardware style, I  never need to wear any backings, so it's comfortable to wear for long periods of time.</p>`;
                        break;
           case 'three': theImg.className = 'three'; 
                        aBody.style.backgroundColor = "#765b95";
                        content.innerHTML = `<p>These earrings are my favorite moon earrings. I bought these early 2022, from the Davis Street Market - this is from Amoeba Clay. I picked these up because I wanted green earrings, but they ended up starting my addiction to moon themed objects. Fun Fact: these are my longest pair, the last moon phase hits my shoulder and the the gem rests on my shoulder.</p>`;
                        break;
           case 'four': theImg.className = 'four'; 
                        aBody.style.backgroundColor = "#765b95";
                        content.innerHTML = `<p>These earrings are my most unique earrings. I bought these in 2022 from the Beaded Planet, online. These are cuffs that go behind the ear. They are a mismatched pair, with a yellow-themed sun cuff and a purple-themed moon cuff. Because of the fact that they sit behind my ear, I haven't gotten a lot of opportunities to wear them. However, they give me so much joy and I love having this pair even if I can't wear them often.</p>`;
                        break;
           case 'five': theImg.className = 'five';
                        aBody.style.backgroundColor = "#765b95";
                        content.innerHTML = `<p>These earrings are my newest earrings in this collection. I bought these in 2022 from a street market in Singapore. These are yet another sun and moon earring mismatched pair. I love this pair because it is so subtle, and I enjoy the little star and sparkle orbiting the moon and the sun. I have worn these a couple times, but because they're so new, it isn't my rotation yet. </p>`; 
                        break;
           case 'six': theImg.className = 'six'; 
                        aBody.style.backgroundColor = "#765b95";
                        content.innerHTML = `<p>These earrings are from Etsy, from the same collection and store as the second earring from the left. These are a typical arch shape that is very common in clay earrings, but with a twist. The twist is why I decided on buying these - I loved the crescent moon hole with a gold star charm. Unfortunately, this came with an uncomfortable butterfly backing, so I don't wear it much.</p>`; 
                        break;
           case 'seven': theImg.className = 'seven'; 
                        aBody.style.backgroundColor = "#765b95";
                        content.innerHTML = `<p>These earrings are my only copper earrings. It has a long dangle, with a tiny crescent moon at the end. These were bought in 2022, from the Davis Street Market. I picked these up because I love the color of copper - it was a coincidence that they were moons. Despite the appearance, they aren't very long, and are very lightweight.</p>`;
                        break;
           case 'eight': theImg.className = 'eight'; 
                        aBody.style.backgroundColor = "#765b95";
                        content.innerHTML = `<p>These were the last pair I bought from Amoeba Clay, before she moved. Somewhat of an impulse purchase, I bought these because I loved the moon and star sparkles embedded in the moon. I also enjoyed the dangles from the moon, because I'd never really seen it before. I don't wear this too much though, because it isn't in my daily rotation collection. </p>`;
                        break;
        }
        setInterval(function(){
            content.className = "show";
        }, 1500);  
    }

    // Add event listeners to each of the hotspots
    hotSpots.forEach(function (eachSpot) {
        // when you mouse over a hotspot, zoom in on it.
        eachSpot.addEventListener('mouseover', zoomPhoto);

        // when you mouse out of a hotspot, update thisSpot to 
        // indicate you are not over a hotspot.
        eachSpot.addEventListener('mouseout', function(){
            thisSpot = 'out';
            console.log(thisSpot);
            aBody.style.backgroundColor = "#000009";
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
        document.getElementById("content").className = "hide";
    }); 
})();