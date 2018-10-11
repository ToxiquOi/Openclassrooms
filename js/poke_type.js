function createTypes(data) // fonction d'hydratation des élément dans le tableau
{
    // on créer un tableau contenant les élément de chaque objet
    var types = [data.nom, data.id, data.caractéristique, data.attaques];
    var tr = document.createElement('tr');

    for(var i = 0; i < types.length; i++)
    {
        var td = document.createElement('td'); //création d'une ligne du tableau 
        	td.setAttribute('id', 'types'+data.id);

        if(i === 3)
        {
        	console.log(types[3].length);
        	for(var j = 0; j < types[3].length; j++)
        	{
            	switch(j) //si première Elt alors pas de virgule
            	{
            		case 0 :
            		td.textContent += types[3][j];
            		continue;

            		default:
            		td.textContent += ', ' + types[3][j];
            		continue;
            	}
        	}

        	tr.appendChild(td);
    	}
    	else
    	{
    		td.textContent = types[i];
    		tr.appendChild(td);
    	}  
	}

	return tr;
}

var req = new XMLHttpRequest();
	req.open("GET", 'http://145.239.32.254:8081/pokemon/types');
	req.addEventListener("load", function () 
	{
      	if (req.status >= 200 && req.status < 400) // si la réponse serveur est bonne on continue sinon alert()
      	{
      		console.log('requete OK');

      		var apiTab = JSON.parse(req.responseText);

        	var tBody = document.getElementById("tBody");
        	if(tBody != null)
        	{
        		console.log('tBody Trouver');
        	}

        	for(var i = 0; i < apiTab.length; i++)
        	{
          		
          		var pokeTypes = [];
          		pokeTypes[i] = createTypes(apiTab[i]);
          		tBody.appendChild(pokeTypes[i]);
      		}
  		} 
  		else 
  		{
  			alert('erreur lors du load Ajax');
  		}
	});

	req.addEventListener("error", function () 
	{
		console.error("Erreur réseau avec l'URL " + url);
	});
	req.send(null);


