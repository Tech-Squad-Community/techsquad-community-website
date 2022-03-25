import {ValidateEmail} from './Email_Validate';
import {CheckPassword} from './Password_Validate';
import {ValidateName} from './Name_Validate';
import {ConfirmPassword} from './Confirm_Password_Validate';

function ValidateRegistration(Registration_Form) 
{
    var name = Registration_Form.Name_Input.value;
    var mail = Registration_Form.Email_Input.value;
    var password = Registration_Form.Password_Input.value;
    var confirm_password = Registration_Form.Confirm_Password_Input.value;

    if(!ValidateName(name)) {
        alert('Invalid Name Format Detected');
        return false;
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
    else if(!ConfirmPassword(password,confirm_password))
    {
        alert('Password Mismatch detected!!');
        return false;
    }

    return true;
}

export {ValidateRegistration};