
var body = document.body;
var numCan;
var numArray;
var diffNum = 0;

function genNumber(){
    numCan = [1,2,3,4,5,6,7,8,9];

    // 위 numCan에서 숫자를 4개를 랜덤하게 뽑을것이다 
    numArray = [];

    for(var i = 0; i < 4; i++){
        var select = numCan.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
        numArray.push(select);
    }
    // (9-i)는 numCan에서 숫자를 splice를 통해서 뽑아 올때마다 배열에서 숫자가 빠지게 되고 다시 뽑으면 undefined가 뽑히게 되기 때문에 사용한다. 
    // [0]을 붙여주는 이유는 배열로 나오는데 우리는 배열이 아니라 배열안에 있는 숫자를 원하기 때문에 [0]을 붙여준다.
    // splice :  numCan.splice(3,2) 하면은 4,5를 뽑아올 수 있다. 그러므로 이를 통해서 랜덤하게 뽑을 수 있다. 
    // shift : 처음 것 뽑기
    // pop: 마지막것 뽑기
    // unshift : 처음에 추가 
    // push: 마지막에 추가 
}

genNumber();
console.log(numArray);

//화면출력
var result = document.createElement("h1");
body.appendChild(result);

var form = document.createElement("form");
document.body.appendChild(form);

var input = document.createElement("input");
input.type ="number";
form.appendChild(input);

var button = document.createElement("button");
button.textContent = "입력";
form.appendChild(button);


form.addEventListener("submit", function 콜백함수(e){ //엔터를 쳤을 때 함수가 발생 (콜백함수가 반복문을 대신한다.)
    e.preventDefault();
    var answer =  input.value; //answer  =  input.value; 값은 현재 string
    // console.log(answer, numArray, answer === numArray );
    // 내가 입력한 답과 숫자배열의 형태가 다르므로
    // 문자 split(구분자) ->배열 
    // 배열 join(구분자) -> 문자을 이용하여 
    if (answer === numArray.join('')){ //답이 맞으면  
        result.textContent = "홈런";
        input.value ='';
        input.focus();
        genNumber();
        diffNum = 0;

    } else{ //답이 틀리면
        var answerArray = answer.split(''); //46번에서 answer 값이 string이었으므 이 값을 다시 배열로 변경하기 위해선 split을 이용한다.
        var strike = 0;
        var ball = 0;
        diffNum ++;
        if (diffNum > 4){ //4번 넘게 틀린경우
            result.textContent = '4번 돌려서 실패! 답은' +  numArray.join(',')+'였습니다!';  //numCan에서 뽑아낸 numArray는 배열이었으므로이를 string으로 변환
            input.value ='';
            input.focus();
            genNumber();
            diffNum = 0;
        } else{ // 4번 미만으로 틀린경우 '
            for(var i = 0; i < 4; i++){
                if(Number(answerArray[i]) === numArray[i]){ //같은자리인지 확인
                    strike ++;
                }else if(numArray.indexOf(Number(answerArray[i])) > -1){ //같은 자는 아니지만 숫자가 겹치는지 확인
                    ball ++;
                    // indexOf(값)
                    // 값의 위치를 알 수 있다. 없으면 -1
                }
            }
            result.textContent = strike + 'strike'+ ball + 'ball 입니다.'
            input.value ='';
            input.focus();

        }
        
    }
});
