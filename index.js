const addBtn = document.getElementById("add-button");
const inputEl = document.getElementById("input-field");
const listEl = document.getElementById("shopping-list");
const imgEl = document.querySelector("img")
const originalImagePath = "assets/girl-rmbg.png"
const easterEggRamenImagePath = "assets/ramen_girl.png";
// ADD NEW EASTER EGGG FOR NOODELS PATH TO IMAGE HERE 

const locStoIsEmpty = () => (localStorage.length == 0);

let globalItemIDNumber = localStorage.length; // stores ID of last item in database

const pushToLocSto = (value) => { // pushes value to the localStorage and returns its ID number in localStorage
    globalItemIDNumber++; 
    localStorage.setItem(globalItemIDNumber, value);
}

const removeFromLocSto = (itemID) => {
    localStorage.removeItem(itemID);
    callUpdateLocSto();
}

addBtn.addEventListener("click", function () {
    if(inputEl.value.trim() != ""){
        pushToLocSto(inputEl.value);
        callUpdateLocSto();
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
 
function callUpdateLocSto() { // calls LocalStorage to update the list


    clearListEl();
        
    if(!locStoIsEmpty()){

        console.log("callUpdateLocSto(): LS length is " + localStorage.length);

        const shoppingArray = Object.entries(localStorage); // gets all elements from localStorage to our array
        for(let currentItem of shoppingArray){

            let currentItemID = currentItem[0];
            let currentItemValue = currentItem[1]
            
            if(currentItemValue.toLowerCase() === 'ramen') {

                imgEl.src = easterEggRamenImagePath;

            } else if (currentItemValue.toLowerCase() === 'noodles') {
                
                imgEl.src = "assets/noodles_girl.jpg";

            }
            console.table(currentItem)

            addNewItem(currentItemID, currentItemValue);
        }

    } else {
            console.log("callUpdateLocSto(): LS length is " + localStorage.length);
            imgEl.src = originalImagePath;
            listEl.innerHTML = "No items here, yet :)"
        }

}

function addNewItem(itemID, itemValue){

    const li = document.createElement("li");
    //CHECKING FOR PASSED VALUES 
    console.log("addNewItem(): Passed ID = " + `${itemID}`);
    console.log("addNewItem(): Passed value = " + `${itemValue}`);

    li.append(itemValue);
    listEl.append(li);
    
    li.addEventListener("dblclick", function () {     

        removeFromLocSto(itemID);
    })
}

document.addEventListener("DOMContentLoaded", callUpdateLocSto());