const numbers = [1,2,3,4]; //array


const square = (x) => {console.log("this is square func: " + x*x)}; //func1 

const sum = (x) => { console.log("this is sum func: " + x+x)}; //func2 

function check (array, ...methods) {
    
    array.map((x) => {
        
        for(const method of methods){
            method(x); 
        }
    })

}


check(numbers, square, sum); 