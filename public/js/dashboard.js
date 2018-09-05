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

        surveybtn.addClass("btn btn-success");
        surveybtn.data("groupid", groups[i].group.id)
        surveybtn.text('Take Survey');
        completefield.append(surveybtn);

        resultbtn.addClass("btn btn-primary");
        resultbtn.data("groupid", groups[i].group.id);
        resultbtn.text('See Results');
        resultsfield.append(resultbtn);

        row.append([groupfield, surveyfield, completefield, resultsfield]);
        
        $('#groups-tbl').append(row)



        
        console.log(groups[i].group.name);
    }
});