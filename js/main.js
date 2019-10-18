// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});

var menuPosition = "About";

function checkScroll(wrapper){
  console.log();
  if(wrapper.scrollTop >= document.querySelector('.contentSection').offsetTop){
    document.querySelector('.menuItemProjects').style.transform = 'translateY(0px)';
    document.querySelector('.menuItemStudio').style.transform = 'translateY(0px)';
  } else if(wrapper.scrollTop == 0){
    document.querySelector('.menuItemProjects').style.transform = 'translateY(-20px)';
    document.querySelector('.menuItemStudio').style.transform = 'translateY(-20px)';
  }
}
