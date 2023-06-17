const quiz = new Quiz(questions);
const ui = new UI();

ui.btn_start.addEventListener("click", function() {
    ui.quiz_box.classList.add("active");
    startTimer(10);
    startTimerLine();
    ui.showQuestion(quiz.getQuestion());
    ui.showQuestionCount(quiz.questionIndex + 1, quiz.questions.length);
    ui.btn_next.classList.remove("show");
});

ui.btn_next.addEventListener("click", function() {
    if (quiz.questions.length !== quiz.questionIndex + 1) {
        quiz.questionIndex += 1;
        clearInterval(counter);
        clearInterval(counterLine);
        startTimer(10);
        startTimerLine();
        ui.showQuestion(quiz.getQuestion());
        ui.showQuestionCount(quiz.questionIndex + 1, quiz.questions.length);
        ui.btn_next.classList.remove("show");
    } else {
        clearInterval(counter);
        clearInterval(counterLine);
        ui.quiz_box.classList.remove("active");
        ui.score_box.classList.add("active");
        ui.showScore(quiz.questions.length, quiz.correctAnswerCount);
    }
});

ui.btn_quit.addEventListener("click", function() {
    window.location.reload();
});

ui.btn_replay.addEventListener("click", function() {
    quiz.questionIndex = 0;
    quiz.correctAnswerCount = 0;
    ui.btn_start.click();
    ui.score_box.classList.remove("active");
});

function optionSelected(option) {
    clearInterval(counter);
    clearInterval(counterLine);
    let answer = option.querySelector("span b").textContent;
    let question = quiz.getQuestion();

    if (question.checkAnswer(answer)) {
        quiz.correctAnswerCount += 1;
        option.classList.add("correct");
        option.insertAdjacentHTML("beforeend", ui.correctIcon);
    } else {
        option.classList.add("incorrect");
        option.insertAdjacentHTML("beforeend", ui.incorrectIcon);
    }

    let options = ui.option_list.querySelectorAll(".option");
    for (let i = 0; i < options.length; i++) {
        options[i].classList.add("disabled");
    }

    ui.btn_next.classList.add("show");
}

let counter;
function startTimer(time) {
    counter = setInterval(timer, 1000);

    function timer() {
        ui.time_second.textContent = time;
        time--;

        if (time < 0) {
            clearInterval(counter);
            // ui.time_text.textContent = "Time's Up";

            let answer = quiz.getQuestion().correctAnswer;

            let options = ui.option_list.querySelectorAll(".option");
            for (let i = 0; i < options.length; i++) {
                if (options[i].querySelector("span b").textContent === answer) {
                    options[i].classList.add("correct");
                    options[i].insertAdjacentHTML("beforeend", ui.correctIcon);
                }
                options[i].classList.add("disabled");
            }

            ui.btn_next.classList.add("show");
        }
    }
}

let counterLine;
function startTimerLine() {
    let line_width = 0;
    counterLine = setInterval(timer, 20);

    function timer() {
        line_width += 1;
        ui.time_line.style.width = line_width + "px";

        if (line_width > 549) {
            clearInterval(counterLine);
        }
    }
}