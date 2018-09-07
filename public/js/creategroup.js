let counter = 1;

$("#addrow").on("click", function () {
    let newRow = $("<tr>");
    
    let cellOne = $('<td>');
    let inputOne = $('<input>');
    inputOne.attr({"type": "mail", "name": "email" + counter, "data-field": "email"});
    inputOne.addClass("form-control user-input");
    cellOne.append(inputOne);

    let cellTwo = $('<td>');
    let inputTwo = $('<input>');
    inputTwo.attr({"type": "name", "name": "name" + counter, "data-field": "name"});
    inputTwo.addClass("form-control user-input");
    cellTwo.append(inputTwo);

    newRow.append([cellOne, cellTwo]);
    $("table.order-list").append(newRow);
    counter++;
});

$('#submitBtn').on('click', (e) => {
    e.preventDefault();
    let groupname = $('#groupNameInput').val();
    createGroup(groupname).then((data) => {
        let groupid = data;
        let userData = $(".user-input");
        for (let i = 0; i < userData.length; i += 2) {
            user = {};
            user[userData[i].attributes['data-field'].value] = userData[i].value;
            user[userData[i + 1].attributes['data-field'].value] = userData[i + 1].value;
            createUser(user).then((data) => {
                createGroupUser(groupid, data).then(data => {
                    console.log("processing complete");
                })
            })
        }
        createGroupUser(groupid, userid).then(data => {
            document.location.replace('/dashboard');
        })
    });    
})

function createGroup(name) {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: "/api/group",
            type: "POST",
            data: { name: name }
        }).then(data => {
            resolve(data.id);
        });        
    })
}

function createUser(userData) {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: "/api/user/newuser",
            type: "POST",
            data: userData
        }).then(data => {
            resolve(data[0].id);
        });        
    })
}

function createGroupUser(groupId, userId) {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: "/api/groupuser",
            type: "POST",
            data: { groupId: groupId,
                    userId: userId
            }
        }).then(data => {
            resolve(data[0].id);
        });        
    })
}