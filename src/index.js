function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "乱花渐欲迷人眼,浅草才能没马蹄",
    autoStart: true,
    delay: 40,
    cursor: "",
  });
}
let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
