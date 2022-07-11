const addAdviceBtn = document.querySelector('.addAdvice');
const resetBtn = document.querySelector('.reset');
const input = document.querySelector('input');

const options = [];

const addAdviceToList = (e) => {
  e.preventDefault()

  let adviceText = input.value;
  options.push(adviceText);
  input.value = '';
  alert(`${adviceText} added to advice options!!`)
}


addAdviceBtn.addEventListener('click', addAdviceToList)