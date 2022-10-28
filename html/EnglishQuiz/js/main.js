'use strict'

{
    const question = document.getElementById('question');
    const choices = document.getElementById('choices');
    const btn = document.getElementById('btn');

    const quizSet = [
        { q: 'What is A ? ', c: ['A0','A1','A2'] },
        { q: 'What is B ? ', c: ['B0','B1','B2'] },
        { q: 'What is C ? ', c: ['C0','C1','C2'] }
    ];

    let currentNum = 0;

    question.textContent = quizSet[currentNum].q;
    quizSet[currentNum].c.forEach(choice => {
        const li = document.createElement('li');
        li.textContent = choice;
        choices.appendChild(li);
        
    });

    function shuffle(arr) {
        for(let i = arr.length - 1; i > 0; i-- ){            // 配列の長さ
            const j = Math.floor(Math.random() * (i + 1));   // 乱数生成（整数値）
            [arr[j],arr[i]] = [arr[i],arr[j]]
        }                          
        return arr;
    }

    console.log(shuffle(quizSet))

}