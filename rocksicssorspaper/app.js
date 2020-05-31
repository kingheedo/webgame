var computerSelect = 0;
var dictionary = { //딕셔너리 자료구조
    rock: '0',
    scissors: '-142px',
    paper: '-284px'    
};
//left의 변화값을 위와 같이 사전식으로 객체를 사용하여 1대 1 매칭을 한다.
// 자바스크립트 객체는 딕셔너리 자료구조 역할을 할 수 있다. 객체안에 객체를 선언가능, 1:1매칭을 표현한다. 
var computer = document.querySelector("#computer");
var btns = document.querySelectorAll(".btn");
setInterval( function(){
if(computerSelect === dictionary.rock){
    computerSelect = dictionary.scissors;
}else if(computerSelect === dictionary.scissors){
    computerSelect = dictionary.paper;
}else{
    computerSelect = dictionary.rock;
}
computer.style.background = `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${computerSelect} 0`;
},  100);

btns.forEach(function(btn){
    btn.addEventListener("click", function(){
     var userSelect = this.textContent;
      console.log(userSelect, computerSelect);
    });
});