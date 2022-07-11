const addAdviceBtn = document.querySelector('.addAdvice');
const resetBtn = document.querySelector('.reset');
const input = document.querySelector('input');
const showAdviceBtn = document.querySelector('.showAdvice');
const optionsBtn = document.querySelector('.showOptions');
const answer = document.querySelector('.answer');

const options = [];

const addAdviceToList = (e) => {
  e.preventDefault()
  let adviceText = input.value;

  if (adviceText.length) {
    options.push(adviceText);
    alert(`${adviceText} added to advice options!!`)
    input.value = '';
  }
};

const resetList = (e) => {
  e.preventDefault();
  options.length = 0;
  answer.textContent = ''
}

const showAdvice = () => {
  let answerIndex = Math.floor(Math.random() * options.length);
  answer.textContent = options[answerIndex]
}

const showOptions = () => {

  options.length ? alert(options.join(' --- ')) : alert('No options available, add options first')
}

addAdviceBtn.addEventListener('click', addAdviceToList);
resetBtn.addEventListener('click', resetList);
showAdviceBtn.addEventListener('click', showAdvice);
optionsBtn.addEventListener('click', showOptions);