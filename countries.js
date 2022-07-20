let ulist = document.getElementById("ulista");

const url = "https://restcountries.com/v2/all";
fetch(url)
  .then((resp) => resp.json())
  .then(function (data) {
    console.log(data);
    data.map((item) => {
      const li = document.createElement("li");
      li.innerHTML = `<li>Country: ${item.name}  Capital: ${item.capital}  Region: ${item.region}</li>`;
      ulist.appendChild(li);
    });

    // data.map((item, id) => console.log(item.name));
  })
  .catch(function (error) {
    console.log(error);
  });

/*
fetch(url)
  .then((resp) => resp.json())
  .then(function (data) {
    let authors = data.results;
    authors.map(function (author) {
      span.innerHTML = `${author.name.first} ${author.name.last}`;
    });
  })
  .catch(function (error) {
    console.log(error);
  });
*/
