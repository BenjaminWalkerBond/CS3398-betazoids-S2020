
document.addEventListener( "DOMContentLoaded", getHome(), false );

document.addEventListener('DOMContentLoaded', function() {
      var firebaseConfig = {
            apiKey: "AIzaSyArwkzp5Fo5C3NHI3RAJWG6D6xlzhlTxGo",
            authDomain: "rvrslkupdb.firebaseapp.com",
            databaseURL: "https://rvrslkupdb.firebaseio.com",
            projectId: "rvrslkupdb",
            storageBucket: "rvrslkupdb.appspot.com",
            messagingSenderId: "332925524075",
            appId: "1:332925524075:web:e0c448b953cd7963c6792e",
            measurementId: "G-ZD50MRM92Y"
          };
          // Initialize Firebase
          firebase.initializeApp(firebaseConfig);
          firebase.analytics();

      try {
        let app = firebase.app();
       
      } catch (e) {
        console.error(e);
        
      }
    });


$("#homelink").click(function(){
  panelPurge();
  getHome();
});

$("#browselink").click(function(){
});

$("#aboutlink").click(function(){
  panelPurge();
  aboutDisplay();
});

$("#serviceslink").click(function(){
  panelPurge();
  servicesDisplay();
});


$("#alcohollink").click(function(){
});

$("#juiceslink").click(function(){
});

$("#fruitlink").click(function(){
});

$("#otherlink").click(function(){
});

$("#favlink").click(function(){
});

$("#sideexit").click(function(){
  document.getElementById("side-navigation").style.width = "0";
});

$("#sideopen").click(function(){
  document.getElementById("side-navigation").style.width = "330px";
});

$("#lm-home").click(function(){

});

function panelPurge(){
  document.getElementById("main-panel").innerHTML = ``;
}


function aboutDisplay() {
    const container = document.getElementById('main-panel');
    const cont = `<div class="panel-head-wrapper" id="abouthead"><h2>About</h2></div><br><br>        
    <p>Witches' Brew is a class project being developed by CS students at Texas State University. Currently it is in pre-alpha development with many features yet to come.</p>
    <p>This app's database is hosted by Google Firebase with native firebase functions handling most of the back-end. The web-app front end is a static HTML page that is updated via JavaScript and CSS.</p>`

    container.innerHTML += cont;
}

function servicesDisplay() {
    const container = document.getElementById('main-panel');
    const cont = ` <div class="panel-head-wrapper" id="serviceshead"><h2>Services</h2></div><br><br>
              <div style="text-align:center;" class="container">
                <h2 style="text-align:center; margin-bottom: 30px; font-weight: 900;"> Custom Drink Addition </h2>
                <p> Add your <b>custom</b> flavor to the wide variety of spirits and get feedback from the community on its tastiness! </p>
                <h2 style="text-align:center; margin-bottom: 30px; margin-top: 30px; font-weight: 900;"> Realtime Ratings </h2>
                <p> Did one of our drinks taste like %$#@? Dont worry! Tell the community with your rating powers so no one falls victim again. </p>
              </div>`

    container.innerHTML += cont;
}

function getHome(){
  panelPurge();
  document.getElementById("main-panel").innerHTML = `<div class="panel-head-wrapper" id="homehead"><h2>Welcome to Witches' Brew!</h2></div><br><br>`;
  getRandom();
}

function getImage(drinkType){
    var type = drinkType;
    console.log(type)
    var drinkImg;

    switch(type){
      case "Mixed Cocktail":
        drinkImg = 'style/pic/mixed-cocktail.jpg';
        break;
      case "Shooter":
        drinkImg = "style/pic/shooter.jpg";
        break;
      case "Martini":
        drinkImg = "style/pic/martini.jpg";
        break;
      case "Highball":
        drinkImg = "style/pic/highball.jpg";
        break;
      case "Frozen Drink":
        drinkImg = "style/pic/frozen-drink.jpg";
        break;
      case "Punch":
        drinkImg = "style/pic/punch.jpg";
        break;
      case "Hot Drink":
        drinkImg = "style/pic/hot-drink.jpg";
        break;
      case "Cappuccino":
        drinkImg = "style/pic/cappuccino.jpg";
        break;
      case "Ice Cream Drink":
        drinkImg = "style/pic/ice-cream-drink.jpg";
        break;
      case "Coffee Drink":
        drinkImg = "style/pic/coffee-drink.jpg";
        break;
      case "Champagne Drink":
        drinkImg = "style/pic/champagne.jpg";
        break;
      case "Smoothie":
        drinkImg = "style/pic/smoothie.jpg";
        break;
      case "Wine Drink":
        drinkImg = "style/pic/wine-drink.jpg";
        break;
      default: 
        drinkImg = "style/pic/amaretto.jpg"
    }

    return drinkImg;
}




