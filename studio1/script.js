(function (){

    "use strict";
    console.log("reading javascript");

    const myForm = document.querySelector("#myform");
    const madlib = document.querySelector(".madlib");
    const story = document.querySelector(".story");
    const formData = document.querySelectorAll("input[type=text]");

    myForm.addEventListener("submit", function (event) {
        event.preventDefault();
        processFormData(formData);
        madlib.className = "madlib hide";
        story.className = "story show"; 
    });

    function processFormData(formData){
        const words =[];
        const emptyFields = [];
        let counter = 0;

        for (const eachWord of formData){
            if(eachWord.value){
                words.push(eachWord.value); //add stuff into the array
            }
            else{
                emptyFields.push(counter); //add the [#] of element where there is no data
            }
            counter++;
        }

        if(emptyFields.length > 0){
            showErrors(formData, emptyFields);
        }
        else{
            makeMadlib(words);
        }
    }

    function showErrors(formData, emptyFields){
        const errorID = formData[emptyFields[0]].id;
        const errorText = `Please fill out field ${errorID}`;

        alert(errorText);

        document.querySelector(`#${errorID}`).focus(); //highlights field that user needs to fill
    }

    function makeMadlib(words){
        const myText = `<p>Once upon a time,  there was a tiny girl who only wanted to play with the stars in the sky. So on one fine night off she went to find them. And she walked and walked and walked, until she came by a ${words[0]}. “Good day to you,” says she, “I’m seeking the stars in the sky to play with. Have you seen any?”</p>
        <p>“Oh, yes,” said the ${words[0]}. “They shine in my face all night, until I can’t sleep because of them. Come close and perhaps you’ll find one.” She came close in, and ${words[1]} and ${words[1]}, but she couldn’t find a single one. So she went on till she came to a ${words[2]}.</p>
        <p>“Good day to you, ${words[2]},” says she; “I’m seeking the stars in the sky to play with. Have you seen any?” “Yes, indeed, beautiful child,” said the ${words[2]}. “They glint on me all night. Wait with me, perhaps you'll see them.” She ${words[3]} and she ${words[3]} and she ${words[3]}, but never did she see one. So on she went till she came to the ${words[4]}.</p>
        <p>“Good day to you, ${words[4]},” says she; “I’m looking for the stars in the sky to play with. Have you ever seen one?” “Why, yes, my beautiful child,” said the ${words[4]}. “They shine on the grass here at night. Join us, and perhaps you'll find them.” So she ${words[5]} and she ${words[5]} and she ${words[5]}, but never did she see one. So down she sat; I suppose she wept.</p>
        <p>“Oh dearie me, oh dearie me,” says she, “I’ve ${words[1]} and I’ve ${words[3]} and I’ve ${words[5]}, and if you’ll not help me I shall never find the stars in the sky to play with.” So the ${words[4]} whispered together, and one of them came up to her and took her by the hand and said, “If you won’t go home to your mother, go forward, go forward; mind you take the right ${words[6]}.”</p>
        <p>“Oh, shall I be among the stars in the sky then?” cried the girl.</p>
        <p>“If you’ll not be there, then you’ll be elsewhere,” said the ${words[4]}, and set to dancing again.</p>
        <p>So on she went again with a light heart, and she eventually came to a wide glistening ${words[6]} that went up into the sky. As she came to the start of the ${words[6]}, she saw - at the far end of it - shining things dancing about. </p>
        <p>And off she ran, most joyously, as she had found the stars to play with. And she played with the stars all night, until she could play no more. “Dear stars,” she cried, “will I get to play with you again?” And the shining things smiled and said, “For every night you sleep well, you will find the path to play with us.” And so the little girl falls asleep night after night, and she spends all her nights playing with her ${words[7]}, ${words[8]} friends. </p>`;

        story.innerHTML = myText;

        for (const eachField of formData){
            eachField.value = ""; //reset data back to blank. 
        }
    }

    

} )();