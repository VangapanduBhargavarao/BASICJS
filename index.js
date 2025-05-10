const submitbtnn=document.getElementById('submitbtn')
submitbtnn.addEventListener("click",function(){
    const input1=document.getElementById("input1").value;
    const input2=document.getElementById('input2').value;
    const errorelement=document.getElementById('error');
    if(!input1 || !input2){
        errorelement.textContent="both are required";
        return;
    }
    else{
        localStorage.setItem('input1',input1);
        localStorage.setItem('input2',input2);
        alert("data save");
        window.location.href='form2.html';
    }
})


