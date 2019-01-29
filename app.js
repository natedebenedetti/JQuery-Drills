$(document).ready(function () {

    $('form').append('<input type="submit" id="btnSubmit" value="Submit" disabled></input>') //creates a disabled button with the id btnSubmit that is labeled submit and appends it to the from element created in my index.html

    $('#formTxt1').keypress(function () { //when keys are pressed within the input with id formTxt1 the disabled attribute on the but with id btnSubmit is removed.
        $('#btnSubmit').removeAttr('disabled');
    });

    $('#btnSubmit').click(function () { //jquery event listener
        event.preventDefault(); //this prevents the default form behavior of refreshing the screen from happening and breaking the code below it.
        let formVal = $('input#formTxt1').val();  //creates variable that holds the value typed into the input with id formTxt1 that I created on my index.html page.
        alert(formVal); // and alerts that value when the button is clicked.
        $('div').append('<h2>' + formVal + '</h2>');

        $('h2').mouseover(function () {
            $('h2').
        })

    });

    $('body').append('<div></div>');










});