import earlySermons from "../../src/assets/sermons/1964-1969/firstset";




const appContainer = document.getElementById("content");
const sermonsContainer = document.getElementById("allsermons");
function renderHomePage() {
  appContainer.innerHTML = `
    <div class="videoDiv">      
              <div class='videoDiv' id="video">
              <video autoplay controls loop >
              <source src="../../src/assets/vids/smoketree.mp4" type="video/mp4">
              </video>
              </div>
              
              <div class='nextDiv'>
              <button onclick='${switchPrev()}' class="nextBtn">⨞</button>
              <button onclick="${switchVid()}" class="nextBtn">⨞</button>
              </div>
              <p
                class="text-center text-text2 font-bold font-mono tracking-widest py-4"
              >
                Shalom saint!! Welcome to His Voice
              </p>
              <hr class='bg-background2 w-[90%] m-auto my-2'/>   
     </div>
    `;
}


function switchVid() {
  const vidHold = document.getElementById("video");
  const newDiv = document.createElement("div");
  newDiv.innerHTML = `<video autoplay controls loop '>
      <source src="../../src/assets/vids/smoketree.mp4" type="video/mp4">
      </video>`;
  vidHold.innerHTML = "";
  vidHold.appendChild(newDiv);
}

function switchPrev() {
  const vidHold = document.getElementById("video");
  const newDiv = document.createElement("div");
  newDiv.innerHTML = `<video autoplay controls loop'>
      <source src="../../src/assets/vids/treeturn.mp4" type="video/mp4">
      </video>`;
  vidHold.innerHTML = "";
  vidHold.appendChild(newDiv);
}

// function renderSermon() {
//   appContainer.innerHTML = `

//   `;
//   return sermonElement;
// }

function renderAllSermons() {
 
  sermonsContainer.innerHTML = "";
  earlySermons.forEach((sermon) => {
   const sermonElement = document.createElement("li");
    sermonElement.innerHTML = `
    <h3>${sermon.title}</h3>
    <p>Preacher:</p>
    <p>Date: ${sermon.date}</p>
  `;
    sermonsContainer.appendChild(sermonElement);
  });
}
renderAllSermons();
function renderNewSongPage() {
  appContainer.innerHTML = `
      <div class='py-14 text-[3rem] font-mono text-text1  text-center'>
      BROKEN FELLOWSHIP
      </div>
    `;
}

// Define route handling logic
function navigateTo(route) {
  switch (route) {
    case " ":
      renderHomePage();
      break;
    case "new-song":
      renderNewSongPage();
      break;
    default:
      renderHomePage();
  }
}

navigateTo(" ");