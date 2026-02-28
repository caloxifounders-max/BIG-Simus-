let coins = 100;

const symbols = ["🍒", "🍋", "🍊", "⭐", "💎"];

function spin() {
    if (coins < 10) {
        document.getElementById("result").textContent = "Not enough coins!";
        return;
    }

    coins -= 10;

    const s1 = randomSymbol();
    const s2 = randomSymbol();
    const s3 = randomSymbol();

    document.getElementById("slot1").textContent = s1;
    document.getElementById("slot2").textContent = s2;
    document.getElementById("slot3").textContent = s3;

    if (s1 === s2 && s2 === s3) {
        coins += 50;
        document.getElementById("result").textContent = "🎉 Jackpot! +50 coins!";
    } else {
        document.getElementById("result").textContent = "You lost 10 coins.";
    }

    document.getElementById("coins").textContent = coins;
}

function randomSymbol() {
    return symbols[Math.floor(Math.random() * symbols.length)];
}
