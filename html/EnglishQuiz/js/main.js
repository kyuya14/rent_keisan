'use strict'

{
    const question = document.getElementById('question');
    const choices = document.getElementById('choices');
    const btn = document.getElementById('btn');
    const result = document.getElementById('result');
    const scoreLabel = document.querySelector('#result > p');

    const quizSet = shuffle([
        { q: 'What is A ? ', c: ['A0','A1','A2'] },
        { q: 'What is B ? ', c: ['B0','B1','B2'] },
        { q: 'What is C ? ', c: ['C0','C1','C2'] }
    ]);

    let currentNum = 0;
    let isAnswered;
    let score = 0;

    
    // shuffle関数
    function shuffle(arr) {
        for(let i = arr.length - 1; i > 0; i-- ){            // 配列の長さ
            const j = Math.floor(Math.random() * (i + 1));   // 乱数生成（整数値）
            [arr[j],arr[i]] = [arr[i],arr[j]]
        }                          
        return arr;
    }
    
    
    function setQuiz() {

        while(choices.firstChild) {             
            choices.removeChild(choices.firstChild);     // li要素をここで一旦全て削除
        }


        isAnswered = false;
        question.textContent = quizSet[currentNum].q;    // 問題分をセット
        const shuffledChoices = shuffle([...quizSet[currentNum].c]);   //
    
        shuffledChoices.forEach(choice => { 
            const li = document.createElement('li');
            li.textContent = choice;                       // li要素を追加
            li.addEventListener('click', () => {
                checkAnser(li);
            });
            choices.appendChild(li);            
        });

        if(currentNum === quizSet.length - 1) {
            btn.value = "show Score"
        }
    };

    function checkAnser(li) {                          // 回答後の挙動を記載
        btn.classList.remove('disable');

        if(isAnswered) {
            return;
        }
        isAnswered = true;
        if(li.textContent === quizSet[currentNum].c[0]) {
            li.classList.add('correct');
            score++;
        }else {
            li.classList.add('wrong');
        }
    };

    setQuiz();                         // 選択問題をセット

    btn.addEventListener('click', () => {
        if(btn.classList.contains('disable')) {
            return;
        }
        if(currentNum === quizSet.length - 1) {
            // console.log(`Score: ${score} / ${quizSet.length}`)
            result.classList.remove('hidden');
            scoreLabel.textContent = `Score: ${score} / ${quizSet.length}`
        } else {
            currentNum++;
            setQuiz();
            btn.classList.add('disable');
        }
    });

}