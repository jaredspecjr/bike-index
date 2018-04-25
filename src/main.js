import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import {BikeApi} from './BikeApi.js';

$(document).ready(function(){
  $("#bikeLocation").click(function(){
    let city = $("#location").val();
    let stoleness = $("#checkBox").val();
    $("#location").val("");
    $("#checkBox").val("");
    console.log($("#location").val());
    let bikeApi = new BikeApi();
    let promise = bikeApi.bikePromise(city, stoleness);

    promise.then(function(response){
      let body = JSON.parse(response);
      let i;
      for(i = 0; i <= body.bikes.length; i++){
        $(".showBikes").append(`${body.bikes[i].title}` + "<br>");
      }
    }, function(error){
      $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    });
  });
});
