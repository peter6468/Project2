console.log("login page js loaded");

const submitBtn = $('#loginSubmit');
const inputEmail = $('#inputEmail');


function loginProcess(email) {
    return new Promise((resolve, reject) => {
        let user;
        $.ajax({
            url: "api/user",
            type: "GET"
        }).then((data) => {
            for (let i = 0 ; i < data.length; i++) {
                if (data[i].email === email) {
                    user = data[i];
                } 
            }

            if (user) {
                resolve(user);
            } else if (!$('#inputName').val()) {
                $('#username').removeClass('d-none');
                $('#inputName').prop('required', true);
                $('#alerttext').text("We could not find that user - please create a new account");
                $('#alerttext').css('color','red');
            } else {
                data = {
                    name: $('#inputName').val(),
                    email: $('#inputEmail').val()
                }
                $.ajax({
                    url: "api/user/newuser",
                    type: "POST",
                    data: data
                }).then((data) => {
                    user = data;
                    resolve(user);
                })
            }
        })
    })
}

submitBtn.on("click", () => {
    event.preventDefault();
    loginProcess(inputEmail.val()).then((result) => {
        console.log('here');
        console.log(result);
        if (result) {
            $.ajax({
                url: "login",
                type: "POST",
                data: result
            }).then(() => {
                window.location.replace('/dashboard');
            })
        }
    });
});