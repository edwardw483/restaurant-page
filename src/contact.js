function createContact(){
    //text in contact information
    const contactContainer = document.createElement('div');
    const contactPhone = document.createElement('p');
    contactPhone.innerHTML = ("📞 123 456 789");
    const contactAddress = document.createElement('p');
    contactAddress.innerHTML = ("🏠 256 Philip Street, Waterloo, ON");

    //map embedding
    const mapResponsive = document.createElement('div');
    const mapEmbed = document.createElement('iframe');
    mapEmbed.setAttribute("src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.7443708729993!2d-80.53263471477895!3d43.472015326696166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882bf4073db305fb%3A0xd1c941c0baf0fdb5!2sKEN%20Sushi%20House%20Phillip%20Square!5e0!3m2!1sen!2sca!4v1650926583062!5m2!1sen!2sca");
    //mapEmbed.setAttribute("src", "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d49683.37568651638!2d-77.0365184!3d38.8962904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1385703808650");
    mapEmbed.setAttribute("width", "100%");
    mapEmbed.setAttribute("height", "100%");
    mapEmbed.setAttribute("frameborder", "0")
    mapEmbed.setAttribute("style", "border:0;");
    mapEmbed.setAttribute("allowfullscreen", "");
    mapEmbed.setAttribute("loading", "lazy");
    //mapEmbed.setAttribute("referrerpolicy", "no-referrer-when-downgrade");
    mapResponsive.appendChild(mapEmbed);
    contactContainer.appendChild(contactPhone);
    contactContainer.appendChild(contactAddress);
    contactContainer.appendChild(mapResponsive);
    //contactContainer.appendChild(mapEmbed);

    //class changes
    mapResponsive.classList.add("responsive");
    contactContainer.classList.add("mainContainer");
    return contactContainer;
}

export default function setContact(){
    const content = document.querySelector('.content');
    const child = content.lastElementChild;
    content.removeChild(child);
    const menu = createContact();
    content.appendChild(menu);
}