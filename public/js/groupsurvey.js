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
        let radioTwo = $('<input>');
        radioTwo.addClass("form-check-input radio");
        radioTwo.attr({"type": "radio", "name": (data[i].id), "value": 2, "data-question": data[i].id});
        let radioThree = $('<input>');
        radioThree.addClass("form-check-input radio");
        radioThree.attr({"type": "radio", "name": (data[i].id), "value": 3, "data-question": data[i].id});
        let radioFour = $('<input>');
        radioFour.addClass("form-check-input radio");
        radioFour.attr({"type": "radio", "name": (data[i].id), "value": 4, "data-question": data[i].id});
        let radioFive = $('<input>');
        radioFive.addClass("form-check-input radio");
        radioFive.attr({"type": "radio", "name": (data[i].id), "value": 5, "data-question": data[i].id});
        
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
    console.log('click');
    var res = $('.radio:checked');
    for (let i = 0; i < res.length; i++) {
        console.log(res[i]);
        let questionid = res[i].name;
        let value = res[i].value;
        console.log("questionid = " + questionid);
        console.log("value = " + value);       
        
    }
})