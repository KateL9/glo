//Menu
const toggleMenu = () => {
    const menu = document.querySelector("menu");

    const handlerMenu = () => {
        menu.classList.toggle("active-menu");
    };

    document.addEventListener("click", event => {
        const target = event.target;

        if (target.closest("li>a")) {
            handlerMenu();
        }
        if (
            target.closest(".menu") ||
            target.closest(".close-btn") ||
            (!target.closest(".active-menu") &&
                menu.classList.contains("active-menu"))
        ) {
            handlerMenu();
        }
    });
};

export default toggleMenu;