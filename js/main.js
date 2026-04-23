let currentSceneIndex = 0;
let score = 0;
let lives = 3;

// Choisit une série aléatoire au lancement
const selectedQuestionSet =
  questionSets[Math.floor(Math.random() * questionSets.length)];

function getCurrentScene() {
  return scenes[currentSceneIndex];
}

function getQuestionForCurrentScene() {
  return selectedQuestionSet[currentSceneIndex];
}

function loadScene() {
  const scene = getCurrentScene();

  if (!scene) {
    renderEndScreen(true, score);
    return;
  }

  const question = getQuestionForCurrentScene();

  if (!question) {
    console.error(`Question introuvable pour la scène index: ${currentSceneIndex}`);
    renderEndScreen(false, score);
    return;
  }

  const isFinalScene = currentSceneIndex === scenes.length - 1;

  renderScene(
    scene,
    question,
    score,
    lives,
    currentSceneIndex + 1,
    scenes.length,
    isFinalScene
  );

  bindAnswerEvents(question, isFinalScene);
}

function bindAnswerEvents(question, isFinalScene) {
  const buttons = document.querySelectorAll(".answers button");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const selectedIndex = Number(button.dataset.index);

      disableAnswerButtons();

      if (selectedIndex === question.correctAnswer) {
        markAnswer(button, "correct");
        showFeedback(
          isFinalScene ? "🎉 Entretien réussi !" : "Bonne réponse !",
          "success"
        );
        score++;

        setTimeout(() => {
          currentSceneIndex++;

          if (currentSceneIndex >= scenes.length) {
            renderEndScreen(true, score);
          } else {
            loadScene();
          }
        }, 900);
      } else {
        markAnswer(button, "wrong");
        showFeedback("Mauvaise réponse !", "error");
        lives--;

        setTimeout(() => {
          if (lives <= 0) {
            renderEndScreen(false, score);
          } else {
            loadScene();
          }
        }, 1100);
      }
    });
  });
}

loadScene();