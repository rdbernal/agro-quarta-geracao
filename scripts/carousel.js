const subtitle = document.getElementById("home-banner-subtitle");

const content = [
  "<strong>Especializada na distribuição</strong> de hortifruti",
  "<strong>Conectando produtores</strong> e pontos de venda",
  "<strong>Atendendo de forma personalizada</strong> de acordo com suas necessidades"
]

const keyframe = [
  { opacity: "1" },
  { opacity: "0"},
  { opacity: "1" }
];

const keyframeOptions = {
  duration: 2000,
  iterations: 1 
}

let counter = 0;

const changeContent = () => {
  const currentContent = subtitle.innerHTML.trim();
  const currentIndex = content.indexOf(currentContent);

  subtitle.animate(keyframe, keyframeOptions);

  setTimeout(() => {
    if (currentIndex + 1 < content.length) {
      subtitle.innerHTML = content[currentIndex + 1];
    } else {
      subtitle.innerHTML = content[0];
    }
  }, 1000);
}

function delay(time) {
  counter++;
  setTimeout(() => {
    changeContent();
  }, time)
}

function startCarousel() {
  setInterval(() => {
    let time = counter * 2000;

    delay(time);
  }, 5000);
}

startCarousel(content.indexOf(subtitle.innerHTML.trim()));