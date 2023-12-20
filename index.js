
const addBtn = document.getElementById("add-button");
const inputEl = document.getElementById("input-field");
const listEl = document.getElementById("shopping-list");
const imgEl = document.querySelector("img")
const originalImagePath = "assets/girl-rmbg.png"
const easterEggImagePath = "assets/ramen_girl.png"
const noodlesEasterEgg = "assets/noodles_girl.jpg";
const easterEggRamenImagePath = "assets/ramen_girl.png";
// ADD NEW EASTER EGGG FOR NOODELS PATH TO IMAGE HERE 

const locStoIsEmpty = () =>{ return localStorage.length == 0;}

const getIDnumber = () => {
    if(locStoIsEmpty()){ // check if locSto is null; yes - we set IDnum to 0, no - set IDnum to length of the Local Storage
        
        console.log("getIDnumber(): Local Storage is null"); //<--- WARNING LOG
        return 0;
        
    }else {

        return localStorage.length;

    }
}

const inputItem = {  // (in progress feature) buffer for current item the program is working with 
    "value": "",
    "ID" : null
}

let globalItemIDNumber = getIDnumber(); // stores ID of last item in database

const push = (database, value) => { // pushes value to the localStorage and returns its ID number in localStorage
    globalItemIDNumber++; 
    database.setItem(globalItemIDNumber, value);
    callUpdateLocSto();
    return globalItemIDNumber;
}

const remove = (itemID) => {
    localStorage.removeItem(itemID);
    callUpdateLocSto();
}

addBtn.addEventListener("click", function () {
    let inputValue  = inputEl.value;

    // Change front image to girl whith noodles if input is "noodles"
    if(inputValue.toLowerCase() == 'noodles') {imgEl.src = noodlesEasterEgg;}

    // Change image back to default if input something else
    else{imgEl.src = originalImagePath }

    push(localStorage, inputValue);
    addNewItem()
    console.log(inputValue);

    inputItem.value  = inputEl.value;
    inputItem.ID = push(localStorage, inputItem.value);
    addNewItem(inputItem);

    inputItem.value  = inputEl.value;
    inputItem.ID = push(localStorage, inputItem.value);

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
 function callUpdateLocSto() { // calls LocalStorage to update the list

    console.log("callUpdateLocSto(): In call Update function"); //<--- WARNING LOG
    clearListEl();
        
    if(!locStoIsEmpty()){

        console.log("callUpdateLocSto(): LS length is " + localStorage.length);
        const shoppingArray = Object.entries(localStorage); // gets all elements from localStorage to our array

        for(let currentItem of shoppingArray){

            let currentItemID = currentItem[0];
            let currentItemValue = currentItem[1]
            
            if(currentItemValue.toLowerCase() === 'ramen') {

                imgEl.src = easterEggRamenImagePath;

            } // ADD NOODLES EASTER EGG HERE ______________

            //--- LOGING DATA OUT ---
            console.log("callUpdateLocSto(): ID:" + currentItemID);
            console.log("callUpdateLocSto(): Value:" + currentItemValue); 
            console.log("callUpdateLocSto(): " + currentItem)

            addNewItem(currentItemID, currentItemValue);
        }

    } else {
            console.log("callUpdateLocSto(): LS length is " + localStorage.length);
            imgEl.src = originalImagePath;
            listEl.innerHTML = "No items here... yet :)"
        }

}

function addNewItem(itemID, itemValue){

    const li = document.createElement("li");
    console.log("addNewItem(): This is items's ID = " + `${itemID}`);
    console.log("addNewItem(): This is items's value = " + `${itemValue}`);

    li.append(itemValue);
    listEl.append(li);

    

// Rewrite for LOCALSTORAGE
    li.addEventListener("dblclick", function () {       
    
        remove(itemID);
    })
}

document.addEventListener("DOMContentLoaded", callUpdateLocSto());

