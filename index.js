const addBtn = document.querySelector("#add-button");
const inputEl = document.querySelector("#input-field");
const listEl = document.querySelector("#shopping-list");
const imgEl = document.querySelector("img")
const countEl = document.querySelector("#item-count")
const originalImagePath = "assets/girl-rmbg.png"
const easterEggRamenImagePath = "assets/ramen_girl.png";
// ADD NEW EASTER EGGG FOR NOODELS PATH TO IMAGE HERE 

const locStoIsEmpty = () => (localStorage.length == 0);

let globalItemIDNumber = localStorage.length; // stores ID of last item in database

const pushToLocSto = (value) => { // pushes value to the localStorage and returns its ID number in localStorage
    globalItemIDNumber++; 
    localStorage.setItem(globalItemIDNumber, value);
    callUpdateLocSto();
}

const removeFromLocSto = (itemID) => {
    localStorage.removeItem(itemID);
    callUpdateLocSto();
}

addBtn.addEventListener("click", function () {
    if(inputEl.value.trim() != ""){
        pushToLocSto(inputEl.value);
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

/*
PSEUDO-CODE 

updateList() {

  clearList() -> parseArray(array, ...methods) -> array.item => checkEasterEgg()  - check if any item triggers EasterEgg
                                                                addIconToItem() - IP
                                                                addItemToList() - add item to the list 
                                                                showItemCount() - shows how many items in the list
                                                

}

*/


/*


const checkEasterEgg = (const itemValue) => {
    for (const easterTag of easterTags["tag"]){

    }
}

const showItemCount = () => {

}



const updateList = () => {

    clearListEl(); 

    parseArray(Object.entries(localStorage), checkEasterEgg(), addItemToList());
    showItemCount(globalIDNumber);

}


*/

function callUpdateLocSto() { // calls LocalStorage to update the list


    clearListEl();
        
    if(!locStoIsEmpty()){ // check if localStorage is empty 

        console.log("callUpdateLocSto(): LS length is " + localStorage.length);

        const shoppingArray = Object.entries(localStorage); // copy localStorage to local array
        for(let currentItem of shoppingArray){ // parse through every element

            let currentItemID = currentItem[0]; 
            let currentItemValue = currentItem[1]
            
            if(currentItemValue.toLowerCase() === 'ramen') { // check if any is EasterEgg
                imgEl.src = easterEggRamenImagePath;
            
            } else if (currentItemValue.toLowerCase() === 'noodles') {

                            imgEl.src = "assets/noodles_girl.jpg";
            }

            console.table(currentItem)

            addItemToList(currentItemID, currentItemValue); //add item to list to display
        }

    } else { // if localStorage is empty shows message 
            console.log("callUpdateLocSto(): LS length is " + localStorage.length);
            imgEl.src = originalImagePath; //if any changes were made by EasterEgg images, it reverts it back.
            listEl.innerHTML = "No items here, yet :)"// the message 
        }

}

function addItemToList(itemID, itemValue){
//Capitalize itemValue
    itemValue = itemValue.charAt(0).toUpperCase() + itemValue.slice(1).toLowerCase();

    const li = document.createElement("li");
    //CHECKING FOR PASSED VALUES 
    console.log("addItemToList(): Passed ID = " + `${itemID}`);
    console.log("addItemToList(): Passed value = " + `${itemValue}`);

    li.append(itemValue);
    listEl.append(li);
    
    li.addEventListener("dblclick", function () {     

        removeFromLocSto(itemID);
    })
}

document.addEventListener("DOMContentLoaded", callUpdateLocSto());