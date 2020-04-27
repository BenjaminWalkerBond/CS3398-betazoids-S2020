
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

$("#addadrinklink").click(function(){
  panelPurge();
  addADrinkDisplay();
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

function addADrinkDisplay(){
  document.getElementById("side-navigation").style.width = "0";
  const container = document.getElementById('main-panel');
    const cont = ` <div class="container">

    <form>
        <div class="d-flex flex-column justify-content-center">
          <div class="input-group input-group-lg">
              <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroup-sizing-lg">Drink Name</span>
              </div>
              <input type="text" class="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm">
            </div>
        </div>
        
        
        <div class="row">
        <div class="col-xs-3">
        <div class="container"> 
            <h3> Glass </h3>
            <div class="checkbox">
            <label>
                <input type="checkbox" class="sev_check" name="Martini" />Collins</label>
        </div>
        <div class="checkbox">
          <label>
            <input type="checkbox" class="sev_check" name="Highball" />Highball Glass</label>
        </div>
        <div class="checkbox">
          <label>
            <input type="checkbox" class="sev_check" name="chk3" />Chilled Rocks</label>
        </div>
        <div class="checkbox">
          <label>
            <input type="checkbox" class="sev_check" name="chk5" />Chilled Cocktail</label>
        </div>
        <div class="checkbox">
          <label>
            <input type="checkbox" class="sev_check" name="chk4" />Tall Speciality</label>
        </div>
        <div class="checkbox">
          <label>
            <input type="checkbox" class="sev_check" name="chk5" />Tall Highball</label>
        </div>
        <div class="checkbox">
          <label>
            <input type="checkbox" class="sev_check" name="chk5" />Tall Glass</label>
        </div>
        <div class="checkbox">
          <label>
            <input type="checkbox" class="sev_check" name="chk5" />Footed Glass Mug</label>
        </div>
        <div class="checkbox">
          <label>
            <input type="checkbox" class="sev_check" name="chk5" />Shot Glass</label>
        </div>
        <div class="checkbox">
          <label>
            <input type="checkbox" class="sev_check" name="chk5" />Tall Rocks</label>
        </div>
        
        </div>
        </div>
        
        <div class="col-xs-2"><div class="container">
            <h3> Type </h3>
            
            <div class="checkbox">
            <label>
                <input type="checkbox" class="type_check" name="Martini" />Mixed Cocktail</label>
        </div>
        <div class="checkbox">
          <label>
            <input type="checkbox" class="type_check" name="Highball" />Shooter</label>
        </div>
        <div class="checkbox">
          <label>
            <input type="checkbox" class="type_check" name="chk3" />Martini</label>
        </div>
        <div class="checkbox">
          <label>
            <input type="checkbox" class="type_check" name="chk4" />Highball</label>
        </div>
        <div class="checkbox">
          <label>
            <input type="checkbox" class="type_check" name="chk5" />Frozen Drink</label>
        </div>
        <div class="checkbox">
          <label>
            <input type="checkbox" class="type_check" name="chk5" />Punch</label>
        </div>
        <div class="checkbox">
          <label>
            <input type="checkbox" class="type_check" name="chk5" />Hot Drink</label>
        </div>
        <div class="checkbox">
          <label>
            <input type="checkbox" class="type_check" name="chk5" />Cappuccino</label>
        </div>
        <div class="checkbox">
          <label>
            <input type="checkbox" class="type_check" name="chk5" />Ice Cream Drink</label>
        </div>
        <div class="checkbox">
          <label>
            <input type="checkbox" class="type_check" name="chk5" />Coffee Drink</label>
        </div>
        <div class="checkbox">
          <label>
            <input type="checkbox" class="type_check" name="chk5" />Champagne Drink</label>
        </div>
        <div class="checkbox">
          <label>
            <input type="checkbox" class="type_check" name="chk5" />Smoothie</label>
        </div>
        <div class="checkbox">
          <label>
            <input type="checkbox" class="type_check" name="chk5" />Wine Drink</label>
        </div>
        </div></div>
        <div class="col-xs-2"><div class="container">
            <h3> Garnish </h3>
            <div><input type="text"  name="occasion"></div>

            <h3> Ingredients </h3>
                    <div class="input_fields_wrap">
                        
                    <div><input type="text" id="inputField1" name="mytext[]"><button class="add_field_button">+</button></div>

        </div></div>
        <div class="col-xs-2"><div class="container">
            <h3> Occasion </h3>
            <div><input type="text"  name="occasion"></div>
            <h3> Procedure </h3>
                    <div class="procedure_fields_wrap">
                        
                    <div><input type="text" id= "procedureField1" name="mytext[]"><button class="add_procedure_button">+</button></div>
        </div></div>
        
        
      </div>
        




</form>

</div>`;

    container.innerHTML += cont;
    // Dynamically load star rating script after all elements have been created
    var head= document.getElementsByTagName('head')[0];
    var script= document.createElement('script');
    script.type= 'text/javascript';
    script.src= 'js/addDrink.js';
    head.appendChild(script);
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




