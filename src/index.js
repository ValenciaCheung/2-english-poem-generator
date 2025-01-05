function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 40,
    cursor: "",
  });
}
function generatePoem(event) {
  event.preventDefault();

  let userInstructions = document.querySelector("#user-instructions");
  let apiKey = "080cc4c3o478b5af3td4bb7f689bee06";
  let context =
    "You are a romantic Poem expert and love to write short poems. You mission is to generate a 4 line poem and separate each line with a <br />. Make sure to follow the user instructions. Do not include a title to the poem. Sign the poem with 'Valencia AI' inside a <strong> element at the end of the poem and NOT at the beginning";
  let prompt = `Write a short 4 lineromantic English poem about ${userInstructions.value} and each line should translate to chinese and display below the English line. `;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${encodeURIComponent(
    prompt
  )}&context=${encodeURIComponent(context)}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.innerHTML = `<div id="blink">⏳ Generating a bilingual 4-line poem about ${userInstructions.value} </div>`;
  poemElement.classList.remove("hidden");

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
