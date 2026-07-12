function getRadioAnswer(name) {
    var options = document.getElementsByName(name);

    for (var i = 0; i < options.length; i++) {
        if (options[i].checked) {
            return options[i].value;
        }
    }

    return "";
}

function getCheckboxAnswers(name) {
    var options = document.getElementsByName(name);
    var answers = [];

    for (var i = 0; i < options.length; i++) {
        if (options[i].checked) {
            answers.push(options[i].value);
        }
    }

    return answers;
}

function sameAnswers(userAnswers, correctAnswers) {
    if (userAnswers.length !== correctAnswers.length) {
        return false;
    }

    userAnswers.sort();
    correctAnswers.sort();

    for (var i = 0; i < correctAnswers.length; i++) {
        if (userAnswers[i] !== correctAnswers[i]) {
            return false;
        }
    }

    return true;
}

function checkQuiz() {
    var score = 0;
    var points = 20;
    var results = "";


    var q1 = document.getElementById("q1").value.trim().toLowerCase();
    if (q1 === "gecko") {
        score = score + points;
        results += "<p><span class='correct'>Question 1: Correct.</span> Score: 20/20. Answer: Gecko.</p>";
    } else {
        results += "<p><span class='incorrect'>Question 1: Incorrect.</span> Score: 0/20. Answer: Gecko.</p>";
    }


    
    var q2 = getRadioAnswer("q2");
    if (q2 === "WebKit") {
        score = score + points;
        results += "<p><span class='correct'>Question 2: Correct.</span> Score: 20/20. Answer: WebKit.</p>";
    } else {
        results += "<p><span class='incorrect'>Question 2: Incorrect.</span> Score: 0/20. Answer: WebKit.</p>";
    }


    var q3 = getRadioAnswer("q3");
    if (q3 === "HTML") {
        score = score + points;
        results += "<p><span class='correct'>Question 3: Correct.</span> Score: 20/20. Answer: HTML.</p>";
    } else {
        results += "<p><span class='incorrect'>Question 3: Incorrect.</span> Score: 0/20. Answer: HTML.</p>";
    }


    
    var q4 = getRadioAnswer("q4");
    if (q4 === "Style") {
        score = score + points;
        results += "<p><span class='correct'>Question 4: Correct.</span> Score: 20/20. Answer: Style and layout.</p>";
    } else {
        results += "<p><span class='incorrect'>Question 4: Incorrect.</span> Score: 0/20. Answer: Style and layout.</p>";
    }


    
    var q5 = getCheckboxAnswers("q5");
    var q5Correct = ["Blink", "Gecko", "WebKit"];
    if (sameAnswers(q5, q5Correct)) {
        score = score + points;
        results += "<p><span class='correct'>Question 5: Correct.</span> Score: 20/20. Answers: Blink, Gecko, and WebKit.</p>";
    } else {
        results += "<p><span class='incorrect'>Question 5: Incorrect.</span> Score: 0/20. Answers: Blink, Gecko, and WebKit.</p>";
    }

    var passFail = "";
    var resultClass = "";

    if (score >= 70) {
        passFail = "Pass";
        resultClass = "pass";
    } else {
        passFail = "Fail";
        resultClass = "fail";
    }

    document.getElementById("results").className = resultClass;
    document.getElementById("results").innerHTML =
        "<h3>Quiz Results</h3>" +
        "<p><b>Overall Result:</b> " + passFail + "</p>" +
        "<p><b>Total Score:</b> " + score + "/100</p>" +
        results;
}

function resetQuiz() {
    document.getElementById("quizForm").reset();
    document.getElementById("results").innerHTML = "";
    document.getElementById("results").className = "";
}
