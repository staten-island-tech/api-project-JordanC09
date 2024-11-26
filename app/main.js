import "./style.css";
//JUST GIVE ME MY API

const DOMSelectors = {
  start: document.querySelector(".btn btn-outline btn-info"),
};

let data = [];
async function getData() {
  try {
    // returns a promise
    const response = await fetch("https://restcountries.com/v3.1/all");
    //guard clause
    if (response.status != 200) {
      throw new Error(response);
    } else {
      //convert promise to json
      data = await response.json();
      console.log(data);
      //this is unique to THIS API!!!!!!!!!!
      data.forEach((country) => console.log(country.name.common));
    }
  } catch (error) {
    alert("hey I could not find that agent unc");
  }
}

getData();
async function bruh() {
  try {
    // returns a promise
    const response = await fetch("https://restcountries.com/v3.1/all");
    //guard clause
    if (response.status != 200) {
      throw new Error(response);
    } else {
      //convert promise to json
      data = await response.json();
      console.log(data);
      //this is unique to THIS API!!!!!!!!!!
      let randomnumber = Math.floor(Math.random() * 251);

      console.log(randomnumber);
      for (i = 0; i <= 100000; i++) {
        if (i == randomnumber) {
          console.log(data.name.common);
        }
      }
    }
  } catch (error) {
    alert("hey I could not find that agent unc");
  }
}
bruh();
