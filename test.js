
//Take user input and return image path if input is exist in easterEggs.
function easterEgg(userInput){
    //EasterEggs image paths stored in object. 
    const easterEggs = {'Ramen':"assets/ramen_girl.png",'Noodles':"assets/noodles_girl.jpg"};

    //Cheking if user input exists in easterEggs and return image path.
    if (userInput in easterEggs){
        return(easterEggs[userInput]);
    } 
}

