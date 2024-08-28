let userscore = 0;
let Aiscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorepara = document.querySelector("#user-score");
const Aiscorepara = document.querySelector("#ai-score");
const restartButton = document.querySelector("#restart-button");

const genAichoice = () =>{
    const options =["rock","paper","scissors"];
    const randomIdx = Math.floor(Math.random()*3);
    return options [randomIdx];
}

const drawgame = () =>{
    msg.innerText = "Game was Draw. Play Again"; 
    msg.style.backgroundColor = "#081b31";
}

const ShowWinner = (userwin,userchoice,Aichoice) =>{
    if(userwin){
        userscore++;
        userscorepara.innerText = userscore;
        msg.innerText = `You win! Your ${userchoice} beats ${Aichoice}`;
        msg.style.backgroundColor = "green"; 
    }else{
        Aiscore++;
        Aiscorepara.innerText = Aiscore;
        msg.innerText = `You Lost. ${Aichoice} beats  your ${userchoice}`;
        msg.style.backgroundColor = "red"; 
    }
}

const playGame = (userchoice)=>{
    
    const Aichoice = genAichoice();
    
    if(userchoice === Aichoice){
        drawgame();
    }else{
        let userwin = true;
        if(userchoice === "rock"){
            userwin = Aichoice === "paper" ? false : true;
        }else if(userchoice === "paper"){
            userwin = Aichoice === "scissors" ? false : true;
        }else{
            userwin = Aichoice === "rock" ? false : true;
        }
        ShowWinner(userwin,userchoice,Aichoice);
    }
}

choices.forEach((choice)=> {
    const userchoice = choice.getAttribute("Id");
    choice.addEventListener("click", () =>{
        playGame(userchoice);
    })
})

// Restart game logic
const restartGame = () => {
    userscore = 0;
    Aiscore = 0;
    userscorepara.innerText = userscore;
    Aiscorepara.innerText = Aiscore;
    msg.innerText = "Play your move";
    msg.style.backgroundColor = "#081b31";
}

restartButton.addEventListener("click", restartGame);
