/*
[] write WPA To-Do List App for this project
[] save to loclalStorage 
    [] show items on the screen upon appending
[] add Enter functionality
    - when user clicks Enter key the item is added to the list
[] rewrite functions for ES6 standard
[] add multiplier to items
[] create an object that would store the input's value and ID 
*/

const addBtn = document.getElementById("add-button");
const inputEl = document.getElementById("input-field");
const listEl = document.getElementById("shopping-list");
const imgEl = document.querySelector("img")
const originalImagePath = "assets/girl-rmbg.png"
<<<<<<< HEAD
const easterEggImagePath = "assets/ramen_girl.png"
const noodlesEasterEgg = "assets/noodles_girl.jpg";
let locStoIsNull = true;
let itemID = {
        if(){ // check if locSto is null; yes - we set IDnum to 0, no - set IDnum to last+1 key number
            console.log(Object.keys(localStorage)[localStorage-1]) // getting the key of the last item
        }
=======
const easterEggImagePath = "assets/ramen_girl.png";
let locStoIsEmpty = localStorage.length == 0; // not sure how it will be modified in the program 
const getIDnumber = () => {
    if(locStoIsEmpty){ // check if locSto is null; yes - we set IDnum to 0, no - set IDnum to last+1 key number
            
        console.log("Local Storage is null");
        return 0;

    }else {
        return localStorage.length;
>>>>>>> e1ff698 (Title: Save data to LocalStorage)
    }
}
const inputItem = {
    "value": "",
    "ID" : null
}
let globalItemIDNumber = getIDnumber();

const push = (database, value) => { // pushes value to the localStorage and returns its ID number in localStorage
    globalItemIDNumber++; 
    database.setItem(globalItemIDNumber, value);
    return globalItemIDNumber;
}

const remove = (itemID) => {
    localStorage.removeItem(itemID);
    callUpdateLocSto();
}


addBtn.addEventListener("click", function () {
<<<<<<< HEAD
    let inputValue  = inputEl.value;

    // Change front image to girl whith noodles if input is "noodles"
    if(inputValue.toLowerCase() == 'noodles') {imgEl.src = noodlesEasterEgg;}

    // Change image back to default if input something else
    else{imgEl.src = originalImagePath }

    push(localStorage, inputValue);
    addNewItem()
    console.log(inputValue);
=======
    inputItem.value  = inputEl.value;
    inputItem.ID = push(localStorage, inputItem.value);
    addNewItem(inputItem);
>>>>>>> c400160 (Created Add/Remove Item from LocSto feature)
    clearInputFieldReference();
})

inputEl.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        addBtn.click();
    }
});

function clearInputFieldReference(){
    return inputEl.value = "";
}
function clearListEl (){
    
    listEl.innerHTML = ""; //clearing list before updating data
}
 
 const callUpdateLocSto = () => {
    console.log("In call Update function"); //<--- WARNING LOG
    clearListEl();
        
    if(locStoIsEmpty){
        console.log(locStoIsEmpty);
        const shoppingArray = Object.entries(localStorage); // return object and get values from that object and turn them in to array
        for(let currentItem of shoppingArray){

            let currentItemID = currentItem[0];
            let currentItemValue = currentItem[1]
            
            if(currentItemValue.toLowerCase() === 'ramen') {

                imgEl.src = easterEggImagePath;
            }

            console.log("ID:" + currentItemID); //<--- WARNING LOG
            console.log("Value:" + currentItemValue); //<--- WARNING LOG

            addNewItem(currentItem);
        }
    }else {
        imgEl.src = originalImagePath;
        listEl.innerHTML = "No items here... yet :)"
    }

}

function addNewItem(item){

    const li = document.createElement("li");
    const itemID = item.ID;
    console.log("This is items's ID = " + item.ID)
    const itemValue = item.value;
    console.log("This is items's value = " + item.value)

    li.append(itemValue);
    listEl.append(li);

// Rewrite for LOCALSTORAGE
    li.addEventListener("dblclick", function () {     

        remove(itemID);
    })
}

callUpdateLocSto();