"use strict";


// PART 1: SHOW A FORTUNE

function showFortune(evt) {
    // evt.preventDefault(); ~ even thought this redirects, b/c it's a btn not a form, this doesn't move pages
    // TODO: get the fortune and show it in the #fortune-text div
    $.get('/fortune', function (results) {
        $('#fortune-text').html(results);
        console.log("Received fortune"); // doesn't print on actual page; prints in console
        }
    );
}

$('#get-fortune-button').on('click', showFortune);





// PART 2: SHOW WEATHER

function showWeather(evt) {
    evt.preventDefault();

    let url = "/weather.json";
    let formData = {"zipcode": $("#zipcode-field").val()};

    $.get(url, formData, function (results) {
        $('#weather-info').html(results.forecast);
        console.log("Retrieved forecast");
        }
    );
}

$("#weather-form").on('submit', showWeather); //set an event listener; using JQuery




// PART 3: ORDER MELONS

function showOrderResults(order) {

    $('#order-status').html(order.msg);
    // if order.code is ERROR
    // put in some JS here that turns the text red
}

function orderMelons(evt) {
    evt.preventDefault();

    let formValues = $('#order-form').serialize();

    $.post("/order-melons.json", formValues, showOrderResults);

    // TODO: show the result message after your form
    // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
}

$("#order-form").on('submit', orderMelons);


