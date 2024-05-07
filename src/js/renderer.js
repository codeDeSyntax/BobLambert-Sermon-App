import { PDFDocument } from 'pdfjs-dist'

const appContainer = document.getElementById("content");

const pdf = new PDFDocument('../assets/sermons/Broken Fellowship.pdf')

const text = await pdf.getPage(1).getTextContext();
console.log(text.items.map(item => item.str).join(''))

function renderHomePage() {
  appContainer.innerHTML = `
    <div class="w-full  rounded-lg overflow-hidden pt-20">
              
              <div class='w-full' id="video">
              <video autoplay controls loop class='w-[90%] m-auto h-[40vh] object-cover rounded-md'>
              <source src="../../src/assets/vids/treeturn.mp4" type="video/mp4">
              </video>
              </div>
              
              <div class='flex items-center justify-between w-[75%] m-auto'>
              <button onclick="switchPrev()" class=" px-1 rounded-sm text-text2 text-xl">⨞</button>
              <button onclick="switchVid()" class=" px-1 rounded-sm text-text2 text-xl rotate-180">⨞</button>
              </div>
              <p
                class="text-center text-text2 font-bold font-mono tracking-widest py-4"
              >
                Shalom saint!! Welcome to His Voice
              </p>
              <hr class='bg-background2 w-[90%] m-auto my-2'/>
              <!-- dividers dividers -->
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                <div class="relative mb-12 px-3 lg:mb-0">
                  <div class="mb-2 flex justify-center">
                    <span class="text-primary">
                      <img
                        src="../../src/assets/icons//books.png"
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
                      <img src="../../src/assets/icons/books.png" class="h-14 w-14 z-10" />
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
                      <img src="../../src/assets/icons/books.png" class="h-14 w-14" />
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
                      <img src="../../src/assets/icons/books.png" class="h-14 w-14" />
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
    `;
}

 function switchVid() {
  const vidHold = document.getElementById("video");
  const newDiv = document.createElement("div");
  newDiv.innerHTML = `<video autoplay controls loop class='w-[90%] m-auto h-[40vh] object-cover rounded-md'>
      <source src="../../src/assets/vids/smoketree.mp4" type="video/mp4">
      </video>`;
  vidHold.innerHTML = "";
  vidHold.appendChild(newDiv);
}

function switchPrev() {
  const vidHold = document.getElementById("video");
  const newDiv = document.createElement("div");
  newDiv.innerHTML = `<video autoplay controls loop class='w-[90%] m-auto h-[40vh] object-cover rounded-md'>
      <source src="../../src/assets/vids/treeturn.mp4" type="video/mp4">
      </video>`;
  vidHold.innerHTML = "";
  vidHold.appendChild(newDiv);
}

function renderNewSongPage() {
  appContainer.innerHTML = `
      <div class='py-14'>
      <h1>New Song Page</h1>
      <p>This is the new song page.</p>
      <button onclick="navigateTo('')">Go back to Home</button>
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
// Initial page rendering
navigateTo(" ");
