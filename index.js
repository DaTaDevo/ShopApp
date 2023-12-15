import {initializeApp} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import {getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"
const appSettings = {
    databaseURL: "https://shoppingapp-5a1fd-default-rtdb.firebaseio.com/"
}

const app = initializeApp(appSettings);
const database = getDatabase(app);
const shoppingListInDB = ref(database, "ShoppingList");
const addBtn = document.getElementById("add-button");
const inputEl = document.getElementById("input-field");
const listEl = document.getElementById("shopping-list");
const imgEl = document.querySelector("img")
const originalImagePath = "assets/girl-rmbg.png"
const easterEggImagePath = "assets/ramen_girl.png";

addBtn.addEventListener("click", function () {
    let inputValue  = inputEl.value;
    push(shoppingListInDB, inputValue);
    
    console.log(inputValue);
    clearInputFieldReference();
})

function clearInputFieldReference(){
    return inputEl.value = "";
}
function clearListEl (){
    
    listEl.innerHTML = ""; //clearing list before updating data
}

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

function addNewItem(item){

    const li = document.createElement("li");
    const itemID = item[0];
    const itemValue = item[1];

    li.append(itemValue);
    listEl.append(li);


    li.addEventListener("dblclick", function () {
        const itemRef = ref(database, `ShoppingList/${itemID}`);

        remove(itemRef);
    })



}