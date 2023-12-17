/*
[] write WPA To-Do List App for this project
[] save to loclalStorage 
    [] set the key assigner for values
        []get the last key stored in locSto 
        []after remove check if locSto = null 
        []increment the ID# after appending ; do none when remove() called 
    [] test for its functionality
    [] show items on the screen upon appending
[] rewrite functions for ES6 standard
[] add multiplier to items
[] add easterEgg for pasta
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
const getIDnumber = () => {
    if(localStorage.length == 0){ // check if locSto is null; yes - we set IDnum to 0, no - set IDnum to last+1 key number
            
        console.log("Local Storage is null");
        return 0;

    }else {
        return localStorage.length;
>>>>>>> e1ff698 (Title: Save data to LocalStorage)
    }
}

let itemID = getIDnumber();

const push = (database, value) => {
    itemID++; 
    database.setItem(itemID, value);
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
    clearInputFieldReference();
})

function clearInputFieldReference(){
    return inputEl.value = "";
}
function clearListEl (){
    
    listEl.innerHTML = ""; //clearing list before updating data
}
/*
RE-write for LocalStorage 
    onValue(shoppingListInDB, function (snapshot) {

        clearListEl();
        
        if(snapshot.exists()){
            const shoppingArray = Object.entries(snapshot.val()); // return object and get values from that object and turn them in to array
            for(let currentItem of shoppingArray){

                let currentItemID = currentItem[0];
                let currentItemValue = currentItem[1]
                
                if(currentItemValue.toLowerCase() === 'ramen') {

                    imgEl.src = easterEggImagePath;
                }

                console.log("ID:" + currentItemID);
                console.log("Value:" + currentItemValue);

                addNewItem(currentItem);
            }
        }else {
            imgEl.src = originalImagePath;
            listEl.innerHTML = "No items here... yet :)"
        }

    })
*/
function addNewItem(item){

    const li = document.createElement("li");
    const itemID = item[0];
    const itemValue = item[1];

    li.append(itemValue);
    listEl.append(li);

// Rewrite for LOCALSTORAGE
    // li.addEventListener("dblclick", function () {       
    //     const itemRef = ref(database, `ShoppingList/${itemID}`);

    //     remove(itemRef);
    // })



}