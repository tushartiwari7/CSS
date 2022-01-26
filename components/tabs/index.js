const allTabs = document.querySelectorAll('.tab-item');

const tabClick = (el) => {
  // remove highlinghting from all tabs and then add highlighting to clicked tab
  allTabs.forEach(tab => tab.classList.remove('highlight-bottom-border'));
  el.classList.add('highlight-bottom-border');
}