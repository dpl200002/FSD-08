$(document).ready(function () {
    $.getJSON("json/heroes.json", function (data) {

        let h1Element = $(`<h1>${data.squadName}</h1>`)
        $("header").append(h1Element)

        let pElement = $(`<p>Hometown: ${data.homeTown} // Formed: ${data.formed}</p>`)
        $("header").append(pElement)

        for (let i = 0; i < data.members.length; i++) {
            let article = $(`<article></article>`)
            $("section").append(article)

            let heroName = $(`<h2>${data.members[i].name}</h2>`)
            article.append(heroName)

            let identity = $(`<p>Secret identity: ${data.members[i].secretIdentity}</p>`)
            article.append(identity)

            let age = $(`<p>Age: ${data.members[i].age}</p>`)
            article.append(age)

            let ulElement = $(`<ul></ul>`)
            let superPower = $(`<p>Superpowers: </p>`).hover(function () {
                ulElement.slideDown();
            }, function () {
                ulElement.slideUp();
            })
            article.append(superPower)

            article.append(ulElement)
            for (let j = 0; j < data.members[i].powers.length; j++) {
                let liElement = $(`<li>${data.members[i].powers[j]}</li>`)
                ulElement.append(liElement).hide()
            }
        }
    })
})