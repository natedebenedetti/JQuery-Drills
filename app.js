$(document).ready(function () { //jQuery short hand for DOM Content Loaded

    $('form').append('<input type="submit" id="btnSubmit" value="Submit" disabled></input>') //creates a disabled button with the id btnSubmit that is labeled submit and appends it to the from element created in my index.html

    $('#formTxt1').keypress(function () { //when keys are pressed within the input with id formTxt1 the disabled attribute on the button with id btnSubmit is removed.
        $('#btnSubmit').removeAttr('disabled');
        
    });

    $('#btnSubmit').click(function () { //jquery event listener
        event.preventDefault(); //this prevents the default form behavior of refreshing the screen from happening and breaking the code below it.
        let formVal = $('input#formTxt1').val();  //creates variable that holds the value typed into the input with id formTxt1 that I created on my index.html page.
        alert(formVal); // and alerts that value when the button is clicked.
        $('<li>' + formVal + '</li>').appendTo('ul').css('color', 'rgb('+ randomColor() + ')'); // appends a list item to the unordered list, containing whatever was typed into the text field of the form and colors the text with a random color.
        
        $('li').dblclick(function () { //function to remove a list item when double clicked
            event.target.remove(''); //ensures that only the list item clicked is removed not all list items.
        });
    });

    $('<ul></ul>').appendTo('body'); // creates an unorderd list container and appends it to the body

    function randomColor() { // function for creating the random color 
        let R = Math.floor(Math.random() * 245);
        let G = Math.floor(Math.random() * 250);
        let B = Math.floor(Math.random() * 256);
        return R + ',' + G + ',' + B;
    };
    
    
});