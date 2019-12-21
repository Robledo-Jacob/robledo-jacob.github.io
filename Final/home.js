const request_url = "https://robledo-jacob.github.io/api/home.json";
//const request_url = "https://splucena.github.io/lesson9/weather/towndata.json";

offline_data = {
  towns: [
    {
      name: " Costa Rica, San Jose Temple",
      photo: "https://cdn.glitch.com/619e9c83-a558-4535-8e26-5437e75348c4%2Fthumbnails%2Ft1.jpg?1576645963410",
      motto: "",
      yearFounded:  2000 ,
      currentPopulation: "James E. Faust",
      averageRainfall: 14.2,
      events: [
        "April 1: How Big Was That Fish Day",
        "May 15-30: Rush the Creek Days",
        "July 24: Bear Lake Blunder Run",
        "December 12: Light the Tree"
      ]
    },
    
    {
      name: "Quezaltenango, Guatemala Temple",
      photo: "https://cdn.glitch.com/619e9c83-a558-4535-8e26-5437e75348c4%2Fthumbnails%2Ft4.jpg?1576645963468",
      motto: "",
      yearFounded: 2011 ,
      currentPopulation: "Dieter F. Uchtdorf",
      averageRainfall: 16.65,
      events: [
        "March 29: Work Creek Revival",
        "July 8-12: Napoleon Dynamite Festival",
        "November 2-4: Freedom Days"
      ]
    },
     {
    "name": "San Diego, California",
    "photo": "https://cdn.glitch.com/619e9c83-a558-4535-8e26-5437e75348c4%2Fthumbnails%2Ft3.jpg?1576645963948",
    "motto": "",
    "yearFounded": 1993 ,
    "currentPopulation": "Gordon B. Hinckley",
    "averageRainfall": 25,
    "events" : [
      "February 10-12: Greenbration",
      "May 8 - 18: Greenville Founder Days",
      "June 20: Verde and Valiant Day",
      "November 15-16: Greensome Gathering"
    ]
  },
    {
      name: "Laie Hawaii Temple",
      photo:
        "https://cdn.glitch.com/619e9c83-a558-4535-8e26-5437e75348c4%2Fthumbnails%2Ft2.jpg?1576645963545",
      motto: "",
      yearFounded: 1919,
      currentPopulation: "Heber J. Grant",
      averageRainfall: 15.75,
      events: [
        "February 29: Geyser Song Day",
        "May 1-6: Days of May Celebration",
        "October 15-16: Octoberfest"
      ]
    }
    
  ]
};

function create_cards(json_object) {
  let accepted_towns = ["Preston", "Soda Springs", "Fish Haven, Greenville"];
  let towns = json_object["towns"].filter(town => {
    return accepted_towns.includes(town.name);
  });

  let town_names = [];
  towns.forEach(element => {
    town_names.push(element.name);
  });

  if (!town_names.includes("Costa Rica")) {
    towns.splice(1, 0, offline_data["towns"][1]);
  }

  if (!town_names.includes("Guatemala")) {
    towns.splice(0, 0, offline_data["towns"][0]);
  }

  if (!town_names.includes("Hawaii")) {
    towns.splice(2, 0, offline_data["towns"][2]);
  }
  if (!town_names.includes("San Diego California")) {
    towns.splice(2, 0, offline_data["towns"][3]);
  }

  for (let i = 0; i < towns.length; i++) {
    let card = document.createElement("section");
    let h2 = document.createElement("h2");

    let town_name;
    if (towns[i].hasOwnProperty("name")) {
      town_name = towns[i].name;
      h2.textContent = town_name;
    } else {
      town_name = offline_data["towns"][i].name;
      h2.textContent = town_name;
    }
    card.appendChild(h2);

    let motto = document.createElement("p");
    if (towns[i].hasOwnProperty("motto")) {
      motto.textContent = towns[i].motto;
    } else {
      motto.textContent = offline_data["towns"][i].motto;
    }
    motto.setAttribute("class", "motto");
    card.appendChild(motto);

    let year_founded = document.createElement("p");
    if (towns[i].hasOwnProperty("yearFounded")) {
      year_founded.textContent = "Year Dedicated: " + towns[i].yearFounded;
    } else {
      year_founded.textContent =
        "Year Founded: " + offline_data["towns"][i].yearFounded;
    }
    card.appendChild(year_founded);

    let population = document.createElement("p");
    if (towns[i].hasOwnProperty("currentPopulation")) {
      population.textContent = "Dedicated By: " + towns[i].currentPopulation;
    } else {
      population.textContent =
        "Dedicated By: " + offline_data["towns"][i].currentPopulation;
    }
    card.appendChild(population);

   

    let img = document.createElement("img");
    if (towns[i].hasOwnProperty("photo")) {
      img.setAttribute("src", "" + towns[i].photo);
    } else {
      img.setAttribute("src", "" + offline_data["towns"][i].photo);
    }
    img.setAttribute("alt", town_name);
    card.appendChild(img);

    document.querySelector("div.pics").appendChild(card);
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
