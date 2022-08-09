// Define the El
let characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const genEl = document.getElementById("gen-btn")
const result1 = document.getElementById("result-1")
const result2 = document.getElementById("result-2")

// shuffleArray
genEl.addEventListener("click",function run(){
    
    result1.textContent = ""
    result2.textContent = ""
    function shuffleArray(characters){
        for (let i = characters.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = characters[i];
            characters[i] = characters[j];
            characters[j] = temp;
            }
    }
    shuffleArray(characters) 
    console.log(characters)
// Output to the field
            // result1.textContent = characters.slice(0, 15).join('')
            // result2.textContent = characters.slice(16, 30).join('')
            
     for (let i = 0; i <= 15 ; i++){
         result1.textContent += characters[i]
     }
     
     shuffleArray(characters) 
     console.log(characters)
     
     for (let i = 0; i <= 15 ; i++){
         result2.textContent += characters[i]
     }     
})
// Click to copy

result1.addEventListener("click", function(){
    navigator.clipboard.writeText(result1.textContent)
})