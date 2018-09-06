console.log('group survey js loaded');

console.log(groupuser);

// we are only supporting the one survey for now
const surveyid = 1;
const surveyTable = $('#survey-table-body');
const surveySubmit = $('#surveySubmit');

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
        radioOne.attr({"type": "radio", "name": (data[i].id), "value": 1, "data-question": data[i].id});
        // radioOne.prop('required', 'true');
        let radioTwo = $('<input>');
        radioTwo.addClass("form-check-input radio");
        radioTwo.attr({"type": "radio", "name": (data[i].id), "value": 2, "data-question": data[i].id});
        // radioTwo.prop('required', 'true');
        let radioThree = $('<input>');
        radioThree.addClass("form-check-input radio");
        radioThree.attr({"type": "radio", "name": (data[i].id), "value": 3, "data-question": data[i].id});
        // radioThree.prop('required', 'true');
        let radioFour = $('<input>');
        radioFour.addClass("form-check-input radio");
        radioFour.attr({"type": "radio", "name": (data[i].id), "value": 4, "data-question": data[i].id});
        // radioFourOne.prop('required', 'true');
        let radioFive = $('<input>');
        radioFive.addClass("form-check-input radio");
        radioFive.attr({"type": "radio", "name": (data[i].id), "value": 5, "data-question": data[i].id});
        // radioFive.prop('required', 'true');
        
        radioGrp.append([radioOne, radioTwo, radioThree, radioFour, radioFive]);
        options.append(radioGrp);

        leftTextField.text(data[i].left_text);
        rightTextField.text(data[i].right_text);

        row.append([leftTextField, options, rightTextField]);

        surveyTable.append(row);
    }
    console.log(data)
    
});

surveySubmit.on('click', () => {
    let data = [];
    let res = $('.radio:checked');
    for (let i = 0; i < res.length; i++) {
        let answer = {
            "groupUserId": groupuser,
            "surveyQuestionId": res[i].name,
            "value": res[i].value
        }
        console.log(answer);
        data.push(answer);
    }
    $.ajax({
        url: "/api/groupuser/" + groupuser + "/question",
        type: "POST",
        data: { 'postData': JSON.stringify(data) }
    }).then((res) => {
        console.log(res);
        window.location.replace('/dashboard');
    })
})