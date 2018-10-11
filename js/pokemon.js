function createPoke(data)
{
  var types = [data.nom, data.numero, data.type, data.image];
  var tr = document.createElement('tr');
  console.log('attribution des types')
  for(var i = 0; i < 4; i++)
  {
    var td = document.createElement('td');
    td.setAttribute('id', i);
    switch(i)
    {
      case 0:
        var lien = document.createElement("a");
            lien.setAttribute('href', 'poke_type.html?#types' + data.type);
            lien.textContent = types[i];
            td.appendChild(lien);
            tr.appendChild(td);
      continue;

      case 3:
        var img = document.createElement('img');
            img.setAttribute('src', types[3]);
            td.appendChild(img);
            tr.appendChild(td);
      continue;

      default:
            td.textContent = types[i];
            tr.appendChild(td);
      continue;
    }
  }      

  return tr;
}

var req = new XMLHttpRequest();
req.open("GET", 'http://145.239.32.254:8081/pokemon/pokemons');

req.addEventListener("load", function () 
{
  if (req.status >= 200 && req.status < 400) 
  {
    console.log('requete OK');

    var apiTab = JSON.parse(req.responseText);
    console.log('apiTab Rempli');

    var tBody = document.getElementById("tBody");
    if(tBody != null)
    {
      console.log('tBody Trouver');
    }

    for(var i = 0; i < apiTab.length; i++)
    {
      console.log('tour de boucle : ' + i);
      var poke = [];
      poke[i] = createPoke(apiTab[i])
      tBody.appendChild(poke[i]);
    }
  } 
  else 
  {
   alert('erreur serveur api');
 }
});

req.addEventListener("error", function () 
{
  console.error("Erreur réseau avec l'URL " + url);
});

req.send(null);


