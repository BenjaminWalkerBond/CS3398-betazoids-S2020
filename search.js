
$('#example-search-input-0').on('keyup', function(event) {
    var inner = document.getElementById("example-search-input-0").value;
    console.log(inner);

   
    if(event.keyCode == 13){

        if(inner.split(" ").length == 1){
            getByIngredient(inner);
        }

    }

    function getByIngredient(searchText) {

        var xhttp = new XMLHttpRequest();
        
        let search = searchText.trim();

        var targetUrl = 'https://us-central1-rvrslkupdb.cloudfunctions.net/devGetByIngredient?findthis=' + searchText;
        xhttp.open('POST', targetUrl);

        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var data = JSON.parse(this.responseText);
                console.log(data);
const container = document.getElementById('accordion');

data.forEach((result, idx) => {
  // Create card element
  const card = document.createElement('div');
  card.classList = 'card-body';
  var ingredientArray = [];

  
      ingredientArray.push(Object.values(result.ingredients));
  

  for( i in ingredientArray){
  console.log("Now the ingredient array has: ");
  console.log(ingredientArray[i]);
  }
  // Construct card content
  const content = `
    <div class="card">
    <div class="card-header" id="heading-${idx}">
      <h5 class="mb-0">
        <button class="btn btn-link" data-toggle="collapse" data-target="#collapse-${idx}" aria-expanded="true" aria-controls="collapse-${idx}">

                </button>
      </h5>
    </div>

    <div id="collapse-${idx}" class="collapse show" aria-labelledby="heading-${idx}" data-parent="#accordion">
      <div id="card-body-${idx}" class="card-body">

        <h5>${result.name}</h5>
        <p>${result.form.type}</p>
      </div>
    </div>
  </div>
  `;

  container.innerHTML += content;
  for(i in ingredientArray){
    var z = document.createElement('p');
    var x = document.createTextNode(ingredientArray[i]);
    z.appendChild(x);
    console.log(document.getElementById("collapse-"+ idx));
    document.getElementById("card-body-" + idx).appendChild(z);
  }


  // Append newyly created card element to the container
//   container.innerHTML += content;

})
                console.log(this.responseType);
              for (i in data){
                  console.log("working");
                var div = document.createElement("DIV");
                div.innerHTML = i;
              }
              document.getElementById("unique").innerHTML =
              this.responseText;
              //console.log(this.responseText);
            }else if (this.status){
                document.getElementById("unique").innerHTML = "Can not access: " + targetUrl 
                    + " <br /> Response: " + this.status + " " + this.responseText;
                    console.log(this.responseText);
            }else{
                document.getElementById("unique").innerHTML = "Loading... ";
            }
          };
        xhttp.send();



    }

    function getByIngredientStrict (){

    }
})