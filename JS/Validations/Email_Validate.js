function ValidateEmail(mail) 
{
    var format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(mail.value.match(format))
    {
        return true;
    }
    else
    {
        return false;
    }
}

export {ValidateEmail};