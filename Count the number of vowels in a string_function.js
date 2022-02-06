// Count the number of vowels in a string

function countVowel(sentence){
  
  let count = 0;
  let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  
  for(const letter of sentence){
    // let letter = sentence[i].toLowerCase();
    if(vowels.indexOf(letter) > -1){ //this line & next line
      count = count + 1;
    }
  }
  return count;

}

let string = "Quick brown fox jumps over the lazy dog";
console.log(countVowel(string));