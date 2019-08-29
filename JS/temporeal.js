var tabla = document.getElementById('tabla');
var mvpName = document.getElementById('mvp_name');
var mvpMap = document.getElementById('mvp_map');
var mapImg = document.getElementById('mvp_map');
var respawn = document.getElementById('mvp_respawn');
var mvpDelay = document.getElementById('mvp_delay');
var episode = document.getElementById ('episode');
var BotaoEnviar = document.getElementById('enviar');

BotaoEnviar.addEventListener('click', function () {
    create(mvpName.value, imageName(),mvpMap.value, mapImg.value, mvpDelay.value , respawn.value,respawnMillis(), delayMillis())
});


function create(name, img, map, mapImg, delay, respawn, respawnMillis, delayMillis) {
    
     var mvp= {    
        name: name,
        imageMvp: img,
        map: map,
        imageMap: mapImg,
        delay: delay,
        respawn: respawn,
        respawnMillis: respawnMillis,
        delayMillis: delayMillis
    };

   firebase.database().ref().child(episode.value).push(mvp);

   return location.reload()
   /* return alert('Cadastro feito Com Sucesso!'); */
}
function imageName () {
    var mvpNotSpace = mvpName.value.replace(/ /g, "_")
    return mvpNotSpace.toLowerCase()
}

function delayMillis(){
  var delayMillis = mvpDelay.value * 1000 * 60
  return delayMillis
}
function respawnMillis(){
  var respawnMillis = respawn.value * 1000 * 60
  return respawnMillis
}

var ref = firebase.database().ref();
ref.once("value").then(function(snapshot) {
   var table = snapshot.child('goldTimes').val();
   goldTimes1.nnerHTML = '';
   Object.values(table).forEach((element => {
       console.log(element);
       goldTimes1.innerHTML+=`
       <tr>
       <td>${element.name}</td>
       <td>${element.imageMvp}</td>
       <td>${element.map}</td>
       <td>${element.imageMap}</td>
       <td>${element.respawn}</td>
       <td>${element.delay}m</td>
     </tr>
       `   
   }));
  });
  ref.once("value").then(function(snapshot) {
    var table = snapshot.child('oldTimes').val();
    oldTimes1.nnerHTML = '';
    Object.values(table).forEach((element => {
        console.log(element);
        oldTimes1.innerHTML+=`
        <tr>
        <td>${element.name}</td>
        <td>${element.imageMvp}</td>
        <td>${element.map}</td>
        <td>${element.imageMap}</td>
        <td>${element.respawn}</td>
        <td>${element.delay}m</td>
      </tr>
        `   
    }));
   });
   ref.once("value").then(function(snapshot) {
    var table = snapshot.child('renewal').val();
    renewal1.nnerHTML = '';
    Object.values(table).forEach((element => {
        console.log(element);
        renewal1.innerHTML+=`
        <tr>
        <td>${element.name}</td>
        <td>${element.imageMvp}</td>
        <td>${element.map}</td>
        <td>${element.imageMap}</td>
        <td>${element.respawn}</td>
        <td>${element.delay}m</td>
      </tr>
        `   
    }));
   });
   ref.once("value").then(function(snapshot) {
    var table = snapshot.child('preRenewal').val();
    preRenewal1.nnerHTML = '';
    Object.values(table).forEach((element => {
        console.log(element);
        preRenewal1.innerHTML+=`
        <tr>
        <td>${element.name}</td>
        <td>${element.imageMvp}</td>
        <td>${element.map}</td>
        <td>${element.imageMap}</td>
        <td>${element.respawn}</td>
        <td>${element.delay}m</td>
      </tr>
        `   
    }));
   });
  

