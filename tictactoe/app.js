var body = document.body;

var table  = document.createElement('table');
body.appendChild(table);
var trArray = [];
var tdArray = [];
var turn = 'X';


var 비동기콜백 = function(e){
    console.log(e.target); //칸들
    console.log(e.target.parentNode); //줄들
    console.log(e.target.parentNode.parentNode); // 테이블

    var selectTr = trArray.indexOf(e.target.parentNode);
    console.log("몇줄",selectTr);

    var selectTd = tdArray[selectTr].indexOf(e.target);
    console.log("몇칸",selectTd);

    if(tdArray[selectTr][selectTd].textContent !== ""){ //칸이 이미 채워져있는가?
        console.log("빈칸이 아닙니다.");
        
        }
     else{ //빈칸이면 
         console.log("빈칸 입니다.");
         tdArray[selectTr][selectTd].textContent = turn;
         
         //세칸 다채워졌나?
        var allTrue = false; 
        //가로줄 검사
        if(tdArray[selectTr][0].textContent === turn && tdArray[selectTr][1].textContent === turn && tdArray[selectTr][2].textContent){
            allTrue = true;
        }
        //세로줄 검사
        if(tdArray[0][selectTd].textContent === turn && tdArray[1][selectTd].textContent === turn && tdArray[2][selectTd].textContent){
            allTrue = true;

        }
        //대각선 검사
        if(selectTr - selectTd === 0 || Math.abs(selectTr-selectTd) ===  2 ){ //대각선 검사가 필요한 경우 
            if(tdArray[0][0].textContent ===turn && tdArray[1][1].textContent===turn && tdArray[2][2].textContent===turn){
                allTrue = true;
            }
        }
        //다찼으면 
        if(allTrue){
            console.log(turn + '님이 승리!');
        //초기화 
        turn = 'X';
        
        } else{ //다 안찼으면
            if (turn === 'X'){
                turn = 'O';
            }else{
                turn = 'X';
                }   
                
        }
        }

    
};

for (var i = 0; i < 3; i++){
    var tr = document.createElement("tr");
    trArray.push(tr); //줄을 나타냄
    tdArray.push([]); // 이차원 배열
    table.appendChild(tr);
    for(var j = 0; j < 3; j++){
    var td = document.createElement("td");
    td.addEventListener("click", 비동기콜백);
    tdArray[i].push(td); //각 칸을 나타냄
    tr.appendChild(td);
    }

}
console.log("줄들",trArray,"칸들",tdArray);