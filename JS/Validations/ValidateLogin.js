import {ValidateEmail} from './Email_Validate';
import {CheckPassword} from './Password_Validate';

function ValidateLoginPage(LogIn_Form)
{
    var mail = LogIn_Form.Email_Input.value;
    var password = LogIn_Form.Password_Input.value;

    if(ValidateEmail(mail) && CheckPassword(password))
    {
        return true;
    }
    else if(!ValidateEmail(mail) && CheckPassword(password))
    {
        alert('Invalid Email Format detected!!!')
        return false;
    }
    else if(ValidateEmail(mail) && !CheckPassword(password))
    {
        alert('Invalid Password Format detected!!!')
        return false;
    }
    else if(!ValidateEmail(mail) && !CheckPassword(password))
    {
        alert('Invalid Email Format & Password Format detected!!!')
        return false;
    }
}

export {ValidateLoginPage};
