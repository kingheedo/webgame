let word = '희도';

while (true) {
    let answer = prompt(word);
    if (word[word.length - 1] === answer[0]) {
        alert("딩동댕");
        answer = word;
    } else {
        alert("끝말잇기입니다.")
    }
}