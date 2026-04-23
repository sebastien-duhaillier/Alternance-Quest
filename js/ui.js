function setSceneBackground(theme) {
  const imagePath = `./assets/images/${theme}.jpg`;
  document.body.style.backgroundImage = `url("${imagePath}")`;
}

function renderScene(
  scene,
  question,
  score = 0,
  lives = 3,
  currentLevel = 1,
  totalLevels = 1,
  isFinalScene = false
) {
  const app = document.getElementById("app");

  if (!app) {
    console.error("Élément #app introuvable dans le HTML.");
    return;
  }

  if (!scene || !question) {
    app.innerHTML = `
      <h1>Alternance Quest</h1>
      <section class="scene">
        <p class="question">Erreur : scène ou question introuvable.</p>
      </section>
      <p class="status">Score : ${score} | Vies : ${lives}</p>
    `;
    return;
  }

  setSceneBackground(scene.theme);

  app.innerHTML = `
    <h1>Alternance Quest</h1>

    <section class="scene ${isFinalScene ? "boss" : ""}">
      <h2 class="scene-title"></h2>
      <p class="scene-description"></p>

      ${isFinalScene ? `<p class="boss-warning">⚠️ Entretien final en cours...</p>` : ""}

      <p class="question"></p>

      <div class="answers"></div>

      <p class="feedback" id="feedback"></p>
    </section>

    <div class="progress">
      <div class="progress-bar" style="width: ${((currentLevel - 1) / totalLevels) * 100}%"></div>
    </div>

    <p class="status">
      Niveau : ${currentLevel} / ${totalLevels} | Score : ${score} | Vies : ${lives}
    </p>
  `;

  const sceneTitle = app.querySelector(".scene-title");
  const sceneDescription = app.querySelector(".scene-description");
  const questionText = app.querySelector(".question");
  const answersContainer = app.querySelector(".answers");

  sceneTitle.textContent = scene.name;
  sceneDescription.textContent = scene.description;
  questionText.textContent = question.question;

  question.choices.forEach((choice, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.dataset.index = index;
    button.textContent = choice;
    answersContainer.appendChild(button);
  });
}

function showFeedback(message, type) {
  const feedback = document.getElementById("feedback");

  if (!feedback) return;

  feedback.textContent = message;
  feedback.className = `feedback ${type}`;
}

function disableAnswerButtons() {
  const buttons = document.querySelectorAll(".answers button");

  buttons.forEach((button) => {
    button.disabled = true;
  });
}

function markAnswer(button, type) {
  if (!button) return;
  button.classList.add(type);
}

function renderEndScreen(win, score) {
  const app = document.getElementById("app");

  if (!app) {
    console.error("Élément #app introuvable dans le HTML.");
    return;
  }

  document.body.style.backgroundImage = `url("./assets/images/end-screen.jpg")`;

  app.innerHTML = `
    <h1>${win ? "🎉 Contrat obtenu !" : "💀 Échec..."}</h1>

    <section class="scene">
      <p class="question end-message"></p>

      <div class="answers">
        <button type="button" id="restart-btn">Rejouer</button>
      </div>
    </section>

    <p class="status">Score final : ${score}</p>
  `;

  const endMessage = app.querySelector(".end-message");
  endMessage.textContent = win
    ? "Bravo ! Tu as réussi Alternance Quest et décroché ton contrat."
    : "Tu as perdu toutes tes vies. Il faudra retenter ta chance.";

  const restartButton = document.getElementById("restart-btn");

  if (restartButton) {
    restartButton.addEventListener("click", () => {
      window.location.reload();
    });
  }
}