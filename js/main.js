 var posted = [1]
 function getData(url, func){
    var status = function (response) {
        if (response.status !== 200) {
          return Promise.reject(new Error(response.statusText))
        }
        return Promise.resolve(response)
      }
      var json = function (response) {
        return response.json()
      }
    fetch(url)
  .then(status)
  .then(json)
  .then(function (data) {
      func(data)
  })
  .catch(function (error) {
    console.log('error', error)
  })
}
function writeText(){
    getData('http://91.211.122.228:25565', function(d){
    for(var i = 0; i < d.names.length; i++){
      while(j <= posted.length){

      }
        document.body.innerHTML += '<div class="user flex-center"><h3>'+d.names[i].head+'</h3>'+'<p>'+d.names[i].num+'</p></div>'
    }
})
}