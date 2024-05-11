import earlySermons from "../../src/assets/sermons/1964-1969/firstset.js";

const appContainer = document.getElementById("content");
const sermonsContainer = document.getElementById("allsermons");
function renderHomePage() {
  appContainer.innerHTML = `
    <div class="videoDiv">      
              <div class='videoHold' id="video">
              <video autoplay controls loop >
              <source src="../../src/assets/vids/smoketree.mp4" type="video/mp4">
              </video>
              </div>
              
              <div class='nextDiv'>
              <button onclick='switchPrev()' class="nextBtn">⨞</button>
              <button onclick='switchVid()' class="nextBtn">⨞</button>
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
  vidHold.innerHTML = "";
  // const newDiv = document.createElement("div");
  vidHold.innerHTML = `<video autoplay controls loop'>
      <source src="../../src/assets/vids/treeturn.mp4" type="video/mp4">
      </video>`;
  // vidHold.appendChild(newDiv);
}

// function renderSermon() {
//   appContainer.innerHTML = `

//   `;
//   return sermonElement;
// }

function renderAllSermons() {
  sermonsContainer.innerHTML = "";
  earlySermons.forEach((sermon) => {
    const sermonElement = document.createElement("div");
    sermonElement.classList.add("sermonDiv");
    if (sermon.id % 2 === 0) {
      sermonElement.style.background = "#3d4043";
    } else {
      sermonElement.style.background = "#303336";
    }
    sermonElement.innerHTML = `
    <div>
    <h3 style='color:#bfc5c9; font-family:monospace; font-size:.9rem'>${sermon.title}</h3>
    <p style='color:#5e9bc3; font-family:monospace; font-size:.7rem'> ${sermon.date}</p>
    </div>

    <div>
    <p style='color:#bfc5c9; font-family:monospace; font-size:.7rem'>Time:</p>
    <p style='color:#bfc5c9; font-family:monospace; font-size:.7rem'>Location:</p>
    </div>
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
