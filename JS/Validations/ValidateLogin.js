import {ValidateEmail} from './Email_Validate';
import {CheckPassword} from './Password_Validate';

function ValidateLoginPage()
{
    var mail = document.LogIn_Form.Email_Input;
    var password = document.LogIn_Form.Password_Input;

    if(ValidateEmail(mail) && CheckPassword())
    {
        return true;
    }
    else if(!ValidateEmail(mail) && CheckPassword())
    {
        alert('Invalid Email Format detected!!!')
        return false;
    }
    else if(ValidateEmail(mail) && !CheckPassword())
    {
        alert('Invalid Password Format detected!!!')
        return false;
    }
    else if(!ValidateEmail(mail) && !CheckPassword())
    {
        alert('Invalid Email Format & Password Format detected!!!')
        return false;
    }
}

export {ValidateLoginPage};
