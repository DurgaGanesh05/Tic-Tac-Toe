let boxes = document.querySelectorAll(".box"); //
let resetGame = document.querySelector(".reset-button"); //
let winnerAnc = document.querySelector("h2");
let newGame = document.querySelector(".newGame-btn");
let msg = document.querySelector(".msg-container");

const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
let turnO = true;
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        // console.log("box clicked");
        if(turnO){
            box.innerText = "O";
            turnO = false;
        }else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

const disableAllBtn = () => {
    for(box of boxes) {
        box.disabled = true;
    }
}

const enableAllBtn = () => {
    for(box of boxes) {
        box.disabled = false;
        box.innerText="";
    }
}

const declareWinner = (winner) => {
    winnerAnc.innerText = `Congratualtions, Winner is - ${winner}`;
    // console.log(winner);
    msg.classList.add("show");
}

const checkWinner = () => {
    for(let pattern of winPatterns) {
        let posVal1 = boxes[pattern[0]].innerText;
        let posVal2 = boxes[pattern[1]].innerText;
        let posVal3 = boxes[pattern[2]].innerText;

        if(posVal1 != "" && posVal2 != "" && posVal3 != ""){
            if(posVal1 === posVal2 && posVal2 === posVal3){
                console.log("winner", posVal1);
                declareWinner(posVal1);
                disableAllBtn();
            }
        }
        
    }
}

resetGame.addEventListener("click", () => {
    turnO = true;
    enableAllBtn();
    
})
newGame.addEventListener("click", () => {
    turnO = true;
    enableAllBtn();
    msg.classList.remove("show");
})