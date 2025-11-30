const quizQuestions = [
    { question: "6-2 = ?", answer: "4" },
    { question: "Capital of India?", answer: "delhi" },
    { question: "JS stands for: ?", answer: "javascript" },
    { question: "CSS stands for?", answer: "cascading style sheets" },
    { question: "Square root of 144?", answer: "12" }
];

function runQuiz() {
    let score = 0;

    for (let i = 0; i < quizQuestions.length; i++) {
        const user = prompt(quizQuestions[i].question);

        if (!user) {
            alert("No answer given.");
            continue;
        }

        if (user.trim().toLowerCase() === quizQuestions[i].answer.toLowerCase()) {
            alert("Correct!");
            score += 1;
        } else {
            alert("Wrong! Correct answer: " + quizQuestions[i].answer);
        }
    }

    alert("Quiz over! You scored " + score + " / " + quizQuestions.length);
}

runQuiz();
