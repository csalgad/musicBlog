//SETUP

class contactForm{    

    constructor(name, email, phone, message){
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.message = message;        
    }

    instantiateForm(){
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const phoneInput = document.getElementById('phone');
        const messageInput = document.getElementById('message');

        nameInput.value = this.name;
        emailInput.value = this.email;
        phoneInput.value = this.phone;
        messageInput.value = this.message;
    }

    validateForm(){        
        let tempName = document.getElementById('name').value;
        let tempEmail = document.getElementById('email').value;
        let tempPhone = document.getElementById('phone').value;
        let tempMessage = document.getElementById('message').value;
        let tempTopic = document.getElementById('topic').value;
        let tempLocation = document.getElementById('location').value;

        //Console Log
        console.log('Test Email Validate: ', tempEmail, ' = ', this.validateEmail(tempEmail));
        console.log('Test Phone Validate: ', tempPhone, ' = ', this.validatePhone(tempPhone));

        //Validate Email
        if(tempEmail != null && this.validateEmail(tempEmail)){
            //Validate Phone
            if(tempPhone != null && this.validatePhone(tempPhone)){
                //Validate Topic
                let responseMessage = this.getResponseForTopic(tempTopic);
                if(tempTopic === 'none'){
                    alert(responseMessage)
                }
                else{                            
                    this.setForm(tempName, tempEmail, tempPhone, tempMessage, tempTopic, tempLocation);
                    this.displayForm(responseMessage);
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

    validateEmail(email){
        return email.includes('@');
    }
    
    validatePhone(phone){  
        return phone.length >= 7;
    }

    getResponseForTopic(topic){
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

    setForm(nameInput, emailInput, phoneInput, messageInput, topicInput, locationInput){
        this.name = nameInput;
        this.email = emailInput;
        this.phone = phoneInput;
        this.message = messageInput;
        this.topic = topicInput;
        this.location = locationInput;
    }

    displayForm(responseMessage){
        alert('Thank you ' + this.name + '!\nEmail: ' + this.email +
            '\nPhone: ' + this.phone + '\nLocation: ' + this.location + 
            '\nMessage: ' + this.message + '\nTopic: ' + this.topic + '\n' + responseMessage);
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

    mainContactForm.instantiateForm();
};

function validateData(){
    mainContactForm.validateForm();
}

//MAIN

const mainContactForm = new contactForm("Chris Salgado", "chrisasalgado@aol.com", "7147120693", "Sample message");