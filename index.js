let screen=document.getElementById('screen');
buttons=document.querySelectorAll('button');
let screenValue='';
for(item of buttons){
    item.addEventListener('click',(e)=>{
        buttonText=e.target.innerText;
        console.log('Button text is',e.target.innerText);
        if(buttonText=='X'){
            buttonText='*';
            screenValue+=buttonText;
            screen.value=screenValue;
          }
       else if(buttonText=='C'){
        screenValue=" ";
            screen.value=screenValue;
       }
       else if(buttonText=='Del'){
          
            screenValue=screen.value.slice(0, (screenValue.length - 1))
            screen.value=screenValue;
            screenValue=" ";
       }
       else if(buttonText=='='){

           screen.value=eval(screenValue);
    }
    else{
        screenValue+=buttonText;
         screen.value=screenValue;
        }
    })
}