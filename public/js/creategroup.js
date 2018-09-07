console.log('Hi Peter');
console.log(userid);

let counter = 1;

$("#addrow").on("click", function () {
    let newRow = $("<tr>");
    
    let cellOne = $('<td>');
    let inputOne = $('<input>');
    inputOne.attr({"type": "mail", "name": "email" + counter});
    inputOne.addClass("form-control");
    cellOne.append(inputOne);

    let cellTwo = $('<td>');
    let inputTwo = $('<input>');
    inputTwo.attr({"type": "name", "name": "name" + counter});
    inputTwo.addClass("form-control");
    cellTwo.append(inputTwo);

    newRow.append([cellOne, cellTwo]);
    $("table.order-list").append(newRow);
    counter++;
});

$('#submitBtn').on('click', (e) => {
    e.preventDefault();
    console.log('yolo bitches');
})