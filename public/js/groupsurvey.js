console.log('group survey js loaded');

console.log(groupuser);

// we are only supporting the one survey for now
const surveyid = 1;
const surveyTable = $('#survey-table-body');

$.ajax({
    url: "/api/survey/" + surveyid + "/question",
    type: "GET"
}).then((data) => {
    for (let i = 0; i < data.length; i++) {
        let row = $('<tr>');
        let leftTextField = $('<td>');
        let options = $('<td>');
        let rightTextField = $('<td>');

        let radioGrp = $('<div>');
        radioGrp.addClass("form-check form-check-inline");
        let radioOne = $('<input>');
        radioOne.addClass("form-check-input radio");
        radioOne.attr({"type": "radio", "name": ("q" + data[i].id), "value": 1, "data-question": data[i].id});
        let radioTwo = $('<input>');
        radioTwo.addClass("form-check-input radio");
        radioTwo.attr({"type": "radio", "name": ("q" + data[i].id), "value": 2, "data-question": data[i].id});
        let radioThree = $('<input>');
        radioThree.addClass("form-check-input radio");
        radioThree.attr({"type": "radio", "name": ("q" + data[i].id), "value": 3, "data-question": data[i].id});
        let radioFour = $('<input>');
        radioFour.addClass("form-check-input radio");
        radioFour.attr({"type": "radio", "name": ("q" + data[i].id), "value": 4, "data-question": data[i].id});
        let radioFive = $('<input>');
        radioFive.addClass("form-check-input radio");
        radioFive.attr({"type": "radio", "name": ("q" + data[i].id), "value": 5, "data-question": data[i].id});
        
        radioGrp.append([radioOne, radioTwo, radioThree, radioFour, radioFive]);
        options.append(radioGrp);

        leftTextField.text(data[i].left_text);
        rightTextField.text(data[i].right_text);

        row.append([leftTextField, options, rightTextField]);

        surveyTable.append(row);
    }
    console.log(data)
    // var groups = data[0].group_users; 
    // for (let i = 0; i < groups.length; i++) {
    //     let row = $('<tr>');
    //     let groupfield = $('<td>');
    //     let surveyfield = $('<td>');
    //     let completefield = $('<td>');
    //     let resultsfield = $('<td>');
    //     let surveybtn = $('<button>');
    //     let resultbtn = $('<button>');

    //     groupfield.text(groups[i].group.name);
    //     surveyfield.text("CHRT");

    //     surveybtn.addClass("btn btn-success survey-btn");
    //     surveybtn.attr("data-surveygroupid", groups[i].group.id)
    //     surveybtn.text('Take Survey');
    //     completefield.append(surveybtn);

    //     resultbtn.addClass("btn btn-primary result-btn");
    //     resultbtn.attr("data-resultgroupid", groups[i].group.id);
    //     resultbtn.text('See Results');
    //     resultsfield.append(resultbtn);

    //     row.append([groupfield, surveyfield, completefield, resultsfield]);
        
    //     $('#groups-tbl').append(row)
       
    //     console.log(groups[i].group.name);
    // }
});