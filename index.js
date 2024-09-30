const dateOfBirth= document.querySelector('#date-of-birth');
const checkNumberButton=document.querySelector('#check-number');
const luckyNumber=document.querySelector('#lucky-number');

const outputBox=document.querySelector('#output-box')



//3
function compareValues(sum,luckyNumber){
    // console.log(sum,luckyNumber);
    if(sum % luckyNumber ===0){
        outputBox.innerHTML = 'Your birthday is lucky🚀';
        
    }else{
        outputBox.innerHTML='its not your lunky number😢';
        
    }
    
}


//
function checkBirthDateIsLucky(){
    const dob =dateOfBirth.value;
    const sum=calculateSum(dob);
  
    compareValues(sum,luckyNumber.value);
}




//
function calculateSum(dob){
    dob=dob.replaceAll("-","");
    let sum=0;
    for(let index=0; index < dob.length; index++){
        sum = sum + Number(dob.charAt(index));
    }
    return sum;
}


checkNumberButton.addEventListener('click',checkBirthDateIsLucky);