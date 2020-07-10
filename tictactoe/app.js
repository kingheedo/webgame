var body = document.body;

var table = document.createElement("table");
var result = document.createElement("div");

var trArray = [];
var tdArray = [];
var turn = "X";

function resultConfirm(selectTr, selectTd) {
  //세칸 다채워졌나?
  var allTrue = false;
  //가로줄 검사
  if (
    tdArray[selectTr][0].textContent === turn &&
    tdArray[selectTr][1].textContent === turn &&
    tdArray[selectTr][2].textContent
  ) {
    allTrue = true;
  }
  //세로줄 검사
  if (
    tdArray[0][selectTd].textContent === turn &&
    tdArray[1][selectTd].textContent === turn &&
    tdArray[2][selectTd].textContent
  ) {
    allTrue = true;
  }
  //대각선 검사

  //대각선 검사가 필요한 경우
  if (
    tdArray[0][0].textContent === turn &&
    tdArray[1][1].textContent === turn &&
    tdArray[2][2].textContent === turn
  ) {
    allTrue = true;
  }

  if (
    tdArray[0][2].textContent === turn &&
    tdArray[1][1].textContent === turn &&
    tdArray[2][0].textContent === turn
  ) {
    allTrue = true;
  }
  return allTrue;
}

function reset(draw) {
  setTimeout(function () {
    //초기화
    result.textContent = "";
    tdArray.forEach(function (tr) {
      tr.forEach(function (td) {
        td.textContent = "";
      });
    });
    turn = "X";
  }, 1000);
  if (draw) {
    result.textContent = "무승부";
  } else {
    result.textContent = turn + "님이 승리!";
  }
}

var 비동기콜백 = function (e) {
  //칸을 클릭했을때
  if (turn === "O") {
    // 컴퓨터의 턴 일떄 내가 클릭하지 않도록
    return;
  }
  // console.log(e.target); //칸들
  // console.log(e.target.parentNode); //줄들
  // console.log(e.target.parentNode.parentNode); // 테이블

  var selectTr = trArray.indexOf(e.target.parentNode);
  console.log("몇줄", selectTr);

  var selectTd = tdArray[selectTr].indexOf(e.target);
  console.log("몇칸", selectTd);

  if (tdArray[selectTr][selectTd].textContent !== "") {
    //칸이 이미 채워져있는가?
    console.log("빈칸이 아닙니다.");
  } else {
    //빈칸이면
    console.log("빈칸 입니다.");
    tdArray[selectTr][selectTd].textContent = turn;

    //모든 칸이 다찼는지 검사
    var allTrue = resultConfirm(selectTr, selectTd);

    var computerArray = [];
    tdArray.forEach(function (tr) {
      tr.forEach(function (td) {
        computerArray.push(td);
      });
    });
    computerArray = computerArray.filter(function (td) {
      return !td.textContent;
    });

    //다찼으면
    if (allTrue) {
      reset();
    } else if (computerArray.length === 0) {
      reset(true);
    } //칸을 더이상 선택 할 수  가 없음
    else {
      //다 안찼으면
      if (turn === "X") {
        turn = "O";
      }

      //컴퓨터차례
      setTimeout(function () {
        console.log("컴퓨터의 턴입니다.");
        //빈 칸 중 하나를 고른다.
        var selectComputer =
          computerArray[Math.floor(Math.random() * computerArray.length)]; // '', 0 , NAN, undefined, null, false
        selectComputer.textContent = turn;

        //컴퓨터가 승리했는지 체크
        var selectTr = trArray.indexOf(selectComputer.parentNode);
        var selectTd = tdArray[selectTr].indexOf(selectComputer);
        var allTrue = resultConfirm(selectTr, selectTd);

        //다 찼으면
        if (allTrue) {
          //컴퓨터가 이겼을 경우
          reset();
        }

        //턴을 나한테 넘긴다.
        turn = "X";
      }, 1000);
    }
  }
};

for (var i = 0; i < 3; i++) {
  var tr = document.createElement("tr");
  trArray.push(tr); //줄을 나타냄
  tdArray.push([]); // 이차원 배열
  table.appendChild(tr);
  for (var j = 0; j < 3; j++) {
    var td = document.createElement("td");
    td.addEventListener("click", 비동기콜백);
    tdArray[i].push(td); //각 칸을 나타냄
    tr.appendChild(td);
  }
}
console.log("줄들", trArray, "칸들", tdArray);
body.appendChild(table);
body.appendChild(result);
