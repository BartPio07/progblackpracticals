const inputs = document.querySelectorAll(".quiz-input");
const answerImgs = document.querySelectorAll(".answer-img")
const checkBtn = document.getElementById("check-answers-btn");
const resetBtn = document.getElementById("reset-btn");
const attempsTxt = document.getElementById("attempts-txt");
const quizOverlay = document.getElementById("quiz-overlay");
const quizDiv = document.getElementById("quiz-div");
const correctAnswers = [
    ["tesla"],
    ["ferrari"],
    ["bmw"],
    ["audi"],
    ["mercedes", "mercedes-benz", "mercedes benz"],
    ["porsche"],
    ["volkswagen"],
    ["lamborghini"],
    ["opel"],
    ["maybach"]
];
let attempts = 1;
let correct = 0;

checkBtn.addEventListener("click", checkAnswers);
resetBtn.addEventListener("click", resetQuiz);

function checkAnswers(){
    if (attempts >= 10){
        showAnswers();
        return;
    }
    if (correct >= 10){
        return;
    }
    inputs.forEach((input, idx) => {
        ans = input.value.toLowerCase();
        if (correctAnswers[idx].includes(ans)){
            answerImgs[idx].src = "images/checkmark.png";
            correct ++;
        }
        else{
            answerImgs[idx].src = "images/cross.png";
        }
    });
    if (correct == 10){
        quizDiv.style.display = "none";
        quizOverlay.style.display = "flex";
    }
    else{
        attempts ++;
    }

    attempsTxt.innerHTML = `Attempts: ${attempts} / 10`;
};

function showAnswers(){
    inputs.forEach((input, idx) => {
        input.value = correctAnswers[idx][0];
        input.disabled = true;
    });
}

function resetQuiz(){
    inputs.forEach((input, idx) => {
        input.value = "";
        answerImgs[idx].src = "images/questionmark.png";
        input.disabled = false;
    });
    correct = 0;
    attempts = 1;
    attempsTxt.innerHTML = `Attempts: ${attempts} / 10`;
    quizDiv.style.display = "flex";
    quizOverlay.style.display = "none";
};