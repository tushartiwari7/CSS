const dialog1 = document.querySelector('#dialog1');
const dialog2 = document.querySelector('#dialog2');
const dialog3 = document.querySelector('#dialog3');

const visible = (dialog) => {
  dialog.style.visibility = 'visible';
  dialog.style.opacity = 1;
}

const hide = (dialog) => {
  dialog.style.visibility = 'hidden';
  dialog.style.opacity = 0;
}

const showDialog1 = () => visible(dialog1);
const hideDialog1 = () => hide(dialog1);

const showDialog2 = () => visible(dialog2);
const hideDialog2 = () => hide(dialog2);

const showDialog3 = () => visible(dialog3);
const hideDialog3 = () => hide(dialog3);
