$("#submit").on("click", function () {

    //form validation
    function validateForm() {
      var isValid = true;

      $(".chosen-select").each(function () {

        if ($(this).val() === "") {
          isValid = false;
        }
      });
      return isValid;
    }

    //if all required fields are filled
    if (validateForm()) {
      //create an object of the users data

    } else {
      alert("Please fill out all fields before submitting!");
    }
  });
