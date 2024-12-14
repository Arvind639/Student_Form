document.getElementById("res").style.color = "red";
function val(digit){
    if(digit.value.length > 10){
        document.getElementById("res").innerText = "Please enter only 10 digits!"
    }
    else{
        document.getElementById("res").innerText = "";
    }
}


function nam(alpha){
    if(alpha.value.length >36){
        document.getElementById("res").innerText = "Please enter under 32 words!";
    }
    else{
        document.getElementById("res").innerText = "";
    }
}

function MobNum(num){
    if(num.value.length >10){
        document.getElementById("res").innerText = "Please enter only 10 digit!";
    }
    else{
        document.getElementById("res").innerText = "";
    }
}



