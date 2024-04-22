//const submitButton = document.getElementById("contactForm");
//submitButton.addEventListener('click', validateData);

function validateData(){
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let message = document.getElementById('message').value;
    let topic = document.getElementById('topic').value;

    //Console Log
    console.log('Test Email: ', email, ' = ', validateEmail(email));
    console.log('Test Phone: ', phone, ' = ', validatePhone(phone));    

    //Validate Email
    if(email != null && validateEmail(email)){
        //Validate Phone
        if(phone != null && validatePhone(phone)){
            //Validate Topic
            let responseMessage = getResponseForTopic(topic);
            if(topic === 'none'){
                alert(responseMessage)
            }
            else{                            
                alert('Thank you ' + name + '!\nEmail: ' + email +
                '\nPhone: ' + phone + '\nMessage: ' + message +
                '\nTopic: ' + topic + '\n' + responseMessage);
            }
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
    //const regex = /@/;
    //return regex.test(email);
    return email.includes('@');
}

function validatePhone(phone){
    //const regex = /\d/;
    //return regex.test(phone);    
    return phone.length >= 7;
}

function getResponseForTopic(topic){
    console.log('Test Topic: ', topic);
    let responseMessage = '';

    switch (topic){
        case 'none':
            responseMessage = 'Please choose a topic!';
            break;
        case 'question':
            responseMessage = 'Thank you for your Question!';
            break;
        case 'answer':
            responseMessage = 'Thank you for your Answer!';
            break;
        case 'issue':
            responseMessage = 'We will review your Issue!';
            break;
        case 'request':
            responseMessage = 'We will review your Request!';
            break;
        case 'recommendation':
            responseMessage = 'Thank you for your Recommendation!';
            break;
        default:
            responseMessage = 'Thank you for your visiting!'
    }

    return responseMessage;
}