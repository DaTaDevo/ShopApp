const addBtn = document.querySelector("#add-button");
const inputEl = document.querySelector("#input-field");
const listEl = document.querySelector("#shopping-list");
const imgEl = document.querySelector("img")
const countEl = document.querySelector("#item-count")
const originalImagePath = "assets/girl-rmbg.png"
const easterEggRamenImagePath = "assets/ramen_girl.png";
const easterEggs = {'Ramen':"assets/ramen_girl.png"};

//add SET_GLOBAL_DATABASE method to simplify the work with any object-based database

const databaseIsEmpty = (database) => (database.length == 0);

let globalItemIDNumber = localStorage.length; // stores ID of last item in database

const pushToDatabase = (database, value) => { // pushes value to the localStorage and returns its ID number in localStorage
    globalItemIDNumber++; 
    localStorage.setItem(globalItemIDNumber, value);
    updateList(database);
}

const removeFromDatbase = (database, itemID) => {
    localStorage.removeItem(itemID);
    updateList(database);
}

const processInputValue = (value) => ((value.charAt(0).toUpperCase() + value.slice(1).toLowerCase()).trim())   

addBtn.addEventListener("click", function () {

    const inputValue = processInputValue(inputEl.value);
    if(inputValue != ""){

        pushToDatabase(localStorage, inputValue);
    }
    
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

const parseArray = (array, ...methods) => { //method that performs any passed methods to item of array; methods MUST have receive ONLY ONE parameter;
 
    array.map((item) => {
        for (const method of methods){
             method(item)  
        }
    })

}

const showItemCount = (itemNumber) => {countEl.innerHTML = itemNumber == 1 ? `${itemNumber} item` : `${itemNumber} items`};

const IsEasterEgg = (item) => { if (item[1] in easterEggs){ imgEl.src = easterEggs[item[1]]}}


const updateList = (database) => { // calls LocalStorage to update the list

    console.log(localStorage);
    clearListEl();
        
    if(!databaseIsEmpty(database)){ // check if localStorage is empty 

        console.log("updateList(): LS length is " + database.length);
        
        parseArray(Object.entries(database), addItemToList, IsEasterEgg);

    } else { // if localStorage is empty shows message 
            console.log("updateList(): LS length is " + database.length);

            imgEl.src = originalImagePath; //if any changes were made by EasterEgg images, it reverts it back.
            globalItemIDNumber = 0;
    }
    
    showItemCount(database.length);

}




function addItemToList(item){
//Capitalize itemValue
    const itemID = item[0];
    let itemValue = item[1];

    console.log(`addItemToList(): Passed ID = ${itemID}`);
    console.log(`addItemToList(): Passed value = " + ${itemValue}`);

    const li = document.createElement("li");
   
    li.append(itemValue);
    listEl.append(li);
    
    li.addEventListener("dblclick", () => {     
        removeFromDatbase(localStorage, itemID);
    })
}

document.addEventListener("DOMContentLoaded", updateList(localStorage));