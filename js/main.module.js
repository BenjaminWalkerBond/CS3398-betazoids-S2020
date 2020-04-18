'use strict';

let ingrArray = [];
let negIngrArray = [];

(function(angular){

  var app = angular.module('mainModule', ['chips']);
  
  app.controller('mainController',mainController);
  
  function mainController($filter){
    let self = this;

    init();
    
    function init(){
       self.positiveItems = [];
       self.negativeItems = [];
       self.insert = '';
    }
   
    self.add = add;
    self.negate = negate;
    self.closePos = closePos;
    self.closeNeg = closeNeg;
    
   function add(input){
       if(self.positiveItems.indexOf(input) === -1  
            && self.insert !== ''){
          
          self.positiveItems.push(input);
          self.insert = '';
          ingrArray=this.positiveItems;
       } else {
         console.log('presente');
       }
    }

    function negate(input){
        if(self.negativeItems.indexOf(input) === -1
            && self.insert !== ''){
          self.negativeItems.push(input);
          self.insert = '';
          negIngrArray=this.negativeItems;
       } else {
       }
    }
    
    function closePos(text){
      self.positiveItems = $filter('filter')(self.positiveItems, function(value){
        return value != text;
      });
      ingrArray=this.positiveItems;
    }

    function closeNeg(text){
      self.negativeItems = $filter('filter')(self.negativeItems, function(value){
        return value != text;
      });
      negIngrArray=this.negativeItems;
    }
  }
  
})(window.angular);

function multiSearch() {
    var targetUrl = 'https://us-central1-rvrslkupdb.cloudfunctions.net/' +
        'getByIngredientStrict?page=1&total=' + ingrArray.length;

    for (let i = 0; i < ingrArray.length; i++) {
        let ingredient = '&findthis' + [i + 1] + '=' + ingrArray[i].toString().replace(/ /g, '+');
        targetUrl = targetUrl.concat(ingredient);
    }
    console.log(targetUrl);

    var xhttp = new XMLHttpRequest();

    xhttp.open('POST', targetUrl);

    document.getElementById("home").innerHTML = `<div class="panel-head-wrapper" id="homehead"></div><br><br>`;

    xhttp.onreadystatechange = function() {

        if (this.readyState == 4 && this.status == 200) {
            var data = JSON.parse(this.responseText);
            console.log(data);
            const container = document.getElementById('ingredient-search');

            data.forEach((result, idx) => {
                // Create card element
                const card = document.createElement('div');
                card.classList = 'card-body';
                var ingredientArray1 = [];
                var procedureArray = [];

                      
                        ingredientArray1.push(Object.values(result.ingredients));
                        procedureArray.push(Object.values(result.procedure));
                      
     
                  for( i in ingredientArray1){
                  console.log("Now the ingredient array has: ");
                  console.log(ingredientArray1[i]);
                  }

                  let resultRating = 0;
                  console.log("this is result.rating: " + result.rating);
                  if ( result.rating !== undefined){
                    console.log("set result.rating");
                    resultRating = result.rating;
                  }
                  var starRating=``;
                  for(var f = 0; f < parseInt(resultRating); f++) {
                    starRating= starRating + `<span class="fa fa-star" data-rating="` + f + `"></span>`;
                  }
                  for(var f = parseInt(resultRating)+1; f <= 5; f++) {
                    console.log("The function is working");
                    starRating= starRating + `<span class="fa fa-star-o" data-rating="` + f + `"></span>`;
                  }
                  console.log(starRating);




                for(const i in ingredientArray1){
                    console.log("Now the ingredient array has: ");
                    console.log(ingredientArray1[i]);
                }
                const cont =
                    `<div class="col-md-4" style="display:inline-grid">
                  <div class="card">
                    <div class="card-block" id="card-block-${idx}">
                      <img class="card-img-top" src="style/amaretto.jpg" alt="Card image" style="width:100%">
                        <div class="card-body" id="card-body-${idx}">
                          <h4 class="card-title"> ${result.name} </h4>
                          <p class="card-text"> ${result.form.type} </p>
                          <a href="#" class="btn btn-primary" onclick="document.getElementById('recipepopup-${idx}').style.display='block'">Recipe</a>
                          <div class="container">
                            <div class="row">
                              <div class="col-lg-12">
                                <div class="star-rating">` + starRating + `
                                  <input type="hidden" name="${result.name}" id="hiddenRating-${idx}" class="rating-value" value="2.56">
                                </div>
                              </div>
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>


                    <!-- The Recipe Modal -->
                    <div id="recipepopup-${idx}" class="modal">
                      <span onclick="document.getElementById('recipepopup-${idx}').style.display='none'"
                    class="close" title="Close Modal">&times;</span>
  
                      <!-- Modal Content -->
                      <form class="modal-content-recipe animate" action=" # ">
                        <div class="imgcontainer">
                          <img src="style/amaretto.jpg" id="drinkimg" alt="Drink" class="drink rounded">
                        </div>
  
                        <div class="title-container modal-container">
                          <h2>${result.name}</h2>
                          <h4>${result.form.type}</h4>
                        </div>
  
  
                           <div class="container">
                              <div class="row">
                                <div class="col-sm-12">
                                  <div class="star-rating star-rating-modal"> ` + starRating + `
                                    <input type="hidden" name="${result.name}" id="hiddenRating-${idx}" class="rating-value" value="2.56">
                                  </div>
                                </div>
                              </div>
                            </div>
  
                        <div class="recipe-container modal-container" id="recipe-container-${idx}">
                          <h5>Ingredients:</h5>
                          
                        </div>
  
                        <div class="procedure-container modal-container" id="procedure-container-${idx}">
                          <h5>To make it:</h5>
                          
                        </div>
                      </form>
                    </div>
  
                    </div>`;



                container.innerHTML += cont;
                for(const i in ingredientArray1){
                    var z = document.createElement('p');
                    var x = document.createTextNode(ingredientArray1[i]);
                    z.appendChild(x);
                    console.log(document.getElementById("collapse-"+ idx));
                    document.getElementById("card-body-" + idx).appendChild(z);
                }

                for(const i in ingredientArray1){
                    var j = document.createElement('p');
                    var k = document.createTextNode(ingredientArray1[i]);
                    j.appendChild(k);
                    console.log(document.getElementById("collapse-"+ idx));
                    document.getElementById("recipe-container-" + idx).appendChild(j);
                }

                for(i in procedureArray){
                  var v = document.createElement('p');
                  var w = document.createTextNode(procedureArray[i]);
                  v.appendChild(w);
                  document.getElementById("procedure-container-" + idx).appendChild(v);
                }

                // Append newyly created card element to the container
                //   container.innerHTML += content;

            })


            // Dynamically load star rating script after all elements have been created

            var head= document.getElementsByTagName('head')[0];
            var script= document.createElement('script');
            script.type= 'text/javascript';
            script.src= 'js/rating.js';
            head.appendChild(script);


            console.log(this.responseType);
            for (const i in data){
                console.log("working");
                var div = document.createElement("DIV");
                div.innerHTML = i;
            }
            document.getElementById("unique").innerHTML =
                this.responseText;
            //console.log(this.responseText);
        }else if (this.status){
           
            console.log(this.responseText);
        }else{
            document.getElementById("unique").innerHTML = "Loading... ";
        }
    };
    xhttp.send();
}



