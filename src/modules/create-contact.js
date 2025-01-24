import locationImg from "../images/Location.svg";
import callImg from "../images/Phone.svg";
import emailImg from "../images/Email.svg";
import businessImg from "../images/Briefcase.svg";

import { build as buildElement} from "./element-manipulator.js";


function buildContactTitle() {
    const titleCont = buildElement("div", "contact-title");

    const titleText = buildElement("h1", "contact-title-text");

    const underlinedText = buildElement("span", "text-underline");
    underlinedText.textContent = "Contact Us";

    titleText.appendChild(underlinedText);

    const titleInfo = buildElement("p", "contact-title-info");

    const lineBreak = document.createElement("br");

    titleInfo.appendChild(document.createTextNode("Have a question or need to make a reservation?"));
    titleInfo.appendChild(lineBreak);
    titleInfo.appendChild(document.createTextNode("Whether it's a special dinner or a menu inquiry, we're happy to assist!"));
    titleInfo.appendChild(lineBreak.cloneNode());
    titleInfo.appendChild(document.createTextNode("Reach out to us via phone or email."));
    titleInfo.appendChild(lineBreak.cloneNode());
    titleInfo.appendChild(document.createTextNode("We're here to help and can't wait to serve you soon!"));

    titleCont.appendChild(titleText);
    titleCont.appendChild(titleInfo);

    return titleCont;
}


function buildMainOffice(address) {
    const optionCont = buildElement("div", "contact-option", "location");

    const optionImg = buildElement("img", "contact-img");
    optionImg.src = locationImg;

    const optionTitle = buildElement("h3", "contact-title");
    optionTitle.textContent = "Our Main Office";

    const optionInfo = buildElement("p", "contact-info");
    optionInfo.textContent = address;


    optionCont.appendChild(optionImg);
    optionCont.appendChild(optionTitle);
    optionCont.appendChild(optionInfo);

    return optionCont;
}

function buildMainPhone(main, international) {
    const optionCont = buildElement("div", "contact-option", "call");

    const optionImg = buildElement("img", "contact-img");
    optionImg.src = callImg;

    const optionTitle = buildElement("h3", "contact-title");
    optionTitle.textContent = "Call Us";

    const optionInfo = buildElement("p", "contact-info");

    const info1 = buildElement("span", "emphasize-text");
    info1.textContent = "Main Office Telephone: ";

    const info2 = buildElement("span", "emphasize-text");
    info2.textContent = "International Telephone: ";

    const lineBreak = document.createElement("br");

    optionInfo.appendChild(info1);
    optionInfo.appendChild(document.createTextNode(main));
    optionInfo.appendChild(lineBreak);
    optionInfo.appendChild(info2);
    optionInfo.appendChild(document.createTextNode(international));
    optionInfo.appendChild(lineBreak.cloneNode());

    optionCont.appendChild(optionImg);
    optionCont.appendChild(optionTitle);
    optionCont.appendChild(optionInfo);

    return optionCont;
}

function buildEmails(support, reservation, information) {
    const optionCont = buildElement("div", "contact-option", "email");

    const optionImg = buildElement("img", "contact-img");
    optionImg.src = emailImg;

    const optionTitle = buildElement("h3", "contact-title");
    optionTitle.textContent = "Email";

    const optionInfo = buildElement("p", "contact-info");

    const info1 = buildElement("span", "emphasize-text");
    info1.textContent = "Customer Service: ";

    const info2 = buildElement("span", "emphasize-text");
    info2.textContent = "Reservations: ";

    const info3 = buildElement("span", "emphasize-text");
    info3.textContent = "General Information: ";

    const lineBreak = document.createElement("br");

    optionInfo.appendChild(info1);
    optionInfo.appendChild(document.createTextNode(support));
    optionInfo.appendChild(lineBreak);
    optionInfo.appendChild(info2);
    optionInfo.appendChild(document.createTextNode(reservation));
    optionInfo.appendChild(lineBreak.cloneNode());
    optionInfo.appendChild(info3);
    optionInfo.appendChild(document.createTextNode(information));
    optionInfo.appendChild(lineBreak.cloneNode());

    optionCont.appendChild(optionImg);
    optionCont.appendChild(optionTitle);
    optionCont.appendChild(optionInfo);

    return optionCont;
}

function buildBusinessInquiries(phone, email) {
    const optionCont = buildElement("div", "contact-option", "business");

    const optionImg = buildElement("img", "contact-img");
    optionImg.src = businessImg;

    const optionTitle = buildElement("h3", "contact-title");
    optionTitle.textContent = "Business Inquiries";

    const optionInfo = buildElement("p", "contact-info")
    
    const info1 = buildElement("span", "emphasize-text");
    info1.textContent = "Phone Number: ";

    const info2 = buildElement("span", "emphasize-text");
    info2.textContent = "Email: ";

    const lineBreak = document.createElement("br");

    optionInfo.appendChild(info1);
    optionInfo.appendChild(document.createTextNode(phone));
    optionInfo.appendChild(lineBreak);
    optionInfo.appendChild(info2);
    optionInfo.appendChild(document.createTextNode(email));
    optionInfo.appendChild(lineBreak.cloneNode());

    optionCont.appendChild(optionImg);
    optionCont.appendChild(optionTitle);
    optionCont.appendChild(optionInfo);

    return optionCont;
}

function buildContactOptions() {
    const optionsCont = buildElement("div", "contact-options-cont");

    optionsCont.appendChild(buildMainOffice(
        "255 Mayflower Dr. Henrico, VA 23228"
    ));
    optionsCont.appendChild(buildMainPhone(
        "804-495-8554", "+1-804-495-1597"
    ));
    optionsCont.appendChild(buildEmails(
        "support@therestaurant.com",
        "reservations@therestaurant.com",
        "info@therestaurant.com"
    ));
    optionsCont.appendChild(buildBusinessInquiries(
        "+1-804-495-1234",
        "business@therestaurant.com"
    ));

    return optionsCont;
}

export function buildContactCont() {
    const titleCont = buildContactTitle();

    const optionsCont = buildContactOptions();

    return { title: titleCont, options: optionsCont};
}