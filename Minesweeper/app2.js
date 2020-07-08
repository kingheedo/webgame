var tbody = document.querySelector('#table tbody');


document.querySelector('#exec').addEventListener('click', function () {
    tbody.innerHTML = '';
    var hor = parseInt(document.querySelector('#hor').value);
    var ver = parseInt(document.querySelector('#ver').value);
    var mine = parseInt(document.querySelector('#mine').value);
    // console.log(hor, ver, mine);

    //지뢰 위치 뽑기
    var 후보군 = Array(hor * ver).fill().map(function (요소, 인덱스) {
        return 인덱스;
    })
    var 셔플 = [];

    while (후보군.length - 80 > 0) {
        var 이동값 = 후보군.splice(Math.floor(Math.random() * 후보군.length), 1)[0];
        셔플.push(이동값);
    }
    // console.log(셔플);


    //지뢰 테이블 만들기
    var dataset = [];
    for (var i = 0; i < ver; i++) {
        var arr = [];
        var tr = document.createElement('tr');
        dataset.push(arr);
        for (var j = 0; j < hor; j++) {
            arr.push(1);
            var td = document.createElement('td');
            td.addEventListener('contextmenu', function (e) {
                e.preventDefault();
                var 부모tbody = e.currentTarget.parentNode.parentNode;
                var 부모tr = e.currentTarget.parentNode;
                var 줄 = Array.prototype.indexOf.call(부모tbody.children, 부모tr); //유사 배열이기때문에 indexof 사용불가 그래서 prototype을 사용해서 indexof 사용
                var 칸 = Array.prototype.indexOf.call(부모tr.children, e.currentTarget);
                // console.log(부모tbody, 부모tr, 줄, 칸);
                if (e.currentTarget.textContent === '' || e.currentTarget.textContent === 'X') {
                    e.currentTarget.textContent = '!';
                } else if (e.currentTarget.textContent === '!') {
                    e.currentTarget.textContent = '?';
                } else if (e.currentTarget.textContent === '?') {
                    if (dataset[줄][칸] === 1) {
                        e.currentTarget.textContent = '';
                    } else if (dataset[줄][칸] === 'X') {
                        e.currentTarget.textContent = 'X';
                    }
                }
            });
            td.addEventListener('click', function(e){
                // 클릭했을때 주변 지뢰 개수
                var 부모tbody = e.currentTarget.parentNode.parentNode;
                var 부모tr = e.currentTarget.parentNode;
                var 줄 = Array.prototype.indexOf.call(부모tbody.children, 부모tr); //유사 배열이기때문에 indexof 사용불가 그래서 prototype을 사용해서 indexof 사용
                var 칸 = Array.prototype.indexOf.call(부모tr.children, e.currentTarget);
                if(dataset[줄][칸] === 'X'){
                    e.currentTarget.textContent = '펑';
                }else {
                    var 주변 = [
                        dataset[줄][칸-1],                      dataset[줄][칸+1],
                    ];
                    if(dataset[줄-1]){
                        주변 = 주변.concat([dataset[줄-1][칸-1], dataset[줄-1][칸], dataset[줄-1][칸+1]])
                    }
                    if(dataset[줄+1]){
                        주변 = 주변.concat([dataset[줄+1][칸-1], dataset[줄+1][칸], dataset[줄+1][칸+1]])
                    }
                    e.currentTarget.textContent = 주변.filter(function(v){
                        return v === 'X';
                    }).length;
               }
            })
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }

    //지뢰 심기
    for (var k = 0; k < 셔플.length; k++) {
        var 세로 = Math.floor(셔플[k] / 10);
        var 가로 = 셔플[k] % 10;
        // console.log(세로, 가로);
        dataset[세로][가로] = 'X';
        tbody.children[세로].children[가로].textContent = 'X';
    }
    console.log(dataset);

});

