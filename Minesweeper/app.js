    var tbody = document.querySelector('#table tbody');
    var execButton = document.querySelector('#exec');

execButton.addEventListener("click", function(){
    tbody.innerHTML = '';
    //내부 태그 제거 테이블이 여러개 생기는것을 방지
    var hor = parseInt(document.querySelector("#hor").value);
    var ver = parseInt(document.querySelector("#ver").value);
    var mine = parseInt(document.querySelector("#mine").value);
    console.log(hor,ver,mine);
    //---------------------------------------------------
    //1부터 100까지 배열만들기
    var 후보군 = Array(hor * ver)
        .fill()
        .map(function(요소,인덱스){
            return 인덱스;
        });
    // 빈 배열
    var 셔플 = [];
    // 20개의 지뢰 설정 

    while (후보군.length > 80){
        var 이동값 = 후보군.splice(Math.floor(Math.random() * 후보군.length ),1)[0];
        셔플.push(이동값);
    }

    //---------------------------------------------------------
    console.log(셔플);

    // 지뢰 테이블 만들기
    var dataset = [];
    for (var i = 0; i < ver; i +=1 ){
        var arr = [];       
        var tr = document.createElement('tr');
        dataset.push(arr);
        for (var j = 0; j <hor; j +=1){
            arr.push(1);
            var td = document.createElement('td');
    // 오른쪽 클릭했을때 표시하기
            td.addEventListener("contextmenu",function(e){
                e.preventDefault();
                var 부모tr = e.currentTarget.parentNode;
                var 부모tbody = e.currentTarget.parentNode.parentNode;
                var 칸 = Array.prototype.indexOf.call(부모tr.children, e.currentTarget);
                //td를 사용하면 클로저 문제 발생 -> e.currentTarget사용
                var 줄 = Array.prototype.indexOf.call(부모tbody.children, 부모tr);
                if (e.currentTarget.textContent === '' || e.currentTarget.textContent === 'X'){
                    e.currentTarget.textContent = '!';
                    //!와 ?는 화면에 표시하는것이므로 dataset을 건들필요가 없다.
                }  else if(e.currentTarget.textContent === '!'){
                    e.currentTarget.textContent = '?';
                }   else if(e.currentTarget.textContent === '?'){
                    if(dataset[줄][칸] === 1){
                        e.currentTarget.textContent = '';
                        } else if (dataset[줄][칸] === 'X'){
                            e.currentTarget.textContent = 'X';
                        }
                    }
                // e.target e.currentTarget과의 차이는? -> eventlistener를 단 대상과 실제로 eventlistener가 발생한 대상이 다를 수 있게 된다.
                // 쉽게말해 eventlistener가 발생한 대상이 e.currentTarget
                // 이벤트가 실제로 발생한 대상이 target
                //오른쪽을 눌렀을떄 몇번째 줄 몇번째 칸을 눌렀는지 파악하는 코드(그냥 index는 배열이 아닌 애들한테 사용불가
                //  indexOf를 사용  ) 
            
            
            });

            td.addEventListener("click", function(e){
                // 클릭했을때 주변 지뢰 개수
                var 부모tr = e.currentTarget.parentNode;
                var 부모tbody = e.currentTarget.parentNode.parentNode;
                var 칸 = Array.prototype.indexOf.call(부모tr.children, e.currentTarget);
                //td를 사용하면 클로저 문제 발생 -> e.currentTarget사용
                var 줄 = Array.prototype.indexOf.call(부모tbody.children, 부모tr);
                if(dataset[줄][칸] === 'X'){
                    e.currentTarget.textContent = "펑!"
                }else {
                    console.log([
                    dataset[줄-1][칸-1], dataset[줄-1][칸], dataset[줄-1][칸+1],
                    dataset[줄][칸-1],                       dataset[줄][칸+1],
                    dataset[줄+1][칸-1], dataset[줄+1][칸], dataset[줄+1][칸+1]
                    ].filter(function(v){
                       return v === 'X';
                    }));
               
                e.currentTarget.textContent = ''; //숫자
            }
            });
            tr.appendChild(td);
        }   
        tbody.appendChild(tr);
    }

    //지뢰 심기

    for(var k = 0; k < 셔플.length; k++){ //예 60
        var 세로 = Math.floor(셔플 [k] / 10) ; //예7 -> 6 
        var 가로 = 셔플[k] % 10; //예0 ->0
        console.log(세로, 가로);
        tbody.children[세로].children[가로].textContent ='X';
        dataset[세로][가로] = 'X';
    }
    console.log(dataset);
});

//마우스 오른쪽 이벤트 = contextmenu
//비동기는 동기보다 늦게 실행. 위에 비동기 함수안에 td를 만든다음 eventlistener를 바로 만든것이 바로 그이유 
tbody.querySelectorAll('td').forEach(function(td){
    
});