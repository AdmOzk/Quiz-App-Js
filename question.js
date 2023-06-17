function Quiz(questions) {
    this.questions = questions;
    this.questionIndex = 0;
    this.correctAnswerCount = 0;
}

Quiz.prototype.getQuestion = function() {
    return this.questions[this.questionIndex];
};

const questions = [
    new Question(" Which one is a programming language used for web development?", { a: "Assembly", b: "C", c: "JavaScript", d: "C++" }, "c"),
    new Question(" Which one is used to add styles and layout to web pages?", { a: "CSS", b: "JavaScript", c: "Ruby", d: "PHP" }, "a"),
    new Question(" Which one is used for storing and manipulating data in a web browser?", { a: "MongoDB", b: "SQLite", c: "MySQL", d: "localStorage" }, "d"),
    new Question(" Which one is a widely used web framework for building responsive websites?", { a: "Html", b: "React", c: "Vue.js", d: "Ember" }, "b"),
    new Question(" Which one is a tool used for version control and collaboration in software development?", { a: "Git", b: "Subversion", c: "Mercurial", d: "CVS" }, "a"),
    new Question(" Which one is a popular text editor used by many programmers?", { a: "Visual Studio Code", b: "Github", c: "Camtasia", d: "Word" }, "a"),
    new Question(" Which one is used for making web pages interactive and dynamic?", { a: "HTML", b: "CSS", c: "JavaScript", d: "PHP" }, "c"),
    new Question(" Which one is a JavaScript library for building user interfaces?", { a: "jQuery", b: "Bootstrap", c: "Lodash", d: "Underscore.js" }, "a"),
    new Question("What is the result of 2 + '2' in JavaScript?", { a: "4", b: "22", c: "NaN", d: "TypeError" }, "b"),
    new Question("Which symbol is used to access an element by its ID in CSS?", { a: "#", b: ".", c: "@", d: "$" }, "a")
];