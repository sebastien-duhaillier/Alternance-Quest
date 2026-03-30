let currentSceneIndex = 0;
let score = 0;
let lives = 3;

function getCurrentScene() {
  return scenes[currentSceneIndex];
}

function getQuestionById(questionId) {
  return questions.find((question) => question.id === questionId);
}

function loadScene() {
  const scene = getCurrentScene();

  if (!scene) {
    renderEndScreen(true, score);
    return;
  }

  const question = getQuestionById(scene.questionId);

  if (!question) {
    console.error(`Question introuvable pour questionId: ${scene.questionId}`);
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