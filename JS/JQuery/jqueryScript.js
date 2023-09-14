$(document).ready(function () {
    console.log('This is JQuery');

    // console.log($)
    // console.log(jQuery)
    // element selector
    // $('selector').action(); //syntax of JQuery
    // $('p').click(function () {
    //     console.log('You clicked on p tag');
    //     $(this).hide(); //this is used to hide the p tag on which you clicked
    // }); //once you click on p tag it will show you the function
    // //element selector
    // $('p').click(function () {
    //     $(this).hide(); //this is used to hide the p tag on which you clicked
    // }); //once you click on p tag it will show you the function
    // //id selector
    // $('#first').hide(); //this will hide the first p tag
    // //class selector
    // $('.cnd').hide(); //this will hide the second p tag



    // //multiple selector
    // $('p, #first').hide(); //this will hide the first and second p tag
    // // * selector
    // $('*').click(); //this will hide all the elements
    // //element selector
    // $('p:first').click();
    // $('element.className').click();
    // //hide and show
    // $('#first').hide(1000); //this will hide the first p tag in 1 sec
    // $('#first').show(1000); //this will show the first p tag in 1 sec
    // //toggle
    // $('#first').toggle(1000); //this will toggle the first p tag in 1 sec
    // //fade
    // $('#first').fadeOut(1000); //this will fade the first p tag in 1 sec
    // $('#first').fadeIn(1000); //this will fade the first p tag in 1 sec
    // $('#first').fadeToggle(1000); //this will fade the first p tag in 1 sec
    // //slide
    // $('#first').slideUp(1000); //this will slide the first p tag in 1 sec
    // $('#first').slideDown(1000); //this will slide the first p tag in 1 sec
    // $('#first').slideToggle(1000); //this will slide the first p tag in 1 sec
    // //animate
    // $('#first').animate({
    //     opacity: '0.5',
    //     height: '150px',
    //     width: '150px'
    // }, 1000); //this will animate the first p tag in 1 sec
    // //callback
    // $('#first').animate({
    //     opacity: '0.5',
    //     height: '150px',
    //     width: '150px'
    // }, 1000, function () {
    //     console.log('Animation completed');
    // }); //this will animate the first p tag in 1 sec
    // //stop
    // $('#first').stop(); //this will stop the animation of first p tag
    // //chaining
    // $('#first').css('color', 'red').slideUp(2000).slideDown(2000); //this will change the color of first p tag to red and then slide up and then slide down
    // //get
    // console.log($('#first').text()); //this will get the text of first p tag
    // console.log($('#first').html()); //this will get the html of first p tag
    // //set
    // $('#first').text('This is new text'); //this will set the text of first p tag
    // $('#first').html('<b>This is new text</b>'); //this will set the html of first p tag
    // //attr
    // console.log($('input').val()); //this will get the value of input tag
    // console.log($('a').attr('href')); //this will get the href of a tag
    // $('a').attr('href', 'https://www.google.com/'); //this will set the href of a tag
    // //add class
    // $('#first').addClass('cnd'); //this will add the class cnd to first p tag
    // //remove class
    // $('#first').removeClass('cnd'); //this will remove the class cnd from first p tag
    // //toggle class
    // $('#first').toggleClass('cnd'); //this will toggle the class cnd of first p tag
    // //before
    // $('#first').before('<p>This is before</p>'); //this will add the p tag before first p tag
    // //after
    // $('#first').after('<p>This is after</p>'); //this will add the p tag after first p tag
    // //append
    // $('#first').append('<p>This is append</p>'); //this will add the p tag inside first p tag
    // //prepend
    // $('#first').prepend('<p>This is prepend</p>'); //this will add the p tag inside first p tag
    // //empty
    // $('#first').empty(); //this will empty the first p tag
    // //remove
    // $('#first').remove(); //this will remove the first p tag
    // //wrap
    // $('#first').wrap('<div></div>'); //this will wrap the first p tag inside div tag
    // //parent
    // console.log($('#first').parent()); //this will get the parent of first p tag
    // //parents
    // console.log($('#first').parents()); //this will get the parents of first p tag
    // //parentUntil
    // console.log($('#first').parentsUntil('body')); //this will get the parents of first p tag until body tag
    // //children
    // console.log($('#first').children()); //this will get the children of first p tag
    // //siblings
    // console.log($('#first').siblings()); //this will get the siblings of first p tag
    // //next
    // console.log($('#first').next()); //this will get the next of first p tag
    // //nextAll
    // console.log($('#first').nextAll()); //this will get the nextAll of first p tag
    // //nextUntil
    // console.log($('#first').nextUntil('#third')); //this will get the nextUntil of first p tag
    // //prev
    // console.log($('#first').prev()); //this will get the prev of first p tag
    // //prevAll
    // console.log($('#first').prevAll()); //this will get the prevAll of first p tag
    // //prevUntil
    // console.log($('#first').prevUntil('#third')); //this will get the prevUntil of first p tag
    // //first
    // console.log($('p').first()); //this will get the first p tag
    // //last
    // console.log($('p').last()); //this will get the last p tag
    // //eq
    // console.log($('p').eq(1)); //this will get the second p tag
    // //filter
    // console.log($('p').filter('#first')); //this will get the first p tag
    // //not
    // console.log($('p').not('#first')); //this will get the all p tag except first p tag
    // //ajax
    // $.ajax({ //this is the syntax of ajax
    //     url: 'https://jsonplaceholder.typicode.com/posts', //this is the url of api
    //     method: 'GET', //this is the method of api
    //     success: function (data) { //this is the success function of api
    //         console.log(data); //this will show the data of api
    //     },
    //     error: function (error) { //this is the error function of api
    //         console.log(error); //this will show the error of api
    //     }
    // });

    //event in JQuery
    //1. mouse event = click, dblclick, mouseenter, mouseleave, mouseover, mouseout, mousemove
    $('p').on({
        dblclick: function () { //this will fire the function when first p tag is clicked
            console.log('Double Clicked', this);
        }
    });
    $('p').on({
        hover: function () { //this will fire the function when first p tag is hovered
            console.log('hover', this);
        }
    });
    //2. keyboard event = keypress, keydown, keyup
    //3. form event = submit, change, focus, blur
    //4. document/window event = load, resize, scroll, unload
    $('p').on({
        click: function () { //this will fire the function when first p tag is clicked
            console.log('Clicked', this);
        },
        mouseleave: function () { //this will fire the function when first p tag is clicked
            console.log('Mouse Leave', this);
        }
    });
    // $('#dummy').hide(5000, function () {
    //     console.log('Hide Completed');
    // });
    // $('#dummy').show(5000, function () {
    //     console.log('Show Completed');
    // });
    // $('#btn').toggle(5000, function () {
    //     console.log('Toggle Completed');
    // });
    // $('#btn').click(5000, function () {
    //     $('#dummy').toggle(5000, function () {
    //         console.log('dummy Completed');
    //     });
    // });
    //     $('#btn').click(5000, function () {
    //         $('#dummy').fadeIn(5000);
    //         $('#dummy').fadeOut(5000);
    //         $('#dummy').fadeToggle(5000);
    //     });
    // $('#dummy').slideUp(5000, function () {
    //     console.log('Done');
    // });
    //add anaimations
    $('#btn').click(function () {
        $('#dummy').animate({
            width: '500px',
            height: '500px',
            opacity: '0.5',
            marginLeft: '100px',
            marginTop: '100px'
        }, 5000, function () {
            console.log('Done');
        });
    });
    // //DOM manipulation
    // $('#dummy').text('Hello World'); //this will change the text of dummy div
    $('#dummy').html('<h1>Hello World Again Changed</h1>'); //this will change the html of dummy div
    // //Form manipulation
    // $('#txtArea').val('Modified with JQuery!'); //this will change the value of dummy div
    // //Empty the form
    // $('dummy').empty(); //this will empty the dummy div
    // //Remove the form
    // $('btn').remove(); //this will remove the dummy div
    // //Add the class name in form
    // $('inp').addClass('inputTag'); //this will add the button in dummy div
    // $('inp').click(function () {
    //     console.log(this);
    // }); //this will add the button in dummy div
    //add CSS using JQuery
    $('dummy').css({
        'background-color': 'red',
        'color': 'white',
        'font-size': '20px'
    });
    //AJAX using JQuery
    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/posts',
        method: 'GET',
        success: function (data) {
            console.log(data);
        }
    });
    $.get('https://code.jquery.com/jquery-3.7.0.min.js', function (data, status) {
        alert('Data: ' + data + '\nStatus: ' + status);
        console.log(data);
    });
    // $.post('https://code.jquery.com/jquery-3.7.0.min.js', { name: 'John', Age: '30' }, function (data, status) {
    //     alert('Data: ' + data + '\nStatus: ' + status);
    //     console.log(data);
    // });

});