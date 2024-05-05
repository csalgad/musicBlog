//const submitButton = document.getElementById("contactForm");
//submitButton.addEventListener('click', validateData);

class contactForm{
    constructor(name, email, phone){
        
    }

}

const locationOptions = [
    {value: "usa", text: "United States"},
    {value:"can", text: "Canada"}, 
    {value: "mex", text: "Mexico"},
];

const selectLocation = document.getElementById('location');

function addOption(option){
    console.log('Test option: ', option.value, ' and ', option.text);
    const optionElement = document.createElement("option");
    optionElement.value = option.value;
    optionElement.textContent = option.text;
    selectLocation.appendChild(optionElement);
};

window.onload = function(){
    console.log('On Load');

    locationOptions.forEach(option => addOption(option));
};

function validateData(){
    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let phone = document.getElementById('phone');

    //Console Log
    console.log('Test Email: ', email, ' = ', validateEmail(email));
    console.log('Test Phone: ', phone, ' = ', validatePhone(phone));

    //Validate Email
    if(email != null && validateEmail(email)){
        //Validate Phone
        if(phone != null && validatePhone(phone)){
            alert('Thank you ' + name + ' and data is valid!');
        }
        else{
            alert('Phone is not valid');
        }
    }
    else{
        alert('Email is not valid!');
    }
};

function validateEmail(email){
    const regex = /@/;
    return regex.test(email);
};

function validatePhone(phone){
    const regex = /\d/;
    return regex.test(phone);
};