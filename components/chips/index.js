const formEl = document.getElementById('form')
const wrapperEl = document.getElementById('wrapper');

wrapperEl.hasChildNodes() ? wrapperEl.className += " visible"  : null;

const createChip = text => {
  const el =document.createElement('span');
  el.classList.add('chip');
  el.innerHTML = `<div class="chip-text">${text}</div>
  <div class="remove" onclick="removeChip(this)">X</div>`
  return el;
}

const removeChip = e => {
    wrapperEl.removeChild(e.parentNode);  
    !wrapperEl.hasChildNodes() ? wrapperEl.classList.remove("visible")  : null;
};

formEl.addEventListener('submit', (e) => {
  e.preventDefault();
  const text = e.target[0].value;
  if(text.length > 0){
  !wrapperEl.className.includes("visible") ? wrapperEl.classList.add("visible") : null;
  wrapperEl.appendChild(createChip(text));
  }
  formEl.reset();
}); 