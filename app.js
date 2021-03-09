const player_1 = {
    score: 0,
    button : document.querySelector("#player-1-btn"),
    display : document.querySelector("#player-1-score-display"),
};

const player_2 = {
    score: 0,
    button : document.querySelector("#player-2-btn"),
    display : document.querySelector("#player-2-score-display"),
};

const winningScoreSelect = document.querySelector("#playto");
const resetButton = document.querySelector("#reset-score");

let winning_score = 3;
let isGameOver = false;

let green_color = "has-text-success";
let red_color = "has-text-danger"

function updateScore(player, opponent) {
    if (player !== winning_score && !isGameOver) {
        
        player.score++;
        player.display.textContent = player.score;
        
        if(player.score === winning_score) {
            isGameOver = true;
            
            player.display.classList.add(green_color);
            opponent.display.classList.add(red_color);
            
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
    }
}

winningScoreSelect.addEventListener('change', function() {
   winning_score = parseInt(this.value);
   reset();
});

player_1.button.addEventListener('click', function () {
    updateScore(player_1, player_2);
});

player_2.button.addEventListener('click', function () {
    updateScore(player_2, player_1);
});

resetButton.addEventListener('click', reset);

function reset() {
    isGameOver = false;
    
    for(p of [player_1, player_2]) {
        p.score = 0;
        p.display.textContent = 0;
        p.button.disabled = false;
        p.display.classList.remove(green_color, red_color);
    }
}