let currentSceneIndex = 0;
let score = 0;
let lives = 3;
let currentLevel = 1;

const selectedQuestionSet =
  questionSets[Math.floor(Math.random() * questionSets.length)];

const selectedLevelTwoQuestionSet =
  levelTwoQuestionSets[Math.floor(Math.random() * levelTwoQuestionSets.length)];

function getCurrentScenes() {
  return currentLevel === 1 ? levelOneScenes : levelTwoScenes;
}

function getCurrentQuestions() {
  return currentLevel === 1 ? selectedQuestionSet : selectedLevelTwoQuestionSet;
}

function getCurrentScene() {
  return getCurrentScenes()[currentSceneIndex];
}

function getQuestionForCurrentScene() {
  return getCurrentQuestions()[currentSceneIndex];
}

function loadScene() {
  const scenes = getCurrentScenes();
  const scene = getCurrentScene();

  if (!scene) {
    renderEndScreen(true, score, currentLevel);
    return;
  }

  const question = getQuestionForCurrentScene();

  if (!question) {
    console.error(`Question introuvable pour la scène index: ${currentSceneIndex}`);
    renderEndScreen(false, score, currentLevel);
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

function startLevelTwo() {
  currentLevel = 2;
  currentSceneIndex = 0;
  lives = 3;
  loadScene();
}

function bindAnswerEvents(question, isFinalScene) {
  const buttons = document.querySelectorAll(".answers button");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const selectedIndex = Number(button.dataset.index);

      disableAnswerButtons();

      if (selectedIndex === question.correctAnswer) {
        markAnswer(button, "correct");
        showFeedback("Bonne réponse !", "success");
        score++;

        setTimeout(() => {
          currentSceneIndex++;

          if (currentSceneIndex >= getCurrentScenes().length) {
            renderEndScreen(true, score, currentLevel);
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
            renderEndScreen(false, score, currentLevel);
          } else {
            loadScene();
          }
        }, 1100);
      }
    });
  });
}

loadScene();