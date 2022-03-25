function CheckPassword(inputtxt) 
{ 
    var passw =  /^[A-Za-z]\w{8,14}$/;
    if(inputtxt.value.match(passw)) 
    { 
        return true;
    }
    else
    { 
        return false;
    }
}

export {CheckPassword};