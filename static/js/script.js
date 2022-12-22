function navToggle() {

    let navBtn = document.getElementById('navBtn');
    let mainNav = document.getElementById('mainNav');
   
    navBtn.onclick = function () {  
     let heightNav = mainNav.firstElementChild.offsetHeight;  
     if (mainNav.classList.contains('nav-hidden')) {
      mainNav.classList.remove('nav-hidden');
      mainNav.style.height = heightNav + 'px';
     } else {
      mainNav.classList.add('nav-hidden');
      mainNav.style.height = 0;
     }
    }
   
    window.addEventListener("resize", resizeHandler, false);
   
    function resizeHandler() {
     let heightNav = mainNav.firstElementChild.offsetHeight;
     if (document.documentElement.clientWidth >= 900) {
      mainNav.style.height = 'auto';
     } else {
      if (mainNav.classList.contains('nav-hidden')) {
       mainNav.style.height = 0;
      } else {
       mainNav.style.height = heightNav + 'px';
      }
     }
    }
   
   }
   
   navToggle();