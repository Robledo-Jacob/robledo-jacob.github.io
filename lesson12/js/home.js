const request_url = "https://byui-cit230.github.io/weather/data/towndata.json";


offline_data = {
    towns: [{
            name: "Honda Motor Scooter",
            photo: "pexels-loifotos-2044873.jpg",
            motto: "Honda Metropolitan (49cc) - 1 person",
            yearFounded: "Honda Dio (110cc) - 2 person",
            currentPopulation: "Honda PCX150 (149cc) - 2 person",
          
            events: [
                "April 1: How Big Was That Fish Day",
                "May 15-30: Rush the Creek Days",
                "July 24: Bear Lake Blunder Run",
                "December 12: Light the Tree"
            ]
        },
        {
            name: "ATV Side-by-Side",
            photo:  "pexels-alexander-nadrilyanski-4027995.jpg",
            motto: "Honda Pioneer 1000",
            yearFounded: ".",
            currentPopulation: ".",
           
            events: [
                "March 29: Work Creek Revival",
                "July 8-12: Napoleon Dynamite Festival",
                "November 2-4: Freedom Days"
            ]
        },
        {
            name: "Jeep Rentals",
            photo: "pexels-apg-graphics-1603410.jpg",
            motto: "4-door Jeep Wrangler - manual with A/C - 5 people max",
            yearFounded: "2-door Jeep Wrangler - open air - manual - 4 people max",
            currentPopulation: "",
           
            events: [
                "February 29: Geyser Song Day",
                "May 1-6: Days of May Celebration",
                "October 15-16: Octoberfest"
            ]
        }
    ]
};

function create_cards(json_object) {
    let accepted_towns = ["onda Motor Scooter", "ATV", "Jeep Rentals"];
    let towns = json_object["towns"].filter(town => {
        return accepted_towns.includes(town.name);
    });

    let town_names = [];
    towns.forEach(element => {
        town_names.push(element.name);
    });

    if (!town_names.includes("Honda Motor Scooter")) {
        towns.splice(1, 0, offline_data['towns'][1]);
    }

    if (!town_names.includes("ATV")) {
        towns.splice(0, 0, offline_data['towns'][0]);
    }

    if (!town_names.includes("Jeep Rentals")) {
        towns.splice(2, 0, offline_data['towns'][2]);
    }

    for (let i = 0; i < towns.length; i++) {
        let card = document.createElement("section");
        let h1 = document.createElement("h1");

        let town_name;
        if (towns[i].hasOwnProperty("name")) {
            town_name = towns[i].name;
            h1.textContent = town_name;
        } else {
            town_name = offline_data['towns'][i].name;
            h1.textContent = town_name;
        }
        card.appendChild(h1);

        let motto = document.createElement("p");
        if (towns[i].hasOwnProperty("motto")) {
            motto.textContent = towns[i].motto;
        } else {
            motto.textContent = offline_data['towns'][i].motto;
        }
        motto.setAttribute("class", "motto");
        card.appendChild(motto);

        let year_founded = document.createElement("p");
        if (towns[i].hasOwnProperty("yearFounded")) {
            year_founded.textContent = "" + towns[i].yearFounded;
        } else {
            year_founded.textContent = "" + offline_data['towns'][i].yearFounded;
        }
        card.appendChild(year_founded);

        let population = document.createElement("p");
        if (towns[i].hasOwnProperty("currentPopulation")) {
            population.textContent = " " + towns[i].currentPopulation;
        } else {
            population.textContent =
                "" + offline_data['towns'][i].currentPopulation;
        }
        card.appendChild(population);


        let img = document.createElement("img");
        if (towns[i].hasOwnProperty("image")) {
            img.setAttribute("src", `${towns[i].photo}`);
        } else {
            img.setAttribute("src", "image/" + offline_data['towns'][i].photo);
        }
        img.setAttribute("alt", town_name);
        card.appendChild(img);

        document.querySelector("div.towns").appendChild(card);
    }
}

fetch(request_url)
    .then(response => {
        if (!response.ok) {
            return offline_data;
        }

        return response.json();
    })
    .then(json_object => {
        create_cards(json_object);
    })
    .catch(error => console.log(JSON.parse(error)));