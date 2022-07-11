const addAdviceBtn = document.querySelector('.addAdvice');
const resetBtn = document.querySelector('.reset');
const input = document.querySelector('input');
const showAdviceBtn = document.querySelector('.showAdvice');
const optionsBtn = document.querySelector('.showOptions');

const options = [];

const addAdviceToList = (e) => {
  e.preventDefault()

  let adviceText = input.value;
  options.push(adviceText);
  input.value = '';
  alert(`${adviceText} added to advice options!!`)
};

const resetList = () => {
  options = [];
}

const showAdvice = () => {

}

const showOptions = () => {

}

addAdviceBtn.addEventListener('click', addAdviceToList);
resetBtn.addEventListener('click', resetList);
showAdviceBtn.addEventListener('click', showAdvice);
optionsBtn.addEventListener('click', showOptions);