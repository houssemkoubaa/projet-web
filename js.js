function openNavbar() {
  document.getElementById("sideNavigationBar").style.width = "50%";
}
function closeNavbar() {
  document.getElementById("sideNavigationBar").style.width = "0%";
}

function getDiploma() {
  const diplomeSection = document.getElementById("isimsdiplome");

  if (diplomeSection.style.display === "block") {
    diplomeSection.style.display = "none";
  } else {
    diplomeSection.style.display = "block";
  }
}
function getbaccalaureate() {
  const baccalaureate = document.getElementById("baccalaureate");

  if (baccalaureate.style.display === "block") {
    baccalaureate.style.display = "none";
  } else {
    baccalaureate.style.display = "block";
  }
}
function checkAnswers() {
  const correctAnswers = {
    q1: "c",
    q2: "a",
    q3: "b",
    q4: "b",
    q5: "b",
    q6: "d",
    q7: "b",
    q8: "c",
    q9: "c",
    q10: "a",
    q11: "a",
  };

  let score = 0;
  let userAnswers = {};

  for (let i = 1; i <= 11; i++) {
    const questionName = "q" + i;
    const userAnswer = document.querySelector(
      'input[name="' + questionName + '"]:checked'
    );

    if (userAnswer) {
      userAnswers[questionName] = userAnswer.value;

      if (userAnswer.value === correctAnswers[questionName]) {
        score++;
      }
    }
  }
  const displayedResults = document.getElementById("scoreDisplay");
  displayedResults.style.display = "block";
  const scoreDisplay = document.getElementById("scoreDisplay");
  scoreDisplay.innerHTML =
    "Votre score est de " +
    score +
    " sur 11.<br/><br/>Réponses correctes:<br/>" +
    "1 = JavaScript | 2 = Swift  | 3 = France  | 4 = Lionel Messi| 5 = Brésil | 6 = Leonardo da Vinci | 7 = Surréalisme | 8 = La Pieta| 9 = Bataille de Waterloo| 10 =  L'assassinat de l'archiduc François-Ferdinand | 11 = Jules César ";
}

function EnvoyerMessage() {
  var nom = getElementById("nom").value;
  var comment = getElementById("comment").value;
  alert("Message de: ", nom, ":", comment);
}
