var imageLocation = '0';
var computer = document.querySelector("#computer");
var btns = document.querySelectorAll(".btn");
var dictionary = { //딕셔너리 자료구조
    rock: '0',
    scissors: '-142px',
    paper: '-284px'    
};
console.log(Object.entries(dictionary));
function computerSelect (imageLocation) {
    Object.entries(dictionary).find(function(y){ //Object.entries는 2차원 배열로 바꿔 준다.
        console.log(y);
        return y[1] ==='imageLocation';
    })[0];
}

//1차원일떄는 indexOf를 자주 사용 하고 2차원일떄는 find와 findIndex를 주로 사용한다.
//객체를 배열로 바꿔준다.
//배열.find는 반복문이지만 원하는 것을 찾으면 (returnd이 true 면 )멈춥니다.
// var dictionary2 ={
//     '0' : 'rock',
//     '-142px' : 'scissors',
//     '-282px' : 'paper'
// }
//이 상태는 하드 코딩을 의미한다.

//배열을 반대로 뒤집어서 이동값이 아닌 가위바위보 값이 나오게 해준다.

//left의 변화값을 위와 같이 사전식으로 객체를 사용하여 1대 1 매칭을 한다.
// 자바스크립트 객체는 딕셔너리 자료구조 역할을 할 수 있다. 객체안에 객체를 선언가능, 1:1매칭을 표현한다. 

var interval;
function intervalMaker(){
    interval = setInterval(function(){

    if(computerSelect === dictionary.rock){
        computerSelect = dictionary.scissors;
    }else if(computerSelect === dictionary.scissors){
        computerSelect = dictionary.paper;
    }else{
        computerSelect = dictionary.rock;
    }
    computer.style.background = `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${computerSelect} 0`;
    },  500);
}

btns.forEach(function(btn){
    btn.addEventListener("click", function(){
    clearInterval(interval);
    setTimeout(function(){
        intervalMaker();
    }, 1000};
        interval = setInterval(function(){
        if(computerSelect === dictionary.rock){
            computerSelect = dictionary.scissors;
        }else if(computerSelect === dictionary.scissors){
            computerSelect = dictionary.paper;
        }else{
            computerSelect = dictionary.rock;
        }
computer.style.background = `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${computerSelect} 0`;

    },100);
}, 1000);

    //clearInterval로 setInerval을 멈춰준다. 내가 낸 값과 컴퓨터 값을 비교하기 위해서
     var userSelect = this.textContent;
      console.log(userSelect, computerSelect[imageLocation]);
      if(userSelect === 'scissors' ){
          if(computerSelect[imageLocation] === 'scissors'){
              console.log ("비겼습니다.");
          }else if(computerSelect[imageLocation] === 'rock'){
              console.log("졌습니다.");
          }else {
              console.log("이겼습니다.");
          }
      } else if (userSelect === 'rock'){
        if(computerSelect[imageLocation] === 'rock'){
            console.log ("비겼습니다.");
        }else if(computerSelect[imageLocation] === 'paper'){
            console.log("졌습니다.");
        }else {
            console.log("이겼습니다.");
        }
      }else if (userSelect === 'paper'){
        if(computerSelect[imageLocation] === 'paper'){
            console.log ("비겼습니다.");
        }else if(computerSelect[imageLocation] === 'scissors'){
            console.log("졌습니다.");
        }else {
            console.log("이겼습니다.");
      }
    }
    });
});