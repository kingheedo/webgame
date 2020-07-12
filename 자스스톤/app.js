var 상대영웅 = document.getElementById('rival-hero');
var 내영웅 = document.getElementById('my-hero');
var 상대덱 = document.getElementById('rival-deck');
var 내덱 = document.getElementById('my-deck');
var 상대덱data = [];
var 내덱data = [];
var 상대영웅data;
var 내영웅data;

function 카드표시(data,덱){
  var 카드 = document.querySelector('.card-hidden .card').cloneNode(true);
    카드.querySelector('.card-cost').textContent = data.cost;
    카드.querySelector('.card-att').textContent = data.att;
    카드.querySelector('.card-hp').textContent = data.hp;
    덱.appendChild(카드);
}



function 상대덱생성(개수) {
  for (var i = 0; i < 개수; i++) {
    상대덱data.push(카드공장());
  }
  상대덱data.forEach(function (data) {
    카드표시(data,상대덱);
  });

}

function 내덱생성(개수) {
  for (var i = 0; i < 개수; i++) {
    내덱data.push(카드공장());
  }
  내덱data.forEach(function (data) {
    카드표시(data,내덱);
})
}


function 내영웅생성() {
  내영웅.data = 카드공장(true);
    카드표시(내영웅.data,내영웅);
}

function 상대영웅생성() {
  상대영웅.data = 카드공장(true);
  카드표시(상대영웅.data,상대영웅);

}

function 초기세팅() {
  상대덱생성(5);
  내덱생성(5);
  내영웅생성();
  상대영웅생성();

}

function Card(영웅) {
  if(영웅){
  this.att = Math.ceil(Math.random() * 2);
  this.hp = Math.ceil(Math.random() * 5) +25;
  }else{
  this.att = Math.ceil(Math.random() * 5);
  this.hp = Math.ceil(Math.random() * 5);
  this.cost = Math.floor(this.att + this.hp / 2);
}
}

function 카드공장(영웅) {
  return new Card(영웅);
}
초기세팅();