import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';


$(document).ready(function(){
  $("#bikeLocation").click(function(){
    let city = $("#location").val();
    $("#location").val("");
    console.log($("#location").val());

    let promise = new Promise(function(resolve, reject){
      let request = new XMLHttpRequest();
      let url = `https://bikeindex.org:443/api/v3/search?location=${city}&distance=10&stolenness=proximity`;
      request.onload = function(){
        if(this.status === 200){
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();
    });

    promise.then(function(response){
      let body = JSON.parse(response);
      let i;
      for(i = 0; i <= body.bikes.length; i++){
        $(".showBikes").append(`${body.bikes[i].frame_model}` + "<br>");
      }
    }, function(error){
      $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    });
  });
});
