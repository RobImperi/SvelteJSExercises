let validationConf    = {};
let validationPattern = {};

validationPattern.required = function(value){
    console.log("validating required rule for " + value)
    return value != undefined && value != null && value !== "";
}

validationPattern.email = function(value){
    console.log("validating email rule for " + value)
    return /^[a-zA-Z0-9.-]*(@){1}[a-zA-Z]*(.){2,3}$/.test(value);
}

validationConf= {
    "001" : {
        message       : validationPattern.required,
        email         : validationPattern.email,
        emailConferma : validationPattern.email

    },
    "002" : {
        emailContatto : validationPattern.email
    }
}




export default validationConf;