'use strict'

{
    const question = document.getElementById('question');
    const choices = document.getElementById('choices');
    const btn = document.getElementById('btn');
    const choices_btn = document.getElementById('choices_btn');
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
        { word: 'stink', mean: '臭い'},
        { word: 'anticipate', mean: '予期する'},
        { word: 'expose', mean: 'さらす'},
        { word: 'emphasize', mean: '強調する'},
        { word: 'cultivate', mean: '栽培する'},
        { word: 'entitle', mean: '〜する権利がある'},
        { word: 'compensate', mean: '補償する'},
        { word: 'admire', mean: '感心する'},
        { word: 'put into practice', mean: '実行に移す'},
        { word: 'stir', mean: 'かき回す'},
        { word: 'stroll', mean: '散歩する'},
        { word: 'faint', mean: '気を失う'},
        { word: 'resent', mean: '腹を立てる'},
        { word: 'abandan', mean: '見捨てる'},
        { word: 'abuse', mean: '乱用する'},
        { word: 'bully', mean: 'いじめる'},
        { word: 'frown', mean: '顔をしかめる'}, 
        { word: 'desire', mean: '強く望む'},
        { word: 'call for', mean: '必要とする'},
        { word: 'annoy', mean: '不快にさせる'},
        { word: 'leap', mean: '飛び越える'},
        { word: 'stumble', mean: 'つまづく'},
        { word: 'convince', mean: '納得させる'},
        { word: 'absorb', mean: '吸収する、夢中にさせる'},
        { word: 'quarrel', mean: '口喧嘩する'},
        { word: 'confess', mean: '（罪を）自白する'},
        { word: 'conceal', mean: '隠す'},
        { word: 'dwell on', mean: 'くよくよする'},
        { word: 'punctual', mean: '時間を厳守する'},
        { word: 'pull over', mean: '（車を）路肩に止める'},
        { word: 'obstruct', mean: '妨害する'},
        { word: 'come close', mean: '接近する、危うく〜しそうになる'},
        { word: 'greet', mean: '挨拶する'},
        { word: 'preserve', mean: '保護する'},
        { word: 'on the verge of', mean: '〜寸前である'},
        { word: 'abundant', mean: '豊富である'},
        { word: 'accompany', mean: '同行する、同時に起きる'},
        { word: 'imitate', mean: '真似をする'},
        { word: 'attribute', mean: '〜のおかげ（起因）と考える'},
        { word: 'come into being', mean: '誕生する'},
        { word: 'pretend', mean: 'ふりをする'},
        { word: 'lay .. off', mean: '解雇する'},
        { word: 'concern', mean: '心配している'},
        { word: 'confront', mean: '直面している'},
        { word: 'strive', mean: '努力する'},
        { word: 'stabilize', mean: '安定させる'},
        { word: 'litter', mean: 'ゴミを捨てる'},
        { word: 'astonish', mean: '驚かす'},
        { word: 'hang around', mean: '群がる'},
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
        { word: 'soaked', mean: 'びしょ濡れの'},
        { word: 'competent', mean: '有能な、能力がある'},
        { word: 'prominent', mean: '著名な、有名な'},
        { word: 'intense', mean: '激しい'},
        { word: 'brief', mean: '短時間の'},
        { word: 'ethical', mean: '倫理上の'},
        { word: 'sensible', mean: '賢明な'},
        { word: 'ingenious', mean: '独創的な'},
        { word: 'flammable', mean: '可燃性の'},
        { word: 'desperate', mean: '必死の、絶望的な'},
        { word: 'hostile', mean: '敵対的な'},
        { word: 'diligent', mean: '勤勉な'},
        { word: 'obscure', mean: '曖昧な'},
        { word: 'valid', mean: '妥当な'},
        { word: 'precise', mean: '厳密な'},
        { word: 'visible', mean: '目に見える'},
        { word: 'modest', mean: '謙虚な'},
        { word: 'considerate', mean: '思いやりのある'},
        { word: 'conscious', mean: '意識（自覚）がある'},
        { word: 'passive', mean: '消極的な'},
        { word: 'irrational', mean: '根拠がない'},
        { word: 'silly', mean: 'ばかな、くだらない'},
        { word: 'rusty', mean: 'さびた'},
        { word: 'spontaneous', mean: '自然に生じる'},
        { word: 'endeangered', mean: '絶滅の危機に瀕した'},
        { word: 'principal', mean: '重要な、主要な'},
        { word: 'fragile', mean: '壊れやすい、弱い'},
        { word: 'prolonged', mean: '長引く'},
        { word: 'severe', mean: 'ひどい'},
        { word: 'artificial', mean: '人工の'},
        { word: 'adequate', mean: '十分な'},
        { word: 'desolate', mean: '荒れ果てた'},
        { word: 'thriving', mean: '繁栄している'},
        { word: 'conventional', mean: '従来の'},
        { word: 'virtual', mean: '事実上の'},
        { word: 'ridiculous', mean: 'ばかげた'},
        { word: 'enthusiastic', mean: '熱心な'},
        { word: 'perssimistic', mean: '悲観的な'},
        { word: 'urgent', mean: '緊急の'},
        { word: 'dim', mean: '薄暗い'},
        { word: 'dizzy', mean: 'めまいがする'},
        { word: 'pregnant', mean: '妊娠している'},
        { word: 'harmful', mean: '有害な'},     
    ];
    const quizList_3 = [
        { word: 'nutrition', mean: '栄養摂取'},
        { word: 'infant', mean: '幼児'},
        { word: 'surgeon', mean: '外科医'},
        { word: 'hypothesis', mean: '仮説'},
        { word: 'military', mean: '軍隊'},
        { word: 'discipline', mean: '規律'},
        { word: 'adversity', mean: '逆境'},
        { word: 'temptation', mean: '誘惑'},
        { word: 'insult', mean: '侮辱'},
        { word: 'loyalty', mean: '忠誠心'},
        { word: 'council', mean: '議会'},
        { word: 'politician', mean: '政治家'},
        { word: 'hypocrisy', mean: '偽善'},
        { word: 'dignity', mean: '尊厳'},
        { word: 'criticism', mean: '批判'},
        { word: 'addict', mean: '中毒者'},
        { word: 'reputation', mean: '評判'},
        { word: 'ally', mean: '同盟国'},
        { word: 'invansion', mean: '侵略'},
        { word: 'violation', mean: '違反'},
        { word: 'resolution', mean: '決議'},
        { word: 'honor', mean: '名誉'},
        { word: 'tariff', mean: '関税'},
        { word: 'sanction', mean: '制裁'},
        { word: 'source', mean: '源'},
        { word: 'revenue', mean: '歳入'},
        { word: 'wilderness', mean: '原野'},
        { word: 'vice', mean: '悪いこと'},
        { word: 'virtue', mean: '正しいこと'},
        { word: 'cargo', mean: '貨物'},
        { word: 'vessel', mean: '船舶'},
        { word: 'tragedy', mean: '惨事'},
        { word: 'civilization', mean: '文明'},
        { word: 'linguist', mean: '言語学者'},
        { word: 'dialect', mean: '方言'},
        { word: 'ancestor', mean: '先祖'},
        { word: 'province', mean: '州'},
        { word: 'acquaintance', mean: '知人'},
        { word: 'adolescence', mean: '思春期'},
        { word: 'torture', mean: '拷問'},
        { word: 'arrogance', mean: '傲慢さ'},
        { word: 'atmosphere', mean: '雰囲気'},
        { word: 'grief', mean: '悲しみ'}, 
        { word: 'attitude', mean: '態度'},
        { word: 'constitution', mean: '憲法'},
        { word: 'wages', mean: '賃金'},
        { word: 'radiation', mean: '放射線'},
        { word: 'inhabitant', mean: '住民'},
        { word: 'attorney', mean: '弁護士'},
        { word: 'mammal', mean: '哺乳類'},
        { word: 'illness', mean: '病気'},
        { word: 'representatibe', mean: '代表（者）'},
        { word: 'curfew', mean: '門限'},
        { word: 'punishment', mean: '罰'},
        { word: 'consensus', mean: 'まとまった意見、合意'},
        { word: 'perseverance', mean: '努力、忍耐強さ'},
        { word: 'courage', mean: '勇気'},
        { word: 'wisdom', mean: '知恵'},
        { word: 'endeavor', mean: '努力'},
        { word: 'catastrophe', mean: '大惨事'},
        { word: 'aviation', mean: '航空'},
        { word: 'fatigue', mean: '疲労'},
        { word: 'prospect', mean: '可能性、見込み'},
        { word: 'disarmament', mean: '軍事縮小'},
        { word: 'aristocrat', mean: '貴族'},
        { word: 'privilege', mean: '特権'},
        { word: 'compliment', mean: '褒め言葉'},
        { word: 'premise', mean: '前提'},
        { word: 'contempt', mean: '軽蔑'},
        { word: 'superstition', mean: '迷信'},
        { word: 'intersection', mean: '交差点'},
        { word: 'ambulance', mean: '救急車'},
        { word: 'pedestrian', mean: '歩行者'},
        { word: 'applause', mean: '拍手'},
        { word: 'wildlife', mean: '野生動物'},
        { word: 'conservation', mean: '保護、保存'},
        { word: 'extinction', mean: '絶滅'},
        { word: 'drought', mean: '干ばつ'},
        { word: 'crop', mean: '収穫'},
        { word: 'satellite', mean: '人工衛星'},
        { word: 'orbit', mean: '軌道'},
        { word: 'petroleum', mean: '石油'},
        { word: 'blessing', mean: '天の恵み、恩恵'},
        { word: 'curse', mean: '災い'},
        { word: 'continent', mean: '大陸'},
        { word: 'fossil', mean: '化石'},
        { word: 'fuel', mean: '燃料'},
        { word: 'plague', mean: '疫病'},
        { word: 'equipment', mean: '機器、用具'},
        { word: 'monopoly', mean: '独占'},
        { word: 'restriction', mean: '制限'},
        { word: 'burden', mean: '負担'},
        { word: 'recession', mean: '景気後退'},
        { word: 'hardship', mean: '苦難、困窮'},
        { word: 'currency', mean: '通貨'},
        { word: 'conclusion', mean: '結論'},
        { word: 'deficit', mean: '赤字'},
        { word: 'flashlight', mean: '懐中電灯'},
        { word: 'appetite', mean: '食欲'},
        { word: 'glimpse', mean: 'ちらっと見ること'},
        { word: 'ingredient', mean: '成分、原料'},
    ]

    let quizList = [];
    quizList_create(quizList_1);
    quizList_create(quizList_2);
    quizList_create(quizList_3);
    let quizSet = shuffle(quizList);
        
    let currentNum = 0;
    let isAnswered;
    let score = 0;
        
    // quizList create
    function quizList_create(quizListSet) {
        for(let i = 0; i < quizListSet.length; i++ ){
            let correct_word = quizListSet[i].mean;   // 単語の正解
            let another_word_1 = quizListSet[Math.floor(Math.random() * quizListSet.length)].mean  // 選択肢1を選択肢からランダムに選択
            let another_word_2 = quizListSet[Math.floor(Math.random() * quizListSet.length)].mean  // 選択肢2を選択肢からランダムに選択
            if(correct_word === another_word_1) {  //正解 === 選択肢1なら
                another_word_1 = quizListSet[Math.floor(Math.random() * quizListSet.length)].mean
            }
            if(another_word_1 === another_word_2) {  //選択肢1 === 選択肢2なら
                another_word_2 = quizListSet[Math.floor(Math.random() * quizListSet.length)].mean
            }
            if(correct_word === another_word_2) {  //正解 === 選択肢2なら
                another_word_2 = quizListSet[Math.floor(Math.random() * quizListSet.length)].mean
            }
            let quizList_obj = {
                q: `'What is ${quizListSet[i].word} ? '`,
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

        // 問題文をセット
        isAnswered = false;
        question.textContent = quizSet[currentNum].q;    // 問題分をセット
        const shuffledChoices = shuffle([...quizSet[currentNum].c]);   //
    
        // 選択肢をセット
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
        
        if(isAnswered) {
            return;
        }
        isAnswered = true;
        if(li.textContent === quizSet[currentNum].c[0]) {
            li.classList.add('correct');
            score++;
            btn.classList.remove('disable');
        }else {
            li.classList.add('wrong');
            sleep(5, function () {
                btn.classList.remove('disable');             
            });
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
        sleep(3, function () {
            choices_btn.classList.remove('hidden');  // 選択肢表示ボタンを表示する
        });

        choices.classList.add('hidden');  // 選択肢を隠す
    });

    choices_btn.addEventListener('click', () => {
        choices_btn.classList.add('hidden');  // 選択肢表示ボタンを隠す
        choices.classList.remove('hidden');  // 選択肢を表示する
    });

    // sleep関数を定義
    function sleep(waitSec, callbackFunc) {
        // 経過時間（秒）
        var spanedSec = 0;     
        // 1秒間隔で無名関数を実行
        var id = setInterval(function () {
     
            spanedSec++;
     
            // 経過時間 >= 待機時間の場合、待機終了。
            if (spanedSec >= waitSec) {
     
                // タイマー停止
                clearInterval(id);
     
                // 完了時、コールバック関数を実行
                if (callbackFunc) callbackFunc();
            }
        }, 1000);
    }
}
