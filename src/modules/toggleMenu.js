   //Menu
   const toggleMenu = () => {
       const btnMenu = document.querySelector('.menu'),
           menu = document.querySelector('menu');
       const handlerMenu = () => {
           if (!menu.style.transform || menu.style.transform === `translate(-100%)`) {
               menu.style.transform = `translate(0)`;
           } else {
               menu.style.transform = `translate(-100%)`;
           }
       };

       btnMenu.addEventListener('click', handlerMenu);

       menu.addEventListener('click', (event) => {
           let target = event.target;
           if (
               target.classList.contains('close-btn') ||
               target.closest('.menu') ||
               target.closest('a')
           ) menu.style.transform = `translate(-100%)`;
       })
   };

   export default toggleMenu;