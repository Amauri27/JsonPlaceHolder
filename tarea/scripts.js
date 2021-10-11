var lat = document.getElementById('latitud').value;
var long = document.getElementById('longitud').value;
console.log(lat)
console.log(long)

const btnbuscar = document.getElementById('btnbuscar');
btnbuscar.addEventListener("click", ()=>{
  var lat = document.getElementById('latitud').value;
  var long = document.getElementById('longitud').value;
    fetch('https://us1.locationiq.com/v1/reverse.php?key=pk.243c37c7dc8623e5bab88b22259e51a8&lat='+lat+'&lon='+long+'&format=json')
      .then(response => response.json())
      .then(json => {
        document.getElementById("res").innerHTML="<h3>Las cordenadas son de: "+json.address.country+" </h3> En el estado de: "+json.address.state+"<br> En la ciudad de: "+json.address.county;
        tiempo(json.address.county);
  })
})

function tiempo(ciudad)
{
  fetch('http://api.weatherstack.com/current?access_key=f10e8af046326826802346286f9dd169&query='+ciudad)
  .then(response => response.json())
  .then(json => {
  document.getElementById("res2").innerHTML="La temperatura es de: "+json.current.temperature
  })
};