function ConfirmPassword(password1,password2)
{
    if(password1==password2)
    {
        return true;
    }
    else
    {
        return false;
    }
}

export {ConfirmPassword};