console.log("login page js loaded");

var submitBtn = $('#loginSubmit');
var inputEmail = $('#inputEmail');


function loginProcess(email) {
    console.log(email);
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
            console.log("user loaded");
        } else {
            console.log("need to create name field");
        }
        
    })
}




submitBtn.on("click", () => {
    event.preventDefault();
    loginProcess(inputEmail.val())
});