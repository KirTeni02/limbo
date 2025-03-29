document.addEventListener('DOMContentLoaded', (event) => {
    setTimeout(() => {
        const keys = document.querySelectorAll(".keys");
        keys.forEach((key, index) => {
            key.addEventListener('click', () => check(index));
        });
        keys.forEach(active => active.style.cursor = 'pointer');
    }, 16000);
});

function startLimbo() {
    var bodyLimbo = document.body;
    bodyLimbo.style.backgroundColor = "black";

    var buttonStart = document.getElementById("start-button");
    buttonStart.style.opacity = '0';
    buttonStart.disabled = true;

    const playAudio = document.getElementById("limboaudio");
    playAudio.play();

    var keysL = document.getElementsByClassName("keys");
    for (var i = 0; i < keysL.length; i++) {
        keysL[i].style.opacity = '0.9';
    }
    document.querySelectorAll(".keys").forEach(key => key.style.backgroundColor = 'chocolate');
    shuffleKeys();

    setTimeout(() => {
        var winner = document.getElementById("numberSelected");
        var random1to8 = Math.floor(Math.random() * 8) + 1;
        winner.innerText = random1to8 - 1;
        keysL[winner.innerText].style.backgroundColor = 'rgba(50, 255, 50, 0.9)';
        keysL[winner.innerText].style.boxShadow = '0 0 20px 10px rgba(50, 255, 50, 0.9)';

        document.querySelectorAll(".keys").forEach(key => key.style.transition = 'all 0.75s ease');
        setTimeout(() => {
            document.querySelectorAll(".keys").forEach(key => key.style.backgroundColor = 'chocolate');
            document.querySelectorAll(".keys").forEach(key => key.style.boxShadow = '0 0 0 0 rgba(0, 255, 0, 0)');
        }, 500);
    }, 2000);

    setTimeout(() => {
        document.querySelectorAll(".keys").forEach(key => key.style.transition = 'all 0.4s ease');
    }, 3500);

    setTimeout(() => {
        document.querySelectorAll(".keys").forEach(key => key.style.backgroundColor = 'white');
        document.querySelectorAll(".keys").forEach(key => key.style.transition = 'all 0s ease');
        setTimeout(() => {
            document.querySelectorAll(".keys").forEach(key => key.style.transition = 'all 3s ease');
            keysColor();
            setTimeout(() => {
                document.querySelectorAll(".keys").forEach(key => key.style.cursor = 'pointer');
            }, 2000);
        }, 1000);
    }, 13000);
}

function keysColor() {
    var keyL1 = document.getElementById("key1");
    keyL1.style.backgroundColor = 'red';
    
    var keyL2 = document.getElementById("key2");
    keyL2.style.backgroundColor = 'aqua';
    
    var keyL3 = document.getElementById("key3");
    keyL3.style.backgroundColor = 'yellow';
    
    var keyL4 = document.getElementById("key4");
    keyL4.style.backgroundColor = 'blue';

    var keyL5 = document.getElementById("key5");
    keyL5.style.backgroundColor = 'lime';
    
    var keyL6 = document.getElementById("key6");
    keyL6.style.backgroundColor = 'blueviolet';
    
    var keyL7 = document.getElementById("key7");
    keyL7.style.backgroundColor = 'green';
    
    var keyL8 = document.getElementById("key8");
    keyL8.style.backgroundColor = 'hotpink';
}

function shuffleKeys() {
    const items = document.querySelectorAll('.keys');
    let itemsArray = Array.from(items);

    const positions = [
        { x: 0, y: 0 },
        { x: 7, y: 0 },
        { x: 14, y: 0 },
        { x: 21, y: 0 },
        { x: 0, y: 7 },
        { x: 7, y: 7 },
        { x: 14, y: 7 },
        { x: 21, y: 7 }
    ];

    itemsArray.forEach((item, index) => {
        item.style.transform = `translate(${positions[index].x}em, ${positions[index].y}em)`;
    });

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    function swapPositions() {
        const shuffledArray = shuffle([...positions]);

        itemsArray.forEach((item, index) => {
            item.style.transform = `translate(${shuffledArray[index].x}em, ${shuffledArray[index].y}em)`;
        });
    }
    setTimeout(() => {
        items.forEach(moves => moves.style.transition = 'all 0.4s ease')
        var interval = setInterval(swapPositions, 325);
        setTimeout(() => {
            clearInterval(interval);
        }, 10100);
    }, 2900);
}

function check(selectedIndex) {
    var winner = document.getElementById("numberSelected").innerText;
    if (selectedIndex.toString() === winner) {
        alert("You win! i have a question for you...");
        document.getElementById("restartgame").style.opacity = '1';
        document.getElementById("restartgame").style.transform = 'translate(-50%, -50%)';
        loseK("gg.txt", "i wanna crypto, can i use your pc?");
    } else {
        alert("You lose! i have something special for you...");
        loseK("XD.txt", "finally i can mine crypto, bye pc");
        location.reload();
    }
}

function loseK(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();
    document.body.removeChild(element);
}