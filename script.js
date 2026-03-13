const yesBtn = document.getElementById('yes');
const noBtn = document.getElementById('no');
const screen1 = document.getElementById('screen1');
const screen2 = document.getElementById('screen2');

yesBtn.addEventListener('click', () => {
  screen1.style.display = 'none';
  screen2.style.display = 'flex';
});

noBtn.addEventListener('click', () => {
  // يخلي الزر No يختفي ويترك Yes
  noBtn.style.display = 'none';
});
