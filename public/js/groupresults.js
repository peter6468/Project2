
console.log('group results js loaded');
console.log(groupuser);


getGroupID(groupuser).then((data) => {
    getGroupResults(data).then((data) => {
        console.log(data);
        for (let i = 0; i < data.length; i++) {
            let userId = data[i].id;
            let userName = data[i].name;
            let groupName = data[i].group_users[0].group.name;
            let answersArray = data[i].group_users[0].group_user_answers;
            getUserScore(answersArray).then(data => {
                console.log(userId);
                console.log(userName);
                console.log(groupName);
                console.log(answersArray);
                data['JP'] += 30;
                data['SN'] += 12;
                data['FT'] += 30;
                data['JP'] += 18; 
                console.log(data);
            })
            
        }
    })
})


function getGroupID(group_user) {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: "/api/groupuser/" + group_user,
            type: "GET"
        }).then(data => {
            resolve(data.groupId);
        });        
    })
}

function getGroupResults(group_id) {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: "/api/group/" + group_id + "/answers",
            type: "GET"
        }).then(data => {
            resolve(data);
        });        
    })
}

function getUserScore(answerArray) {
    return new Promise((resolve, reject) => {
        let data = JSON.stringify(answerArray);
        $.ajax({
            url: "/api/calcScore",
            type: "POST",
            data: { answers: data }
        }).then(data => {
            resolve(data);
        });
    })
}

// $.ajax({
//     url: "/api/groupuser/" + groupuser,
//     type: "GET"
// }).then((data) => {
//     groupid = data.groupId;
//     console.log(groupid);
// });



// $.ajax({
//     url: "api/user/" + userid + "/group",
//     type: "GET"
// }).then((data) => {
//     console.log(data)
//     var groups = data[0].group_users; 
//     for (let i = 0; i < groups.length; i++) {
//         let row = $('<tr>');
//         let groupfield = $('<td>');
//         let surveyfield = $('<td>');
//         let completefield = $('<td>');
//         let resultsfield = $('<td>');
//         let surveybtn = $('<button>');
//         let resultbtn = $('<button>');

//         groupfield.text(groups[i].group.name);
//         surveyfield.text("CHRT");

//         surveybtn.addClass("btn btn-success survey-btn");
//         surveybtn.attr("data-surveygroupid", groups[i].group.id)
//         surveybtn.text('Take Survey');
//         completefield.append(surveybtn);

//         resultbtn.addClass("btn btn-primary result-btn");
//         resultbtn.attr("data-resultgroupid", groups[i].group.id);
//         resultbtn.text('See Results');
//         resultsfield.append(resultbtn);

//         row.append([groupfield, surveyfield, completefield, resultsfield]);
        
//         $('#groups-tbl').append(row)
       
//         console.log(groups[i].group.name);
//     }
// });