fetch("artists.json")
    .then(response => response.json())
    .then(dataList =>{

        for (const data of dataList) {
            let template = `<div class="artist-block"><div class="image"><img src="${data.image}" alt="artist photo"></div><h3>${data.name}</h3><p>${data.desription}</p></div>`;

            document.querySelector(".artists-section .content-part").innerHTML += template;
        }
    });