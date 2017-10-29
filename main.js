$('#contact-form').submit((e) => {
    var name = document.getElementById('inputName'),
        email = document.getElementById('inputEmail'),
        message = document.getElementById('inputMessage');
    
    if(!name.value || !email.val || !message.value) {
        alert('Please enter your name, email, and a message.');
    } else {
        $.post('https: //formspree.io/jbedilio@yahoo.com', {data: $(this).serialize()}, "json");
        e.preventDefault();
        $(this).get(0).reset();
        alert('Success, message sent!  Thank you.');
    };
});