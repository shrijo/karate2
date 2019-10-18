// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});

function toggleMenu(wrapper){

  document.querySelector('.heroSlider').classList.toggle("activeMenuPosition");
  document.querySelector('.contentSection').classList.toggle("activeMenuPosition");

  wrapper.classList.add("second");

//    document.querySelector('.menuItemProjects').style.transform = 'translateY(0px)';
//    document.querySelector('.menuItemStudio').style.transform = 'translateY(0px)';

//    document.querySelector('.menuItemProjects').style.transform = 'translateY(-20px)';
//    document.querySelector('.menuItemStudio').style.transform = 'translateY(-20px)';

}
