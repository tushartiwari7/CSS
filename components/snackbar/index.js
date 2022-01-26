const allsnackbarEl = document.querySelectorAll('.snackbar-wrapper');


const toggleSnackbar = (id) => {
  allsnackbarEl.forEach(snackbars => {
    snackbars.style.visibility = 'hidden';
  });
  
  const snackbar = document.getElementById(id);
  snackbar.style.visibility = 'visible';
}

const closeSnackbar = (id) => {
  const snackbar = document.getElementById(id);
  snackbar.style.visibility = 'hidden';
}