import "./style.css";
//JUST GIVE ME MY API

const DOMSelectors = {
  container: document.querySelector(".flex-auto"),
};

async function generatequestion() {
  try {
    // returns a promise
    const response = await fetch("https://www.amiiboapi.com/api/amiibo/");
    //guard clause
    if (response.status != 200) {
      throw new Error(response);
    } else {
      //convert promise to json
      let data = await response.json();
      console.log(data);
      //this is unique to THIS API!!!!!!!!!!
      let randomnumber = Math.floor(Math.random() * 251);

      console.log(randomnumber);

      let guy = data.amiibo[randomnumber];
      console.log(guy.image);

      DOMSelectors.container.insertAdjacentHTML(
        "beforeEnd",
        `
        <div>
          <img src = "${guy.image}" class = "card-image" alt = "amiibo">
        </div>

        `
      );

      let correctplacement = Math.floor(Math.random() * 5);
      console.log(correctplacement);
      console.log("correct placement above");

      if (correctplacement === 1 || correctplacement === 0) {
        DOMSelectors.container.insertAdjacentHTML(
          "beforeEnd",
          `
          <div class = "buttons">
            <button class="btn btn-outline btn-primary" id = "cor" value = "${guy.amiiboSeries}">${guy.amiiboSeries}</button>
          
          </div>
  
          `
        );
      }

      let randombad = Math.floor(Math.random() * 251);
      let firstone = data.amiibo[randombad];
      console.log(firstone.amiiboSeries);
      console.log(guy.amiiboSeries);

      if (firstone.amiiboSeries === guy.amiiboSeries) {
        console.log("running");
        while (firstone.amiiboSeries === guy.amiiboSeries) {
          randombad = randombad + 1;
          firstone = data.amiibo[randombad];
        }
        console.log(firstone.amiiboSeries);
        console.log("after if");
      }

      DOMSelectors.container.insertAdjacentHTML(
        "beforeEnd",
        `
        <div class = "buttons">
          <button class="btn btn-outline btn-primary" id = "wrong1" value = "${firstone.amiiboSeries}">${firstone.amiiboSeries}</button>
        
        </div>

        `
      );

      if (correctplacement === 2) {
        DOMSelectors.container.insertAdjacentHTML(
          "beforeEnd",
          `
          <div class = "buttons">
            <button class="btn btn-outline btn-primary" id = "cor" value = "${guy.amiiboSeries}">${guy.amiiboSeries}</button>
          
          </div>
  
          `
        );
      }

      let randombad2 = Math.floor(Math.random() * 251);
      let secondone = data.amiibo[randombad2];
      console.log(secondone.amiiboSeries);
      console.log(guy.amiiboSeries);

      if (
        secondone.amiiboSeries === guy.amiiboSeries ||
        secondone.amiiboSeries === firstone.amiiboSeries
      ) {
        console.log("running");
        if (secondone.amiiboSeries === guy.amiiboSeries) {
          while (secondone.amiiboSeries === guy.amiiboSeries) {
            randombad2 = randombad2 + 1;
            secondone = data.amiibo[randombad2];
          }
          if (secondone.amiiboSeries === firstone.amiiboSeries) {
            while (
              secondone.amiiboSeries === firstone.amiiboSeries ||
              secondone.amiiboSeries === guy.amiiboSeries
            ) {
              randombad2 = randombad2 + 1;
              secondone = data.amiibo[randombad2];
            }
          }
        }
        if (secondone.amiiboSeries === firstone.amiiboSeries) {
          while (secondone.amiiboSeries === firstone.amiiboSeries) {
            randombad2 = randombad2 + 1;
            secondone = data.amiibo[randombad2];
          }
          if (secondone.amiiboSeries === guy.amiiboSeries) {
            while (
              secondone.amiiboSeries === firstone.amiiboSeries ||
              secondone.amiiboSeries === guy.amiiboSeries
            ) {
              randombad2 = randombad2 + 1;
              secondone = data.amiibo[randombad2];
            }
          }
        }
        console.log(secondone.amiiboSeries);
        console.log("after if");
      }

      DOMSelectors.container.insertAdjacentHTML(
        "beforeEnd",
        `
        <div class = "buttons">
          <button class="btn btn-outline btn-primary" id = "wrong2" value = "${secondone.amiiboSeries}">${secondone.amiiboSeries}</button>
        
        </div>

        `
      );

      if (correctplacement === 3) {
        DOMSelectors.container.insertAdjacentHTML(
          "beforeEnd",
          `
          <div class = "buttons">
            <button class="btn btn-outline btn-primary" id = "cor" value = "${guy.amiiboSeries}">${guy.amiiboSeries}</button>
          
          </div>
  
          `
        );
      }

      let randombad3 = Math.floor(Math.random() * 251);
      let thirdone = data.amiibo[randombad3];
      console.log(thirdone.amiiboSeries);
      console.log(guy.amiiboSeries);

      if (
        thirdone.amiiboSeries === guy.amiiboSeries ||
        thirdone.amiiboSeries === secondone.amiiboSeries ||
        thirdone.amiiboSeries === firstone.amiiboSeries
      ) {
        console.log("running3");
        while (
          thirdone.amiiboSeries === guy.amiiboSeries ||
          thirdone.amiiboSeries === secondone.amiiboSeries ||
          thirdone.amiiboSeries === firstone.amiiboSeries
        ) {
          randombad3 = randombad3 + 1;
          thirdone = data.amiibo[randombad3];
        }
        // while (thirdone.amiiboSeries === secondone.amiiboSeries) {
        //   randombad3 = randombad3 + 1;
        //   thirdone = data.amiibo[randombad3];
        // }
        // while (thirdone.amiiboSeries === firstone.amiiboSeries) {
        //   randombad3 = randombad3 + 1;
        //   thirdone = data.amiibo[randombad3];
        // }
        console.log(thirdone.amiiboSeries);
        console.log("after if");
      }

      DOMSelectors.container.insertAdjacentHTML(
        "beforeEnd",
        `
        <div class = "buttons">
          <button class="btn btn-outline btn-primary" id = "wrong3" value = "${thirdone.amiiboSeries}">${thirdone.amiiboSeries}</button>
        
        </div>

        `
      );

      if (correctplacement === 4) {
        DOMSelectors.container.insertAdjacentHTML(
          "beforeEnd",
          `
          <div class = "buttons">
            <button class="btn btn-outline btn-primary" id = "cor" value = "${guy.amiiboSeries}">${guy.amiiboSeries}</button>
          
          </div>
  
          `
        );
      }
      DOMSelectors.buttons = document.querySelectorAll("button");
      console.log("Button list below");
      console.log(DOMSelectors.buttons);
      while (true) {
        DOMSelectors.buttons.forEach((button) => {
          button.addEventListener("click", function () {
            console.log("Le Button unt clicked!");
            let clickvalue = button.value;

            if (clickvalue === guy.amiiboSeries) {
              DOMSelectors.container.innerHTML = "";
              DOMSelectors.container.insertAdjacentHTML(
                "beforeEnd",
                `
              <div class = "temp">
                <h2>CORRECT!</h2>
              
              </div>
      
              `
              );
              setTimeout(() => {
                DOMSelectors.container.insertAdjacentHTML(
                  "beforeEnd",
                  `
                  <button class="btn btn-outline btn-primary" id = "again">Another Question?</button>
                  `
                );
              }, 2500);
              // console.log("Correct");
            } else {
              console.log("Doofus!");
              DOMSelectors.container.innerHTML = "";
              DOMSelectors.container.insertAdjacentHTML(
                "beforeEnd",
                `
              <div class = "temp">
                <h2>You utter BAFOON! It is a multiple choice question about silly little statues how in the name of all that is good in this world were you unable to use your brain to conjour up the simplest of answer! FOR SHAME!</h2>
              
              </div>
      
              `
              );
              setTimeout(() => {
                DOMSelectors.container.insertAdjacentHTML(
                  "beforeEnd",
                  `
                  <button class="btn btn-outline btn-primary" id = "again">Get Your Aura Back?</button>
                  `
                );
              }, 2500);
              console.log("Correct");
            }
          });
        });
      }
    }
  } catch (error) {
    alert("hey I could not find that agent unc");
  }
}
async function clickandcheck() {
  try {
    // returns a promise
    // await generatequestion();
    const response = await fetch("https://www.amiiboapi.com/api/amiibo/");
    //guard clause
    if (response.status != 200) {
      throw new Error(response);
    } else {
      //convert promise to json
      let data = await response.json();
      console.log(data);
    }
  } catch (error) {
    alert("hey I could not find that agent unc");
  }
}

//get value(series) from button clicked
// see if it equals the images series
// if yes then yay you got it right
// if no then you suck
// regenerate questions
while (true) {
  await generatequestion();
}

//console.log("button list below");
//console.log(DOMSelectors.buttons);

//use filter instead of plus one to make sure buttons arent the saME
