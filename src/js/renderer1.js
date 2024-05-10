import earlySermons from "../assets/sermons/1964-1969/firstset";
// const appContainer = document.getElementById("content");

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
