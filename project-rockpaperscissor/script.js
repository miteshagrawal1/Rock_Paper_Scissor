let decision = document.getElementById("decision");
    let array = ['rock','paper','scissor'];
    let rock = document.getElementById("rock");
    let scissor = document.getElementById("scissor");
    let paper = document.getElementById("paper");
    let pchoice = document.getElementById("pchoice");
    let cchoice = document.getElementById("cchoice");
    // let pscore = document.getElementById("pscore");
    // let cscore = document.getElementById("cscore");
    var pscore = 0;
    var cscore = 0;


    function game(player){
        let randchoice = array[Math.floor(Math.random()*array.length)];
        console.log(randchoice)
        if((player == 'rock' && randchoice=='rock')||(player == 'scissor' && randchoice=='scissor')||(player == 'paper' && randchoice=='paper')){
            pchoice.innerHTML = player;
            cchoice.innerHTML = randchoice;
            decision.innerHTML = 'Tie!!';
        }
        else if((player == 'rock' && randchoice=='paper')||(player == 'paper' && randchoice=='scissor')||(player == 'scissor' && randchoice=='rock')){
            pchoice.innerHTML = player;
            cchoice.innerHTML = randchoice;
            decision.innerHTML = 'You Lose!!';
            cscore = cscore + 1;
            document.getElementById("cscore").innerHTML = cscore;
        }
        else if((player == 'paper' && randchoice=='rock')||(player == 'scissor' && randchoice=='paper')||(player == 'rock' && randchoice=='scissor')){
            pchoice.innerHTML = player;
            cchoice.innerHTML = randchoice;
            decision.innerHTML = 'You Win!!';
            pscore = pscore + 1;
            document.getElementById("pscore").innerHTML = pscore;
        }
    }

    document.getElementById("reset").addEventListener("click",()=>{
        document.getElementById("pscore").innerHTML = '0';
        document.getElementById("cscore").innerHTML = '0';
        pchoice.innerHTML = '';
        cchoice.innerHTML = '';
        decision.innerHTML = '';
    })