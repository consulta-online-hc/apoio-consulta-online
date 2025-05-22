document.addEventListener('DOMContentLoaded', () => {
    const steps = document.querySelectorAll('.quiz-step');
    const nextBtn = document.getElementById('nextBtn');
    const resultDiv = document.getElementById('result');
    const scoreText = document.getElementById('scoreText');
    const retryBtn = document.getElementById('retryBtn');
    const homeBtn = document.getElementById('homeBtn');
  
    let currentStep = 0;
    let score = 0;
  
    document.querySelectorAll('.option').forEach(option => {
      option.addEventListener('click', function () {
        const step = steps[currentStep];
        const correct = step.dataset.answer;
        const selected = this.dataset.value;
  
        const options = step.querySelectorAll('.option');
        options.forEach(opt => {
          opt.classList.remove('correct', 'wrong');
          opt.style.pointerEvents = 'none';
          if (opt.dataset.value === correct) {
            opt.classList.add('correct');
          } else if (opt.dataset.value === selected) {
            opt.classList.add('wrong');
          }
        });
  
        if (selected === correct) {
          score++;
        }
      });
    });
  
    nextBtn.addEventListener('click', () => {
      steps[currentStep].classList.remove('active');
      currentStep++;
      if (currentStep < steps.length) {
        steps[currentStep].classList.add('active');
      } else {
        nextBtn.style.display = 'none';
        resultDiv.style.display = 'block';
  
        if (score < 2) {
          scoreText.innerText = `Você acertou ${score} de ${steps.length}. É melhor refazer o quiz.`;
          retryBtn.style.display = 'inline-block';
          homeBtn.style.display = 'none';
        } else {
          scoreText.innerText = `Parabéns! Você acertou ${score} de ${steps.length}. Pode usar o app!`;
          retryBtn.style.display = 'none';
          homeBtn.style.display = 'inline-block';
        }
      }
    });
  
    retryBtn.addEventListener('click', () => {
      currentStep = 0;
      score = 0;
      resultDiv.style.display = 'none';
      nextBtn.style.display = 'inline-block';
      retryBtn.style.display = 'none';
      homeBtn.style.display = 'none';
  
      steps.forEach(step => {
        step.classList.remove('active');
        step.querySelectorAll('.option').forEach(opt => {
          opt.classList.remove('correct', 'wrong');
          opt.style.pointerEvents = 'auto';
        });
      });
  
      steps[0].classList.add('active');
    });
  });
  