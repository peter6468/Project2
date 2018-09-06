console.log("dashboard js loaded");

console.log(userid);

$.ajax({
    url: "api/user/" + userid + "/group",
    type: "GET"
}).then((data) => {
    console.log(data)
    var groups = data[0].group_users; 
    for (let i = 0; i < groups.length; i++) {
        let row = $('<tr>');
        let groupfield = $('<td>');
        let surveyfield = $('<td>');
        let completefield = $('<td>');
        let resultsfield = $('<td>');
        let surveybtn = $('<button>');
        let resultbtn = $('<button>');

        groupfield.text(groups[i].group.name);
        surveyfield.text("CHRT");

        surveybtn.addClass("btn btn-success survey-btn");
        surveybtn.attr("data-surveygroupid", groups[i].group.id)
        surveybtn.text('Take Survey');
        completefield.append(surveybtn);

        resultbtn.addClass("btn btn-primary result-btn");
        resultbtn.attr("data-resultgroupid", groups[i].group.id);
        resultbtn.text('See Results');
        resultsfield.append(resultbtn);

        row.append([groupfield, surveyfield, completefield, resultsfield]);
        
        $('#groups-tbl').append(row)
       
        console.log(groups[i].group.name);
    }
});

$("#groups-tbl").on('click', '.survey-btn', () => {
    $('#groups-tbl [data-surveygroupid]').each(function(event) {
        var groupid = $(this).data('surveygroupid');
        getGroupUser(userid, groupid).then((data) => {
            $.ajax({
                url: "dashboard",
                type: "POST",
                data: {groupuser: data, action: 'groupsurvey'}
            }).then(() => {
                window.location.replace('/groupsurvey');
            })
        });
    });
})

$("#groups-tbl").on('click', '.result-btn', () => {
    $('#groups-tbl [data-resultgroupid]').each(function(event) {
        var groupid = $(this).data('resultgroupid');
        getGroupUser(userid, groupid).then((data) => {
            $.ajax({
                url: "dashboard",
                type: "POST",
                data: {groupuser: data, action: 'groupresults'}
            }).then(() => {
                window.location.replace('/groupresults');
            })
        });
    });
})

function getGroupUser(userid, groupid) {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: "api/groupuser/user/" + userid + "/group/" + groupid,
            type: "GET"
        }).then((data) => {
                resolve(data.id);
            }) ;
    });
}

$("#create-survey-btn").on('click', () => {
    window.location.replace('/creategroup');
})