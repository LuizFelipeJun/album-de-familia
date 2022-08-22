var fotos=["https://www.pcgamesn.com/wp-content/uploads/2019/03/rainbow-six-siege-tachanka.jpg", "https://www.theloadout.com/wp-content/uploads/2021/05/best-rainbow-six-siege-operators-thatcher.jpeg", "https://wallpapercave.com/wp/wp8437826.jpg", "https://ubistatic19-a.akamaihd.net/resource/fr-fr/game/rainbow6/siege-v3/r6-operator-fuze_custo_elite_333081.jpg", "https://technosteria.com/wp-content/uploads/2021/07/16830.jpg"];
var nomes=["tachanka", "thacher" , "jäger", "fuze", "lion"];
var indice=0;

function proximo(){
   if (indice==5){
      indice=0
   };
   document.getElementById("img").src=fotos[indice];
   document.getElementById("nome").innerHTML=nomes[indice];
   indice+=1;
}