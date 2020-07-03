var 스크린 = document.querySelector('#screen');
var 시작시간;
var 끝시간;
var 기록 = [];
var 타임아웃;
스크린.addEventListener('click', function () { //비동기의 특성 클릭을하는 순간 호출스택에 들어온다 실행을 다하고나서 함수가 사라지면서 안에 있는 변수도 날아간다.
    // 따라서 변수들을 바깥으로 빼주자.

    if (스크린.classList.contains('waiting')) { //classList.contains로 현재 클래스를 파악가능
        스크린.classList.remove('waiting');
        스크린.classList.add('ready');
        스크린.textContent = '초록색이 되면 클릭하세요.';
        타임아웃 = setTimeout(function () {
            시작시간 = new Date();
            스크린.click();
        }, Math.floor(Math.random() * 1000) + 2000);
    } else if (스크린.classList.contains('ready')) { //classList.contains로 현재 클래스를 파악가능
        if (!시작시간) { //부정 클릭 undefined, 0 ,NaN ,null, false, ''
            clearTimeout(타임아웃);
            스크린.classList.remove('ready');
            스크린.classList.add('waiting');
            스크린.textContent = '너무 성급하시군요!';
        } else {
            스크린.classList.remove('ready');
            스크린.classList.add('now');
            스크린.textContent = '클릭하세요!';
        }
    } else if (스크린.classList.contains('now')) { //classList.contains로 현재 클래스를 파악가능
        끝시간 = new Date();
        console.log((끝시간 - 시작시간) / 1000);
        기록.push(끝시간 - 시작시간);
        시작시간 = null;
        끝시간 = null
        스크린.classList.remove('now');
        스크린.classList.add('waiting');
        스크린.textContent = '클릭해서 시작하세요.';
    }
});