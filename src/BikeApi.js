class BikeApi{
  constructor(){}

  bikePromise(city, stoleness){
    return new Promise(function(resolve, reject){
      let request = new XMLHttpRequest();
      let url = `https://bikeindex.org:443/api/v3/search?location=${city}&distance=10&stolenness=${stoleness}`;
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
  }
}
export {BikeApi}
