//const submitButton = document.getElementById("contactForm");
//submitButton.addEventListener('click', validateData);

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
}

function validateEmail(email){
    const regex = /@/;
    return regex.test(email);
}

function validatePhone(phone){
    const regex = /\d/;
    return regex.test(phone);
}