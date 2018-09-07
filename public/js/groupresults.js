
console.log('group results js loaded');
console.log(groupuser);


getGroupID(groupuser).then((data) => {
    getGroupResults(data).then((data) => {
        processedUsers = [];
        for (let i = 0; i < data.length; i++) {
            let userId = data[i].id;
            let groupUserId = data[i].group_users[0].id;
            let userName = data[i].name;
            let groupName = data[i].group_users[0].group.name;
            let answersArray = data[i].group_users[0].group_user_answers;
            getUserScore(answersArray).then(data => {
                let personality = personalityType(data);
                let results = data;
                let user = {
                    userId: userId,
                    groupUserId: groupUserId,
                    name: userName,
                    group: groupName,
                    personality: personality,
                    data: results
                }
                processedUsers.push(user);
                
            })
            
        }
        console.log(processedUsers);

        // create functions that use processedUsers and call them here

        // for the current user, compare groupuser to groupUserId in processedUsers

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

function personalityType(data) {
    let personalitytype = '';
    data['IE'] += 30;
    data['SN'] += 12;
    data['FT'] += 30;
    data['JP'] += 18; 
    if (data['IE'] > 24) {
        personalitytype += 'E';
    } else {
        personalitytype += 'I';
    }

    if (data['SN'] > 24) {
        personalitytype += 'N';
    } else {
        personalitytype += 'S';
    }

    if (data['FT'] > 24) {
        personalitytype += 'T';
    } else {
        personalitytype += 'F';
    }

    if (data['JP'] > 24) {
        personalitytype += 'P';
    } else {
        personalitytype += 'J';
    }

    return personalitytype;
}
