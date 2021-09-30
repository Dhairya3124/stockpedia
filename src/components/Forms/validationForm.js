export default function validateInfo(values) {
    let errors = [];
    
    if(!values.username.trim()){
        errors.username = 'Username Required';
    }
    if(!values.email){
        errors.email = 'Email Required';
    }else if(!/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(values.email))
    {
        errors.email = 'Email is invalid';
    }
    if(!values.password){
        errors.password = 'Password Required';
    }else if(values.password.length < 8){
        errors.password = 'Password must be at least 8 characters';
    }
    if(!values.password2){
        errors.password2 = 'Password Required';
    }else if(values.password2 !== values.password){
        errors.password2 = 'Password must be the same';
    }
return errors;

}