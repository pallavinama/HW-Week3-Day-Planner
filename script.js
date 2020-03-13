console.log("Testing script file");
$(document).ready( function(){
    console.log("Testing Document Ready");
})
var NowMoment = moment();
var eDisplayMoment = document.getElementById('currentDay');
eDisplayMoment.innerHTML = NowMoment.format('dddd, MMMM Do YYYY');
console.log("testing");
