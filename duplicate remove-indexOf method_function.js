// Defining function to get unique values from an array
    function getUnique(array){
        var uniqueArray = [];
        
        // Loop through array values
        for(i=0; i < array.length; i++){
            if(uniqueArray.indexOf(array[i]) === -1) { //indexOf means array er value guli?
                uniqueArray.push(array[i]);
            }
        }
        return uniqueArray;
    }
    
    var names = ["John", "Peter", "Clark", "Harry", "John", "Alice"];
    var uniqueNames = getUnique(names);
    console.log(uniqueNames); // Prints: ["John", "Peter", "Clark", "Harry", "Alice"]




 // Defining function to get unique values from an array
    function getUnique(array){
        var uniqueArray = [];
        
        // Loop through array values
        for(var value of array){
            if(uniqueArray.indexOf(value) === -1){
                uniqueArray.push(value);
            }
        }
        return uniqueArray;
    }
    
    var names = ["John", "Peter", "Clark", "Harry", "John", "Alice"];
    var uniqueNames = getUnique(names);
    console.log(uniqueNames); // Prints: ["John", "Peter", "Clark", "Harry", "Alice"]