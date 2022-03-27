function ValidateName(name) {
    var format = /^[a-zA-z\s]+$/;
    if (name.value.match(format)) 
    {
        return true;
    }
    else
    {
        return false;
    }
}

export {ValidateName};