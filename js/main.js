'use strict';

{
  const question = document.getElementById('question');
  const btn = document.getElementById('btn');
  const choices = document.getElementById('choices');
  const result = document.getElementById('result');
  const scoreLabel = document.querySelector('#result > p');

  const quizSet = [
    // {q: 'What is A?', c: ['A0', 'A1', 'A2']},
    // {q: 'What is B?', c: ['B0', 'B1', 'B2']},
    // {q: 'What is C?', c: ['C0', 'C1', 'C2']},
    {q: '西川遥輝の高校は？', c: ['智弁和歌山', '東海大相模', '大阪桐蔭']},
    {q: '大田泰示の高校は？', c: ['東海大相模', '東海大甲府', '広陵']},
    {q: '近藤健介の高校は？', c: ['横浜高校', '帝京高校', '日大三高']},
    {q: '中田翔の高校は？', c: ['大阪桐蔭', 'PL学園', '山梨学院']},
    {q: '渡邉諒の高校は？', c: ['東海大甲府', '横浜高校', '中京大中京']},
    {q: '石井一成の高校は？', c: ['作新学院', '県立岐阜商業', '前橋育英']},
    {q: '横尾俊武の高校は？', c: ['日大三高', '帝京高校', '東海大相模']},
    {q: '清水優心の高校は？', c: ['九州国際大附属', '九州学院', '広陵']},
    {q: '中島卓也の高校は？', c: ['福岡工業高校', '愛工大名電', '報徳学園']},
    {q: '堀瑞輝の高校は？', c: ['広島新庄', '如水館', '広陵高校']},




  ];
  let currentNum = 0;
  let isAnswered;
  let score = 0;

  function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[j], arr[i]] = [arr[i], arr[j]];
    }
    return arr;
  }

  function checkAnswer(li) {
    if (isAnswered) {
      return;
    }
    isAnswered = true;

    if (li.textContent === quizSet[currentNum].c[0]) {
      li.classList.add('correct');
      score++;
    } else {
      li.classList.add('wrong');
    }

    btn.classList.remove('disabled');
  }

  function setQuiz() {
    isAnswered = false;

    question.textContent = quizSet[currentNum].q;

    while (choices.firstChild) {
      choices.removeChild(choices.firstChild);
    }

    const shuffledChoices = shuffle([...quizSet[currentNum].c]);
    shuffledChoices.forEach(choice => {
      const li = document.createElement('li');
      li.textContent = choice;
      li.addEventListener('click', () => {
        checkAnswer(li);
      });
      choices.appendChild(li);
    });

    if (currentNum === quizSet.length - 1) {
      btn.textContent = 'Show Score';
    }
  }

  setQuiz();

  btn.addEventListener('click', () => {
    if (btn.classList.contains('disabled')) {
      return;
    }
    btn.classList.add('disabled');

    if (currentNum === quizSet.length - 1) {
      // console.log(`Score: ${score} / ${quizSet.length}`);
      scoreLabel.textContent = `Score: ${score} / ${quizSet.length}`;
      result.classList.add('show');
    } else {
      currentNum++;
      setQuiz();
    }
  });
}
