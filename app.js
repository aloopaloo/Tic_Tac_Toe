let boxes = document.querySelectorAll(".box");
let newbtn = document.querySelector("#newgame");
let msgcontainer=document.querySelector(".msg-container");
let msg = document.querySelector(".winner")

let turn0 = true;                           //playerX, playerO //this is a boolean value used to determine whoes turn is this 

const winPattern =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5,],
    [6,7,8]
]

const disableboxes = () =>{
    for(let box of boxes){
        box.disabled=true;
    }
};

const enableboxes = () =>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};

const showWinner = (winner) => {
    msg.innerText= `congradulations, Winer is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableboxes();
};

const checkwinner = () => {             //arrowfunction check winner is created to check on every chance that of there is any winner or not.
    for(pattern of winPattern){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if (pos1 != "" && pos2 != "" && pos3 != "") { //checks if the box is empty or not
            if (pos1==pos2 && pos2==pos3) {             // check if the boxes have the same value or not 
                console.log("winner" ,pos1); 
                showWinner(pos1);
            }
        }

    }

};

const newgame = () => {
    console.log("New game button clicked"); // Debug
    turn0 = true;
    console.log("Turn reset to Player O"); // Debug
    enableboxes();
    console.log("Boxes enabled and cleared"); // Debug
    msgcontainer.classList.add("hide");
    console.log("Message container hidden"); // Debug
};

boxes.forEach((box) =>{
    box.addEventListener("click", () => {   //when the box is clicked then this event listener is triggered.
        // console.log("box was clicked");
        if(turn0){                          //boolean flag/boolean variable and has a boolean value. 
            box.innerText="O";              //this sets the inner text of the box to 0. 
            turn0 = false;                  //now what this does is that this now switches the chance of the other player. Like if the play 0 is first then this code changes and swicthes the chance to the player X
        }
        else{
            box.innerText="X";
            turn0=true;
        }
        box.disabled=true;
        checkwinner();                  //this command disables thebox from being "reclickable" again. which means once the box is clicked it wont get clicked again
    })
})

newbtn.addEventListener("click", newgame); //this is the event listener for the new game button.




