
// Чтобы данный скрипт срабатывал корректно, у кнопки по клику
// на которую открывается блок навигации должен быть id navBtn, 
// у блока навигации должен быть id mainNav и дополнительный класс nav-hidden
// на экранах разрешением меньше 900 пикс у класса nav-hidden
// должно быть свойство height: 0; 
// на экранах разрешением меньше 900 пикс блок навигации 
// должен размещаться абсолютом и у него должно быть свойство z-index

// для того чтобы блок навигации раскрывался и скрывался плавно, у него 
// должно быть свойство transition: height 2s;


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