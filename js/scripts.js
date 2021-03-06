
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

$("#add-drink-mobile-open").click(function(){
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
    const cont = ` <div class="container" style="">

    <form>
        <div class="d-flex flex-column justify-content-center">
          <div class="input-group input-group-lg">
              <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroup-sizing-lg">Drink Name</span>
              </div>
              <input type="text" class="form-control" name="drink_name" aria-label="Large" aria-describedby="inputGroup-sizing-sm" min="1" max="15"/>
            </div>
        </div>
        
        
        <div class="row">
        <div class="col-xs-3">
        <div class="container"> 
            <h3> Glass </h3>
            <div class="checkbox">
            <label>
            <input type="radio" class="sev_check" name="glass" value="Collins">Collins</label>
        </div>
        <div class="checkbox">
          <label>
          <input type="radio" class="sev_check" name="glass" value="Highball+Glass">Highball Glass</label>
        </div>
        <div class="checkbox">
          <label>
          <input type="radio" class="sev_check" name="glass" value="Chilled+Rocks">Chilled Rocks</label>
        </div>
        <div class="checkbox">
          <label>
          <input type="radio" class="sev_check" name="glass" value="Chilled+Cocktail">Chilled Cocktail</label>
        </div>
        <div class="checkbox">
          <label>
          <input type="radio" class="sev_check" name="glass" value="Tall+Speciality">Tall Speciality</label>
        </div>
        <div class="checkbox">
          <label>
          <input type="radio" class="sev_check" name="glass" value="Tall+Highball">Tall Highball</label>
        </div>
        <div class="checkbox">
          <label>
          <input type="radio" class="sev_check" name="glass" value="Tall+Glass">Tall Glass</label>
        </div>
        <div class="checkbox">
          <label>
          <input type="radio" class="sev_check" name="glass" value="Footed+Glass+Mug">Footed Glass Mug</label>
        </div>
        <div class="checkbox">
          <label>
          <input type="radio" class="sev_check" name="glass" value="Shot+Glass">Shot Glass</label>
        </div>
        <div class="checkbox">
          <label>
          <input type="radio" class="sev_check" name="glass" value="Tall+Rocks">Tall Rocks</label>
        </div>
        
        </div>
        </div>
        
        <div class="col-xs-2"><div class="container">
            <h3> Type </h3>
            
            <div class="checkbox">
            <label>
            <input type="radio" class="type_check" name="type" value="Mixed+Cocktail">Mixed Cocktail</label>
        </div>
        <div class="checkbox">
          <label>
          <input type="radio" class="type_check" name="type" value="Shooter">Shooter</label>
        </div>
        <div class="checkbox">
          <label>
          <input type="radio" class="type_check" name="type" value="Martini">Martini</label>
        </div>
        <div class="checkbox">
          <label>
          <input type="radio" class="type_check" name="type" value="Highball">Highball</label>
        </div>
        <div class="checkbox">
          <label>
          <input type="radio" class="type_check" name="type" value="Frozen+Drink">Frozen Drink</label>
        </div>
        <div class="checkbox">
          <label>
          <input type="radio" class="type_check" name="type" value="Punch">Punch</label>
        </div>
        <div class="checkbox">
          <label>
          <input type="radio" class="type_check" name="type" value="Hot+Drink">Hot Drink</label>
        </div>
        <div class="checkbox">
          <label>
          <input type="radio" class="type_check" name="type" value="Cappuccino">Cappuccino</label>
        </div>
        <div class="checkbox">
          <label>
          <input type="radio" class="type_check" name="type" value="Ice+Cream+Drink">Ice Cream Drink</label>
        </div>
        <div class="checkbox">
          <label>
          <input type="radio" class="type_check" name="type" value="Coffee+Drink">Coffee Drink</label>
        </div>
        <div class="checkbox">
          <label>
          <input type="radio" class="type_check" name="type" value="Champagne+Drink">Champagne Drink</label>
        </div>
        <div class="checkbox">
          <label>
          <input type="radio" class="type_check" name="type" value="Smoothie"> Smoothie</label>
        </div>
        <div class="checkbox">
          <label>
          <input type="radio" class="type_check" name="type" value="Wine+Drink">Wine Drink</label>
        </div>
        </div></div>
        <div class="col-xs-2"><div class="container">
            <h3> Garnish </h3>
            <div><input type="text"  name="garnish"></div>

            <h3> Ingredients </h3>
                    <div class="input_fields_wrap">
                        
                    <div><input type="text" id="inputField1" name="ingredients"><button class="add_field_button">+</button></div>

        </div></div>
        <div class="col-xs-2"><div class="container">
            <h3> Occasion </h3>
            <div><input type="text"  name="occasion"></div>
            <h3> Procedure </h3>
                    <div class="procedure_fields_wrap">
                        
                    <div><input type="text" id= "procedureField1" name="procedure"><button class="add_procedure_button">+</button></div>
        </div></div>
        
        <input type="button" name="submit" value="Submit" onClick="createDrink(this.form)"> 
        
      </div>

</form>


</div>
<div style="margin: 30%; width:100%; height:50%;"> </div>
`;

    container.innerHTML += cont;
    // Dynamically load star rating script after all elements have been created
    var head= document.getElementsByTagName('head')[0];
    var script= document.createElement('script');
    script.type= 'text/javascript';
    script.src= 'js/addDrink.js';
    head.appendChild(script);
}

function createDrink(form) {

  

  var newDrinkURL = "https://us-central1-rvrslkupdb.cloudfunctions.net/addDrink?newDrink=";

  var index;
  for (index = 0; index < 10; ++index) {
    if (form.glass[index].checked)
      break;
  }
  var glass = form.glass[index].value;

  for (index = 0; index < 13; ++index) {
    if (form.type[index].checked)
      break;
  }

  var type;

  if(form.type[index].value){
    type = form.type[index].value;
  }else {
    type = "Serve It How You Like";
  }
  

  var garnish = form.garnish.value.replace(/ /g,"+");
  var ingredients = form.ingredients[0].value.replace(/ /g,"+");
  var drinkName = form.drink_name.value.replace(/ /g,"+");
  var occasion = form.occasion.value.replace(/ /g,"+");
  var procedure = form.procedure[0].value.replace(/ /g,"+");

  for (index = 1; index < form.ingredients.length; ++index) {
    ingredients += "\",\""+ (index+1) + "\":\""+ form.ingredients[index].value.replace(/ /g,"+");
  }

  for (index = 1; index < form.procedure.length; ++index) {
    procedure += "\",\""+ (index+1) + "\":\""+ form.procedure[index].value.replace(/ /g,"+");
  }
  

  var drinkObjectFormatter = "{+\"form\":{\"glass\":\"" + glass + "\",\"type\":\"" + type +
                            "\"},+\"garnish\":{\"1\":\"" + garnish +
                            "\"},+\"ingredients\":{\"1\":\"" + ingredients +
                            "\"},+\"name\":\"" + drinkName + 
                            "\",+\"occasion\":\"" + occasion + 
                            "\",+\"procedure\":{\"1\":\"" + procedure + 
                            "\"},+\"rating\":0.0}";
  newDrinkURL = newDrinkURL + drinkObjectFormatter;

  var xhttp2 = new XMLHttpRequest();
  xhttp2.open('POST',newDrinkURL);
  xhttp2.send();

  xhttp2.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      alert("Drink successfully added!");
    }
  }
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




