import "./style.css";
//JUST GIVE ME MY API

async function getData() {
  try {
    // returns a promise
    const response = await fetch("https://restcountries.com/v3.1/all");
    //guard clause
    if (response.status != 200) {
      throw new Error(response);
    } else {
      //convert promise to json
      let data = await response.json();
      console.log(data);
      //this is unique to THIS API!!!!!!!!!!
      data.forEach((country) => console.log(country.name));
    }
  } catch (error) {
    alert("hey I could not find that agent unc");
  }
}

getData();
