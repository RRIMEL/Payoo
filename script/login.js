document.getElementById("login-btn").addEventListener("click",function(event){
    event.preventDefault();
    const accountNumber = document.getElementById("Account-Numbrer").value;
    const pin = document.getElementById("Pin").value;
    const converrtedPin=parseInt(pin)
    if(accountNumber.length===11){
        if(converrtedPin===1234){
            window.location.href="../main.html"
        }
        else{
            alert("pin thik nai")
        }
    }
    else{
        alert("11 ta hoy nai")
    }
}) 