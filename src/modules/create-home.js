import clockImg from "../images/Clock.svg";
import globeImg from "../images/Globe.svg";
import cuisineImg from "../images/Cuisine.svg";
import star1 from "../images/1-Star.svg";
import star2 from "../images/2-Stars.svg";
import star3 from "../images/3-Stars.svg";
import star4 from "../images/4-Stars.svg";
import star5 from "../images/5-Stars.svg";

import { build as buildElement } from "./element-manipulator.js";

// Initial greeting in home page
function buildHomeGreeting() {
    const greetingCont = buildElement("div", "greeting-cont");

    const header = buildElement("h1", "home-title");

    const transparentText = buildElement("span", "transparent-text");
    transparentText.textContent = "Dreams";

    const gradientText = buildElement("span", "gradient-text");
    gradientText.textContent = "Reality";

    const lineBreak = document.createElement("br");

    header.appendChild(document.createTextNode("Make Your"));
    header.appendChild(lineBreak);
    header.appendChild(document.createTextNode("Culinary "));
    header.appendChild(transparentText);
    header.appendChild(lineBreak.cloneNode());
    header.appendChild(document.createTextNode(" a "))
    header.appendChild(gradientText);
    
    greetingCont.appendChild(header);

    return greetingCont;
}

// Book a table section
function buildHomeOrder() {
    const orderCont = buildElement("div", "order-cont");

    const orderHeader = buildElement("h3", "order-text");
    orderHeader.textContent = "Book a table now and get an appetizer on the house";

    const buttonCont = buildElement("div", "order-button-cont");

    const onlineButton = buildElement("button", "order-button", "online-button");
    onlineButton.textContent = "Book Online";

    const callButton = buildElement("button", "order-button", "call-button");
    callButton.textContent = "Call Us";

    buttonCont.appendChild(onlineButton);
    buttonCont.appendChild(callButton);

    orderCont.appendChild(orderHeader);
    orderCont.appendChild(buttonCont);

    return orderCont;
}

// Each individual block
function buildIntroBlock(title, sentence1, sentence2, imgPath) {
    const blockCont = buildElement("div", "introduction-block");

    const blockTitle = buildElement("h3", "block-title");
    blockTitle.textContent = title;

    const blockText = buildElement("p", "block-text");

    const initialSubHead = buildElement("span", "large-text");
    initialSubHead.textContent = "The Restaurant ";

    const sentence1Span = document.createElement("span");
    sentence1Span.textContent = sentence1;

    const sentence2Span = document.createElement("span");
    sentence2Span.textContent = sentence2;

    const lineBreak = document.createElement("br");

    blockText.appendChild(initialSubHead);
    blockText.appendChild(sentence1Span);
    blockText.appendChild(lineBreak);
    blockText.appendChild(sentence2Span);

    const blockImg = buildElement("img", "block-img");
    blockImg.src = imgPath;

    blockCont.appendChild(blockTitle);
    blockCont.appendChild(blockText);
    blockCont.appendChild(blockImg);

    return blockCont;
}

// The entire introduction container including the blocks themselves
function buildIntroductionCont() {
    const introCont = buildElement("div", "introduction-cont");

    introCont.appendChild(buildIntroBlock("International",
        "is open in over 50 countries and in all continents!",
        "Yes, even in Antarctica!",
        globeImg
    ));

    introCont.appendChild(buildIntroBlock("Massive Cuisine",
        "serves a large variety of cuisines.",
        "From the east to the west, north to the south, you can find almost everything!",
        cuisineImg
    ));

    introCont.appendChild(buildIntroBlock("Flexible Hours",
        "Is open 20 hours a day 7 days a week.",
        "No need to worry about fitting a visit in your schedule!",
        clockImg
    ));

    return introCont;
}


function buildReview(name, rating, review) {
    const reviewCont = buildElement("div", "review");

    const reviewerCont = buildElement("div", "reviewer");
    reviewerCont.textContent = name;

    const ratingCont = buildElement("div", "rating");

    const ratingImg = document.createElement("img");
    switch (rating) {
        case "5":
            ratingImg.src = star5;
            ratingImg.alt = "5 Stars";
            break;

        case "4":
            ratingImg.src = star4;
            ratingImg.alt = "4 Stars";
            break;

        case "3":
            ratingImg.src = star3;
            ratingImg.alt = "3 Stars";
            break;

        case "2":
            ratingImg.src = star2;
            ratingImg.alt = "2 Stars";
            break;
        
        case "1":
            ratingImg.src = star1;
            ratingImg.alt = "1 Stars";
            break;
    }
    
    ratingCont.appendChild(ratingImg);

    const reviewContent = buildElement("div", "review-text");
    reviewContent.textContent = '"' + review + '"';

    reviewCont.appendChild(reviewerCont);
    reviewCont.appendChild(ratingCont);
    reviewCont.appendChild(reviewContent);

    return reviewCont;
}

function buildReviewsCont() {
    const reviewsCont = buildElement("div", "reviews-cont");

    // Suggested review character soft-cap: 50
    reviewsCont.appendChild(buildReview(
        "Joanne Metcalf",
        "5",
        "Delicious meal, friendly staff, great atmosphere. Highly recommend!"
    ));

    reviewsCont.appendChild(buildReview(
        "William Vasquez",
        "5",
        "Great food, quick service. Will return!"
    ));

    reviewsCont.appendChild(buildReview(
        "Henry Morgan",
        "5",
        "Amazing food, the flavors were amazing! A top-notch dining choice."
    ));

    return reviewsCont;
}

export function buildHomeCont() {
    const homeTitleCont = buildElement("div", "home-title-cont");
    
    homeTitleCont.appendChild(buildHomeGreeting());
    homeTitleCont.appendChild(buildHomeOrder());

    const introductionCont = buildIntroductionCont();

    const reviewsCont = buildReviewsCont();

    return { title: homeTitleCont, introduction: introductionCont, reviews: reviewsCont};
}