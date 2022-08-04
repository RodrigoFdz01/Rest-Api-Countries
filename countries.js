let divContainer = document.getElementById("container2");
let input = document.getElementById("input");
let botonInput = document.getElementById("basic-addon2");

botonInput.addEventListener("click", (event) => {
  event.preventDefault();
  //byName2();
});

const url = "https://restcountries.com/v2/all";

const searchAll = () => {
  fetch(url)
    .then((resp) => resp.json())
    .then(function (data) {
      data.map((item) => {
        const div = document.createElement("div");
        div.classList.add("card");
        div.innerHTML = `<h3>Country: ${item.name}</h3>  
          <h4>Capital: ${item.capital}</h4>
          <p>Region: ${item.region}</p>
          <img class="img" src=${item.flag} alt="">`;
        divContainer.appendChild(div);
      });
    })
    .catch(function (error) {
      console.log(error);
    });
};

//searchAll();

/*
const byName = () => {
  fetch(url)
    .then((resp) => resp.json())
    .then(function (data) {
      data.map((el) => {
        const inputValue = input.value.toLowerCase();
        console.log(inputValue);
        const name = el.name;
        if (name == inputValue) {
          console.log(name);
          console.log("si");
        }
      });
    })
    .catch(function (error) {
      console.log(error);
    });
};
*/

const byName2 = () => {
  const inputValue = input.value.toLowerCase();
  fetch(url)
    .then((resp) => resp.json())
    .then(function (data) {
      data.map((item) => {
        const name = item.name;
        if (name.indexOf(inputValue) != -1) {
          const div2 = document.createElement("div");
          div2.classList.add("card");
          div2.innerHTML = `<h3>Country: ${item.name}</h3>
                               <h4>Capital: ${item.capital}</h4>
                               <p>Region: ${item.region}</p>
                               <img class="img" src=${item.flag} alt="">`;
          divContainer.appendChild(div2);
        }
      });
    })
    .catch(function (error) {
      console.log(error);
    });
};

/*
.map((item) => {
  const div = document.createElement("div");

  div.classList.add("card");
  div.innerHTML = `<h3>Country: ${item.name}</h3>  
  <h4>Capital: ${item.capital}</h4>
  <p>Region: ${item.region}</p>
  <img class="img" src=${item.flag} alt="">`;
  divContainer.appendChild(div);
});
*/
