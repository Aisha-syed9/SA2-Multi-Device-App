const questions = [
    {
      text: "What is your favorite magical creature?",
      options: {
        Gryffindor: "Phoenix",
        Hufflepuff: "Niffler",
        Ravenclaw: "Hippogriff",
        Slytherin: "Basilisk",
      },
    },
    {
      text: "What is your ideal weekend activity?",
      options: {
        Gryffindor: "Adventuring in the Forbidden Forest",
        Hufflepuff: "Gardening in the Herbology Greenhouse",
        Ravenclaw: "Reading ancient magical texts",
        Slytherin: "Practicing advanced potions",
      },
    },
    {
      text: "What trait do you value most?",
      options: {
        Gryffindor: "Bravery",
        Hufflepuff: "Loyalty",
        Ravenclaw: "Intelligence",
        Slytherin: "Ambition",
      },
    },
    {
      text: "Which class would you excel in?",
      options: {
        Gryffindor: "Defense Against the Dark Arts",
        Hufflepuff: "Care of Magical Creatures",
        Ravenclaw: "Charms",
        Slytherin: "Potions",
      },
    },
    {
      text: "Which magical object would you choose?",
      options: {
        Gryffindor: "Sword of Gryffindor",
        Hufflepuff: "Cup of Helga Hufflepuff",
        Ravenclaw: "Ravenclaw Diadem",
        Slytherin: "Locket of Slytherin",
      },
    },
    {
      text: "What is your greatest strength?",
      options: {
        Gryffindor: "Courage",
        Hufflepuff: "Kindness",
        Ravenclaw: "Wisdom",
        Slytherin: "Resourcefulness",
      },
    },
  ];
  
  let currentQuestionIndex = 0;
  let housePoints = {
    Gryffindor: 0,
    Hufflepuff: 0,
    Ravenclaw: 0,
    Slytherin: 0,
  };
  
  const startScreen = document.getElementById("start-screen");
  const startBtn = document.getElementById("start-btn");
  const quizContent = document.getElementById("quiz-content");
  const questionText = document.getElementById("question-text");
  const optionsContainer = document.getElementById("options-container");
  const result = document.querySelector(".result");
  const houseName = document.getElementById("house-name");
  
  startBtn.addEventListener("click", startQuiz);
  
  function startQuiz() {
    startScreen.style.display = "none";
    quizContent.style.display = "block";
    loadQuestion();
  }
  
  function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionText.textContent = currentQuestion.text;
    optionsContainer.innerHTML = "";
  
    for (const [house, answer] of Object.entries(currentQuestion.options)) {
      const button = document.createElement("button");
      button.textContent = answer;
      button.setAttribute("data-house", house);
      button.addEventListener("click", handleAnswer);
      optionsContainer.appendChild(button);
    }
  }
  
  function handleAnswer(event) {
    const selectedHouse = event.target.getAttribute("data-house");
    housePoints[selectedHouse]++;
    currentQuestionIndex++;
  
    if (currentQuestionIndex < questions.length) {
      loadQuestion();
    } else {
      displayResult();
    }
  }
  
  function displayResult() {
    quizContent.style.display = "none";
    result.style.display = "block";
  
    const sortedHouse = Object.keys(housePoints).reduce((a, b) =>
      housePoints[a] > housePoints[b] ? a : b
    );
  
    houseName.textContent = sortedHouse;
  }
  
  function restartQuiz() {
    currentQuestionIndex = 0;
    housePoints = { Gryffindor: 0, Hufflepuff: 0, Ravenclaw: 0, Slytherin: 0 };
    quizContent.style.display = "none";
    result.style.display = "none";
    startScreen.style.display = "block";
  }
  