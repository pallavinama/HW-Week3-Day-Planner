$(document).ready( function(){
    console.log("Testing Document Ready");
})

// Code to display current date at the Top section

var NowMoment = moment();
var eDisplayMoment = document.getElementById('currentDay');
eDisplayMoment.innerHTML = NowMoment.format('dddd, MMMM Do YYYY');


