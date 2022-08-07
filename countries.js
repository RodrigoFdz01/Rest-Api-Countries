let divContainer = document.getElementById("container2");
let input = document.getElementById("input");
let botonInput = document.getElementById("basic-addon2");

const url = "https://restcountries.com/v2/all";

botonInput.addEventListener("click", (event) => {
  event.preventDefault();
  CountryName();
  //input.value = "";
});

const searchAll = () => {
  fetch(url)
    .then((resp) => resp.json())
    .then(function (data) {
      data.map((item) => {
        const div = document.createElement("div");
        div.classList.add("card");
        div.innerHTML += `<h3>${item.name}</h3>  
          <h4>${item.capital}</h4>
          <p>Region: <span>${item.region}</span></p>
          <p>Population: ${item.population}</p>
          <img class="img" src=${item.flag} alt="">`;
        divContainer.appendChild(div);
      });
    })
    .catch(function (error) {
      console.log(error);
    });
};

searchAll();

const CountryName = () => {
  divContainer.innerHTML = "";

  fetch(url)
    .then((resp) => resp.json())
    .then(function (data) {
      let inputValue = input.value.toLowerCase();
      //mapeo data
      data.map((item) => {
        let name = item.name.toLowerCase();
        let region = item.region.toLowerCase();
        // no func con capitales names
        //name.indexOf(inputValue) != -1 ||

        if (
          name.indexOf(inputValue) != -1 ||
          region.indexOf(inputValue) != -1
        ) {
          const div2 = document.createElement("div");
          div2.classList.add("card");
          div2.innerHTML += `<h3>${item.name}</h3>
                            <h4>Capital: ${item.capital}</h4>
                            <p>Region: ${item.region}</p>
                            <p>Population: ${item.population}</p>
                            <img class="img" src=${item.flag} alt="">`;
          divContainer.appendChild(div2);
        }
      });
    })
    .catch(function (error) {
      console.log(error);
    });
  // input.value = "";
};
