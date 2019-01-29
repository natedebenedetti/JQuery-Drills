$(document).ready(function () { 

    $('form').append('<input type="submit" id="btnSubmit" value="Submit" disabled></input>') //creates a disabled button with the id btnSubmit that is labeled submit and appends it to the from element created in my index.html

    $('#formTxt1').keypress(function () { //when keys are pressed within the input with id formTxt1 the disabled attribute on the but with id btnSubmit is removed.
        $('#btnSubmit').removeAttr('disabled');
    });

    $('body').append('<div></div>');

    $('#btnSubmit').click(function () { //jquery event listener
        formVal = $('input#formTxt1').val();  //creates variable that holds the value typed into the input with id formTxt1 that I created on my index.html page.
        alert(formVal); // and alerts that value when the button is clicked.
        
    });

    




});