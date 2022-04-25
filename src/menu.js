import menu from './Images/menu.png';

function createMenu(){
    const menuContainer = document.createElement('div');
    const menuImage = new Image();
    menuImage.src = menu;
    menuContainer.appendChild(menuImage);
    menuContainer.classList.add("menuContainer");
    return menuContainer;
}

export default function setMenu(){
    const content = document.querySelector('.content');
    const child = content.lastElementChild;
    content.removeChild(child);
    const menu = createMenu();
    content.appendChild(menu);
}