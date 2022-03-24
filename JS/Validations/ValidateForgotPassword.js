import {ValidateEmail} from './Email_Validate';
import {CheckPassword} from './Password_Validate';
import {ConfirmPassword} from './Confirm_Password_Validate';

function ValidateForgotPassword() 
{
    var mail = document.Forgot_Password_Form.Email_Input;
    var password = document.Forgot_Password_Form.Password_Input;
    var confirm_password = document.Forgot_Password_Form.Confirm_Password_Input;

    if(!ValidateEmail(mail))
    {
        alert('Invalid Email Format detected!!!');
        return false;
    }
    else if(!CheckPassword(password))
    {
        alert('Invalid Password Format Detected!!!');
        return false;
    }
    else if(!ConfirmPassword(password,confirm_password))
    {
        alert('Password Mismatch detected!!!')
        return false;
    }

    return true;
}

export {ValidateForgotPassword};