const dialog1 = document.querySelector('#dialog1');
const dialog2 = document.querySelector('#dialog2');

const showDialog1 = () => {
  dialog1.style.visibility = 'visible';
  dialog1.style.opacity = 1;
}
const hideDialog1 = () => {
  dialog1.style.visibility = 'hidden';
  dialog1.style.opacity = 0;
}

const showDialog2 = () => {
  dialog2.style.visibility = 'visible';
  dialog2.style.opacity = 1;
}
const hideDialog2 = () => {
  dialog2.style.visibility = 'hidden';
  dialog2.style.opacity = 0;
}
