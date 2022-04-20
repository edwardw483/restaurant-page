import _ from 'lodash';
import './style.css';
import background from './Images/backgroundSushi.jpeg';
//import printMe from './contact.js'
/*
function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');
  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpacks'], ' ');

  return element;
}

function pageLoad() {
  const element = document.createElement('h1');
  element.innerHTML = _.join(['Stunning', 'Sooshi'], ' ');
  const btn = document.createElement('button');
  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;
  element.appendChild(btn);
  return element;
}
  document.body.appendChild(component());
  document.body.appendChild(pageLoad());
*/
function createHeader(){
    const headerContainer = document.createElement('div');
    //restaurant and site name
    const siteName = document.createElement('h1');
    siteName.innerHTML = ("Roll Call");
    
    //list of links
    const headerList = document.createElement('nav');
    //creating the header's HTML elements
    const home = document.createElement('li');
    const homeLink = document.createElement('a');
    homeLink.innerHTML = ("Home");
    homeLink.setAttribute("href", "./index.html");
    home.appendChild(homeLink);
    headerList.appendChild(home);

    const menu = document.createElement('li');
    const menuLink = document.createElement('a');
    menuLink.innerHTML = ("Menu");
    menuLink.setAttribute("href", "./index.html");
    menu.appendChild(menuLink);
    headerList.appendChild(menu);

    const contact = document.createElement('li');
    const contactLink = document.createElement('a');
    contactLink.innerHTML = ("Contact");
    contactLink.setAttribute("href", "./index.html");
    contact.appendChild(contactLink);
    headerList.appendChild(contact);

    //add classes for CSS
    headerList.classList.add("header-list");
    headerContainer.classList.add("headerContainer");

    //
    headerContainer.appendChild(siteName);
    headerContainer.appendChild(headerList);
    return headerContainer;
}
/*
function setBackground(){
  const backgroundImage = new Image();
  backgroundImage.src = background;
  return backgroundImage;
}
*/
//document.body.setAttribute.backgroundImage = setBackground;
document.body.appendChild(createHeader());