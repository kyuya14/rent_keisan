'use strict'

{
    const question = document.getElementById('question');
    const choices = document.getElementById('choices');
    const btn = document.getElementById('btn');
    const result = document.getElementById('result');
    const scoreLabel = document.querySelector('#result > p');

    const quizList_1 = [
        { word: 'stimulate', mean: '刺激する'},
        { word: 'persuade', mean: '納得させる'},
        { word: 'contribute', mean: '寄与する'},
        { word: 'oblige', mean: '余儀なくされる'},
        { word: 'fulfill', mean: '実現させる'},
        { word: 'yield', mean: '屈する'},
        { word: 'accomplish', mean: '成し遂げる'},
        { word: 'deserve', mean: '受けるに値する'},
        { word: 'accumulate', mean: '貯める'},
        { word: 'cling', mean: 'しがみつく'},
        { word: 'persist', mean: 'しつこく続ける'},
        { word: 'resist', mean: '我慢する、抵抗する'},
        { word: 'pursue', mean: '追いかける'},
        { word: 'concentrate', mean: '集中する'},
        { word: 'associate', mean: '連想する'},
        { word: 'exploit', mean: '搾取する'},
        { word: 'exert', mean: '発揮する'},
        { word: 'dare', mean: '思い切って〜する'},
        { word: 'contradict', mean: '矛盾する、反論する'},
        { word: 'sacrifice', mean: '犠牲にする'},
        { word: 'retain', mean: '維持する'},
        { word: 'prove', mean: '証明する'},
        { word: 'linger on', mean: 'まだ残っている'},
        { word: 'hesitate', mean: 'ためらう'},
        { word: 'intrude', mean: '侵害する'},
        { word: 'ruin', mean: '破産する、没落する'},
        { word: 'tolerate', mean: '容認する'},
        { word: 'adopt', mean: '採用する、導入する'},
        { word: 'deprive A of B', mean: 'AからBを剥奪する'},
        { word: 'condemn', mean: '非難する'},
        { word: 'eliminate', mean: '取り除く'},
        { word: 'argue', mean: '主張する'},
        { word: 'witness', mean: '目撃する'},
        { word: 'distinguish', mean: '区別する'},
        { word: 'worship', mean: '崇拝する'},
        { word: 'prevail', mean: '流行する、広く行われている'},
        { word: 'comprehend', mean: '理解する'},
        { word: 'imply', mean: 'ほのめかす'},
        { word: 'blush', mean: '赤面する'},
        { word: 'chuckle', mean: 'クスクス笑う'},
        { word: 'drag', mean: '引っ張る'},
        { word: 'comfort', mean: '慰める'},
        { word: 'interpret', mean: '通訳する、解釈する'},
        { word: 'incline', mean: '傾く、傾向がある'},
        { word: 'exaggerate', mean: '大げさに言う'},
        { word: 'divorce', mean: '離婚する'},
        { word: 'regret', mean: '後悔する'},
        { word: 'waste', mean: '無駄にする'},
        { word: 'depress', mean: '憂鬱にさせる'},
        { word: 'sob', mean: 'すすり泣く'},
        { word: 'go so far as to do', mean: '~しさえする'},
        { word: 'provoke', mean: '挑発する'},
        { word: 'spoil', mean: '台無しにする'},
        { word: 'fade', mean: '薄くなる、色褪せる'},    
    ];
    const quizList_2 = [
        { word: 'vital', mean: '極めて重要な'},
        { word: 'moderate', mean: '適度な'},
        { word: 'nasty', mean: '不快な、ひどい'},
        { word: 'appropriate', mean: 'ふさわしい、適切な'},
        { word: 'compulsory', mean: '強制的な、義務の'},
        { word: 'rigid', mean: '厳しい'},
        { word: 'prestigious', mean: '権威ある、名門の'},
        { word: 'optimistic', mean: '楽観的な'},
        { word: 'polite', mean: '礼儀正しい'},
        { word: 'absurd', mean: 'ばかげた'},
        { word: 'municipal', mean: '市の'},
        { word: 'specific', mean: '具体的な'},
        { word: 'dominant', mean: '支配的'},
        { word: 'conservative', mean: '保守的な'},
        { word: 'vague', mean: '曖昧な'},
        { word: 'sensitive', mean: '敏感な'},
        { word: 'innocent', mean: '無実の'},
        { word: 'immense', mean: '巨大な'},
        { word: 'noble', mean: '高潔な'},
        { word: 'alternative', mean: '代わりの'},
        { word: 'weird', mean: '奇妙な'},
        { word: 'insane', mean: '狂気の、正規ではない'},
        { word: 'reckless', mean: '無謀な'},
        { word: 'profound', mean: '深い'},
        { word: 'loud', mean: 'うるさい、けばけばしい'},
        { word: 'peculiar', mean: '奇妙な'},
        { word: 'intimate', mean: '親密な'},
        { word: 'timid', mean: '臆病な'},
        { word: 'miserble', mean: '惨めな'},
        { word: 'sophisticated', mean: '洗練された'},
        { word: 'awkward', mean: 'ぎこちない、気まずい'},
        { word: 'indecisive', mean: '優柔不断な'},
        { word: 'solemn', mean: '厳粛な、真面目な'},        
    ];

    let quizList = [];
    quizList_create(quizList_1);
    quizList_create(quizList_2);
    let quizSet = shuffle(quizList);
    console.log(quizSet.length)
        
    let currentNum = 0;
    let isAnswered;
    let score = 0;
        
    // quizList create
    function quizList_create(quizList) {
        for(let i = 0; i < quizList.length; i++ ){
            let correct_word = quizList[i].mean;   // 単語の正解
            let another_word_1 = quizList[Math.floor(Math.random() * quizList.length)].mean  // 選択肢1
            let another_word_2 = quizList[Math.floor(Math.random() * quizList.length)].mean  // 選択肢2
            if(correct_word === another_word_1) {  //選択肢1 === 選択肢2なら
                another_word_1 = quizList[Math.floor(Math.random() * quizList.length)].mean
            }
            if(another_word_1 === another_word_2) {  //選択肢1 === 選択肢2なら
                another_word_2 = quizList[Math.floor(Math.random() * quizList.length)].mean
            }
            if(correct_word === another_word_2) {  //選択肢1 === 選択肢2なら
                another_word_2 = quizList[Math.floor(Math.random() * quizList.length)].mean
            }
            let quizList_obj = {
                q: `'What is ${quizList[i].word} ? '`,
                c: [`${correct_word}`,`${another_word_1}`,`${another_word_2}`]
            }
            quizList.push(quizList_obj);
                
        }
    }
    
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
