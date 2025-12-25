let user = 0, comp = 0;
let choice = document.querySelectorAll(".sign");
let texres = document.querySelector(".textresult");
let youscr = document.querySelector("#ys");
let comscr = document.querySelector("#cs");
let res = document.querySelector("#reset");
choice.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random() * 3)];
}
const playGame = (userChoice) => {
    console.log(`choice is ` + userChoice);
    let CompChoice = genCompChoice();
    console.log(`computer choice is ` + CompChoice);

    if (CompChoice === userChoice) {
        texres.textContent = "TIE!";
        texres.style.color="darkgray";
    }
    else {
        var userWin = true;
        if (userChoice === "rock") { userWin = CompChoice === "paper" ? false : true; }
        else if (userChoice === "paper") { userWin = CompChoice === "scissors" ? false : true; }
        else { userWin = CompChoice === "rock" ? false : true; }
        updateScore(userWin);
    }

    

};
updateScore = (userWin) => {
    userWin ? user++ : comp++;
    youscr.textContent = "" + user;
    comscr.textContent = "" + comp;
    if (userWin) {
        texres.textContent = "YOU WIN!";
        texres.style.color = "green"
    }
    else {
        texres.textContent = "YOU LOSE !";
        texres.style.color = "red";
    }

}
res.addEventListener("click", () => {
    user = 0;
    comp = 0;
    youscr.textContent = "" + user;
    comscr.textContent = "" + comp;
    texres.textContent = "PLAY YOUR MOVE";
    texres.style.color="darkgray";
})

