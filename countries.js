let divContainer = document.getElementById("container2");
let input = document.getElementById("input");
let botonInput = document.getElementById("basic-addon2");

botonInput.addEventListener("click", (event) => {
  event.preventDefault();
  byName();
});

const url = "https://restcountries.com/v2/all";

const search = () => {
  fetch(url)
    .then((resp) => resp.json())
    .then(function (data) {
      data.map((item) => {
        // const inputValue = input.value.toLowerCase();
        const name = item.name.toLowerCase();
        if (name.indexOf(inputValue) != -1) {
          const div = document.createElement("div");
          div.classList.add("card");
          div.innerHTML = `<h3>Country: ${item.name}</h3>  
          <h4>Capital: ${item.capital}</h4>
          <p>Region: ${item.region}</p>
          <img class="img" src=${item.flag} alt="">`;
          divContainer.appendChild(div);
        }
      });
    })
    .catch(function (error) {
      console.log(error);
    });
};
//search();

const byName = () => {
  fetch(url)
    .then((resp) => resp.json())
    .then(function (data) {
      const inputValue = input.value.toLowerCase();
      data.filter((element) => element.name == inputValue);
    })
    .catch(function (error) {
      console.log(error);
    });
};

// if (inputValue != "") {
//   if (name.indexOf(inputValue) != -1) {
//     const div2 = document.createElement("div");
//     div2.classList.add("card");
//     div2.innerHTML = `<h3>Country: ${item.name}</h3>
//   <h4>Capital: ${item.capital}</h4>
//   <p>Region: ${item.region}</p>
//   <img class="img" src=${item.flag} alt="">`;
//     divContainer.appendChild(div2);
//   }
// }

/*
.map((item) => {
  const div = document.createElement("div");
  //console.log(data.name);
  div.classList.add("card");
  div.innerHTML = `<h3>Country: ${item.name}</h3>  
  <h4>Capital: ${item.capital}</h4>
  <p>Region: ${item.region}</p>
  <img class="img" src=${item.flag} alt="">`;
  divContainer.appendChild(div);
});
*/
