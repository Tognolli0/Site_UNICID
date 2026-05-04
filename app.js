(function () {
  'use strict';

  const state = { index: 0, score: 0, answered: false };

  const els = {
    quiz: document.getElementById('quiz-section'),
    result: document.getElementById('result-section'),
    questionText: document.getElementById('question-text'),
    questionAfter: document.getElementById('question-text-after'),
    imageWrap: document.getElementById('image-wrap'),
    image: document.getElementById('question-image'),
    options: document.getElementById('options-container'),
    next: document.getElementById('next-btn'),
    restart: document.getElementById('restart-btn'),
    counter: document.getElementById('question-counter'),
    status: document.getElementById('question-status'),
    score: document.getElementById('score-tracker'),
    progress: document.getElementById('progress-bar'),
    finalScore: document.getElementById('final-score')
  };

  function getQuestions() {
    return Array.isArray(window.QUESTIONS) ? window.QUESTIONS : [];
  }

  function showError(message) {
    els.questionText.textContent = 'Não foi possível carregar o simulado.';
    els.counter.textContent = 'Erro';
    els.options.innerHTML = '';
    els.imageWrap.hidden = true;
    els.questionAfter.hidden = true;
    const error = document.createElement('p');
    error.className = 'error-message';
    error.textContent = message;
    els.options.appendChild(error);
  }

  function validateQuestion(question, position) {
    if (!question || typeof question.question !== 'string') return 'Pergunta ' + position + ' sem enunciado.';
    if (!Array.isArray(question.options) || question.options.length === 0) return 'Pergunta ' + position + ' sem alternativas.';
    if (!Number.isInteger(question.correctAnswerIndex) || !question.options[question.correctAnswerIndex]) return 'Pergunta ' + position + ' com resposta correta inválida.';
    return '';
  }

  function updateHeader() {
    const questions = getQuestions();
    const current = Math.min(state.index + 1, questions.length);
    els.counter.textContent = 'Pergunta ' + current + ' de ' + questions.length;
    els.score.textContent = state.score + ' ' + (state.score === 1 ? 'acerto' : 'acertos');
    els.progress.style.width = questions.length ? ((current / questions.length) * 100) + '%' : '0%';
  }

  function renderQuestion() {
    const questions = getQuestions();
    if (!questions.length) {
      showError('O arquivo questions.js não trouxe nenhuma pergunta.');
      return;
    }

    const question = questions[state.index];
    const validationError = validateQuestion(question, state.index + 1);
    if (validationError) {
      showError(validationError);
      return;
    }

    state.answered = false;
    updateHeader();
    els.status.textContent = '';
    els.questionText.textContent = question.question;
    els.options.innerHTML = '';
    els.next.hidden = true;

    if (question.image) {
      els.image.src = question.image;
      els.imageWrap.hidden = false;
    } else {
      els.image.removeAttribute('src');
      els.imageWrap.hidden = true;
    }

    if (question.textAfterImage) {
      els.questionAfter.textContent = question.textAfterImage;
      els.questionAfter.hidden = false;
    } else {
      els.questionAfter.textContent = '';
      els.questionAfter.hidden = true;
    }

    question.options.forEach((option, optionIndex) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'option';
      button.textContent = option;
      button.addEventListener('click', () => selectOption(optionIndex));
      els.options.appendChild(button);
    });
  }

  function selectOption(selectedIndex) {
    if (state.answered) return;
    state.answered = true;

    const question = getQuestions()[state.index];
    const optionButtons = Array.from(els.options.querySelectorAll('.option'));
    optionButtons.forEach((button) => { button.disabled = true; });

    const selectedButton = optionButtons[selectedIndex];
    const correctButton = optionButtons[question.correctAnswerIndex];

    if (selectedIndex === question.correctAnswerIndex) {
      selectedButton.classList.add('correct');
      state.score += 1;
      els.status.textContent = 'Resposta correta';
    } else {
      selectedButton.classList.add('incorrect');
      correctButton.classList.add('correct');
      els.status.textContent = 'Resposta incorreta';
    }

    updateHeader();
    els.next.hidden = false;
    els.next.focus();
  }

  function nextQuestion() {
    const questions = getQuestions();
    if (state.index < questions.length - 1) {
      state.index += 1;
      renderQuestion();
      return;
    }
    showResults();
  }

  function showResults() {
    const questions = getQuestions();
    const percentage = questions.length ? Math.round((state.score / questions.length) * 100) : 0;
    els.quiz.hidden = true;
    els.result.hidden = false;
    els.progress.style.width = '100%';
    els.finalScore.textContent = 'Você acertou ' + state.score + ' de ' + questions.length + ' questões (' + percentage + '%).';
    els.restart.focus();
  }

  function restart() {
    state.index = 0;
    state.score = 0;
    state.answered = false;
    els.result.hidden = true;
    els.quiz.hidden = false;
    renderQuestion();
  }

  els.next.addEventListener('click', nextQuestion);
  els.restart.addEventListener('click', restart);
  els.image.addEventListener('error', () => {
    els.imageWrap.hidden = true;
    els.status.textContent = 'Imagem indisponível';
  });

  document.addEventListener('keydown', (event) => {
    if (!state.answered && event.key >= '1' && event.key <= '5') {
      const selected = Number(event.key) - 1;
      const buttons = els.options.querySelectorAll('.option');
      if (buttons[selected]) buttons[selected].click();
    }
    if (state.answered && event.key === 'Enter' && !els.next.hidden) {
      els.next.click();
    }
  });

  renderQuestion();
})();
