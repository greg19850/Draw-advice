const addAdviceBtn = document.querySelector('.addAdvice');
const resetBtn = document.querySelector('.reset');
const input = document.querySelector('input');
const showAdviceBtn = document.querySelector('.showAdvice');
const optionsBtn = document.querySelector('.showOptions');
const answer = document.querySelector('.answer');

let options = [];

const addAdviceToList = (e) => {
  e.preventDefault()
  let adviceText = input.value;

  if (adviceText.length) {
    options.push(adviceText);
    input.value = '';
    alert(`${adviceText} added to advice options!!`)
  }
};

const resetList = (e) => {
  e.preventDefault();
  options = [];
  answer.textContent = ''
}

const showAdvice = () => {
  let answerIndex = Math.floor(Math.random() * options.length);
  answer.textContent = options[answerIndex]
}

const showOptions = () => {

}

addAdviceBtn.addEventListener('click', addAdviceToList);
resetBtn.addEventListener('click', resetList);
showAdviceBtn.addEventListener('click', showAdvice);
optionsBtn.addEventListener('click', showOptions);