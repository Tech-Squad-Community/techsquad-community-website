import {ValidateEmail} from './Email_Validate';
import {CheckPassword} from './Password_Validate';
import {ValidateName} from './Name_Validate';
import {ConfirmPassword} from './Confirm_Password_Validate';

function ValidateRegistration() 
{
    var name = document.Registration_Form.Name_Input;
    var mail = document.Registration_Form.Email_Input;
    var password = document.Registration_Form.Password_Input;
    var confirm_password = document.Registration_Form.Confirm_Password_Input;

    if(!ValidateName(name)) {
        alert('Invalid Name Format Detected');
        return false;
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
    else if(!ConfirmPassword(password,confirm_password))
    {
        alert('Password Mismatch detected!!');
        return false;
    }

    return true;
}

export {ValidateRegistration};