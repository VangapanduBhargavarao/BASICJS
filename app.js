const verifybtn=document.getElementById('submitbtnnnn');
verifybtn.addEventListener("click",function(){
const verifyinput1=document.getElementById('getinput1').value;
const verifyinput2=document.getElementById('getinput2').value;
const Errorelement=document.getElementById('Error');
const storedonevalue=localStorage.getItem('input1');
const storedsecondvalue=localStorage.getItem('input2');
    if(!verifyinput1 || !verifyinput2){
       Errorelement.textContent="enter both fields to validate";
        return;
    }
    if(verifyinput1===storedonevalue && verifyinput2===storedsecondvalue){
         window.location.href='form3.html';
    }
    else{
        alert("you give wrong credentials to furhter");
    }
})