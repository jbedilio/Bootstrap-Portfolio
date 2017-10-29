$('#contact-form').on('submit', e => {
    e.preventDefault();
    var name = $('#inputName').val().trim();
    var email = $('#inputEmail').val().trim();
    var message = $('#inputMessage').val().trim();

    if (name.val("") || email.val("") || message.val("")) {
        alert('Please enter your name, email, and message.');
    } else {
        $.post({url: "https://formspree.io/jbedilio@yahoo.com", data: $(this).serialize(), datatype: 'json'});
        $('#inputName').val("");
        $('#inputEmail').val("");
        $('#inputMessage').val("");
        alert('Message sent.');
    }
});