$(document).ready(function() {
    $('#registerButton').click(function() {
        const signUpDetails = {
            username: $('#name').val(),
            email: $('#email').val(),
            password: $('#password').val(),
            phone: $('#number').val()
        };

        console.log(signUpDetails);

        if (!signUpDetails.username || !signUpDetails.email || !signUpDetails.phone || !signUpDetails.password) {
            alert('Please fill in all fields.');
            return;
        }

        if (signUpDetails.password !== $('#confirmPassword').val()) {
            alert('Passwords do not match.');
            return;
        }

        $.ajax({
            url: 'https://hotelrev-eight.vercel.app/hotel/api/auth/signup',
            method: 'POST',
            contentType: "application/json",
            data: JSON.stringify(signUpDetails),
            success(response) {
                console.log(response);
                alert("Signup successful, login now.");
            },
            error(xhr) {
                console.log(xhr.responseJSON);
                alert('Signup failed.');
            }
        });
    });
});