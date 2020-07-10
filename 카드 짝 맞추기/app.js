var 가로 = 4;
var 세로 = 3;
var 색깔후보 = ['red', 'red', 'orange', 'orange', 'green', 'green', 'yellow', 'yellow', 'white', 'white', 'pink', 'pink'];
var 색깔 = [];
for (var i = 0; 색깔후보.length > 0; i++) {
    색깔 = 색깔.concat(색깔후보.splice(Math.floor(Math.random() * 색깔후보.length), 1));
}
console.log(색깔);
var 중단플래그 = true;

function 카드세팅(가로, 세로) {
    중단플래그 = false;
    for (var i = 0; i < 가로 * 세로; i++) {
        var card = document.createElement('div');
        card.className = 'card';
        var cardInner = document.createElement('div');
        cardInner.className = 'card-inner';
        var cardFront = document.createElement('div');
        cardFront.className = 'card-front'
        var cardBack = document.createElement('div');
        cardBack.className = 'card-back';
        cardBack.style.backgroundColor = 색깔[i];
        cardInner.appendChild(cardFront);
        cardInner.appendChild(cardBack);
        card.appendChild(cardInner);

        (function (c) { //비동기 클로저문제로인해 즉시실행함수로만듬
            card.addEventListener('click', function () {
                if (중단플래그) {
                    c.classList.toggle('flipped');
                }
            });
        })(card);
        document.body.appendChild(card);
    }
    document.querySelectorAll('.card').forEach(function (card, index) {
        setTimeout(() => {
            card.classList.add('flipped');

        }, 1000 + 100 * index);
    });
    setTimeout(() => {
        document.querySelectorAll('.card').forEach(function (card, index) {
            card.classList.remove('flipped');
        });
        중단플래그 = true;
    }, 5000);
}
카드세팅(가로, 세로);