let divContainer = document.getElementById("container2");
let input = document.querySelector("input");

const url = "https://restcountries.com/v2/all";
fetch(url)
  .then((resp) => resp.json())
  .then(function (data) {
    //console.log(data);
    data.map((item, index) => {
      const inputValue = input.value.toLowerCase();
      if (inputValue === "") {
        const div = document.createElement("div");
        div.classList.add("card");

        div.innerHTML = `<h3>${index + 1}-Country: ${item.name}</h3>  
        <h4>Capital: ${item.capital}</h4>
        <p>Region: ${item.region}</p>
        <img class="img" src=${item.flag} alt="">`;
        divContainer.appendChild(div);
      }
      const name = item.name.toLowerCase();
      if (name.indexOf(inputValue) !== -1) {
        //console.log("2do if");
        const div = document.createElement("div");
        div.innerHTML = `<h2>${index + 1}-Country: ${item.name}</h2>`;
      }
    });
  })
  .catch(function (error) {
    console.log(error);
  });
