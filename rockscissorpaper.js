var personAPoints = 0;
var personBPoints = 0;

function playRockScissorPaper(input){
    
    let arrayOfInput = splitString(input);
    
    comparePlayRounds(arrayOfInput);
    
    whoWinsAll();   
}

function comparePlayRounds(arrayOfInput){
    for(let i = 0; i < arrayOfInput.length; i=i+2){
        
        let personA = arrayOfInput[i];
        let personB = arrayOfInput[i+1];
        
        if(personA == 'R' && personB == 'S'){
            personAPoints++;
            console.log("Person A wins");
        }else if(personA == 'S' && personB == 'S'){
            console.log("Draw!");     
        }else if(personA == 'P' && personB == 'S'){
            personBPoints++;
            console.log("Person B wins");
        }else if(personA == 'R' && personB == 'R'){
            console.log("Draw!");     
        }else if(personA == 'P' && personB == 'P'){
            console.log("Draw!");     
        }else if(personB == 'R' && personA == 'S'){
            personBPoints++;
            console.log("Person B wins");
        }else if(personB == 'P' && personA == 'S'){
            personAPoints++;
            console.log("Person A wins");
        }else if(personB == 'R' && personA == 'P'){
            personAPoints++;
            console.log("Person A wins");
        }else if(personA == 'R' && personB == 'P'){
            personBPoints++;
            console.log("Person B wins");
        }   
    } 
}



function whoWinsAll(){
    if(personAPoints > personBPoints){
        console.log("Person A is the winner!!!! WOOOHOO!");
    }else if(personBPoints > personAPoints){
        console.log("Person B is the best! Congratulations!");
    }else{
        console.log("It's a draw today. You are both winners and/or losers. Have a good day y'all.");
    }
}

function splitString(string){
    let result = string.split('');
    return result;
}

playRockScissorPaper("PRSRSPPRSSSP");





