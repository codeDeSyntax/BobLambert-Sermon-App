<<<<<<< Updated upstream
import earlySermons from "../../src/assets/sermons/1964-1969/firstset";



=======
import earlySermons from "../assets/sermons/1964-1969/firstset.js";
>>>>>>> Stashed changes

const appContainer = document.getElementById("content");
const sermonsContainer = document.getElementById("allsermons");
function renderHomePage() {
  appContainer.innerHTML = `
<<<<<<< Updated upstream
    <div class="videoDiv">      
              <div class='videoDiv' id="video">
              <video autoplay controls loop >
              <source src="../../src/assets/vids/smoketree.mp4" type="video/mp4">
=======
    <div class="w-full  rounded-lg overflow-hidden pt-20">
              
              <div class='w-full' id="video">
              <video autoplay controls loop class='w-[90%] m-auto h-[40vh] object-cover rounded-md'>
              <source src="../src/assets/vids/smoketree.mp4" type="video/mp4">
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
              <hr class='bg-background2 w-[90%] m-auto my-2'/>   
     </div>
=======
              <hr class='bg-background2 w-[90%] m-auto my-2'/>
              <!-- dividers dividers -->
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                <div class="relative mb-12 px-3 lg:mb-0">
                  <div class="mb-2 flex justify-center">
                    <span class="text-primary">
                      <img
                        src="../src/assets/icons/books.png"
                        class="h-14 w-14 z-10"
                      />
                    </span>
                  </div>
                  <h6
                    class="mb-0 font-normal text-center text-text2 text-[.9rem]"
                  >
                    New Birth
                  </h6>
                  <p class='text-blu absolute right-0 top-0 text-[3rem] '>⇢</p>
                </div>
                <div class="relative mb-12 px-3 lg:mb-0">
                  <div class="mb-2 flex justify-center">
                    <span class="text-primary">
                      <img src="../src/assets/icons/books.png" class="h-14 w-14 z-10" />
                    </span>
                  </div>
                  <h6
                    class="mb-0 font-normal text-center text-text2 text-[.9rem]"
                  >
                    Outpouring
                  </h6>
                  <p class='text-blu absolute right-0 top-0 text-[3rem] '>⇢</p>
                </div>
                <div class="relative mb-12 px-3 lg:mb-0">
                  <div class="mb-2 flex justify-center">
                    <span class="text-primary">
                      <img src="../src/assets/icons/books.png" class="h-14 w-14" />
                    </span>
                  </div>
                  <h6
                    class="mb-0 text-center text-text2 font-normal text-[.9rem]"
                  >
                    Change of Body
                  </h6>
                  <p class='text-blu absolute right-0 top-0 text-[3rem] '>⇢</p>
                </div>
                <div class="relative mb-12 px-3 lg:mb-0">
                  <div class="mb-2 flex justify-center">
                    <span class="text-primary">
                      <img src="../src/assets/icons/books.png" class="h-14 w-14" />
                    </span>
                  </div>
                  <h6
                    class="mb-0 text-center text-text2 font-normal text-[.9rem]"
                  >
                    Back to Eden
                  </h6>
                </div>
              </div>
             
            </div>
>>>>>>> Stashed changes
    `;
}

function switchVid() {
  const vidHold = document.getElementById("video");
  const newDiv = document.createElement("div");
<<<<<<< Updated upstream
  newDiv.innerHTML = `<video autoplay controls loop '>
      <source src="../../src/assets/vids/smoketree.mp4" type="video/mp4">
=======
  newDiv.innerHTML = `<video autoplay controls loop class='w-[90%] m-auto h-[40vh] object-cover rounded-md'>
      <source src="../src/assets/vids/smoketree.mp4" type="video/mp4">
>>>>>>> Stashed changes
      </video>`;
  vidHold.innerHTML = "";
  vidHold.appendChild(newDiv);
}

function switchPrev() {
  const vidHold = document.getElementById("video");
  const newDiv = document.createElement("div");
<<<<<<< Updated upstream
  newDiv.innerHTML = `<video autoplay controls loop'>
      <source src="../../src/assets/vids/treeturn.mp4" type="video/mp4">
=======
  newDiv.innerHTML = `<video autoplay controls loop class='w-[90%] m-auto h-[40vh] object-cover rounded-md'>
      <source src="../src/assets/vids/treeturn.mp4" type="video/mp4">
>>>>>>> Stashed changes
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
    //add a data attribute to store the pdf name
    // replace ""00-Earths Final Moments"" with the key of the object containing the pdf name
    //eg. file{name:,pdf:,preacher,} replace "00-Earths Final Moments" with file[pdf]
    sermonElement.setAttribute("data-url", "00-Earths Final Moments");
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

<<<<<<< Updated upstream
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
=======
// // Define route handling logic
// function navigateTo(route) {
//   switch (route) {
//     case " ":
//       renderHomePage();
//       break;
//     case "new-song":
//       renderNewSongPage();
//       break;
//     default:
//       renderHomePage();
//   }
// }
// // Initial page rendering
// navigateTo(" ");
>>>>>>> Stashed changes
