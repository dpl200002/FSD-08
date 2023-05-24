$(document).ready(function () {
  let data; // json object of heroes

  // CREATE
  let xhr = new XMLHttpRequest();

  // OPEN
  xhr.open("GET", "json/heroes.json");
// https://raw.githubusercontent.com/FSD-08/Courses/main/User%20Interfaces/heroes/json/heroes.json
  // SEND
  xhr.send();

  // LISTEN
  xhr.onreadystatechange = function(){
    if (xhr.readyState==4 && xhr.status==200){
      // response is ready and successful
     // console.log(xhr.responseText);

      data = JSON.parse(xhr.responseText);
      console.log(data);

      // title
      let newH1 = $("<h1>" + data.squadName + "</h1>");

      // subtitle  
      let subtitle = $("<p>Hometown: " + data.homeTown + " // Formed: " + data.formed + "</p>");
      
      $("header").append( newH1 ).append(subtitle);

      // hereos
      console.log( data.members);
      for (let i in data.members){
        let curHero = data.members[i];
        console.log(curHero)

        // individual hero container
        let hName = $("<h2>" + curHero.name + "</h2>");
        let hSecret = $("<p>Secret Identity: " + curHero.secretIdentity + "</p>");
        let hAge = $("<p>Age: " + curHero.age + "</p>");
        let hPowers = $("<p>Super Powers: </p>");
        let hList = $("<ul></ul>");
        for( let p in curHero.powers){
          let curPower = curHero.powers[p];
          let itemPower = $("<li>" + curPower + "</li>");
          $(hList).append( itemPower );
        }

        $("section").append ( 
            $("<article></article>").append(hName).append(hSecret).append(hAge).append(hPowers).append(hList)
        );

      }
    }
  }
})
