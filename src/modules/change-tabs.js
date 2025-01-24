import * as elementManipulator from "./element-manipulator.js";
import * as createHome from "./create-home.js";
import * as createContact from "./create-contact.js";
import * as createMenu from "./create-menu.js";

function loadHomePage() {
    // Home page content
    const homeObject = createHome.buildHomeCont();

    const homeCont = document.querySelector(".home-cont");
    homeCont.appendChild(homeObject.title);
    homeCont.appendChild(homeObject.introduction);
    homeCont.appendChild(homeObject.reviews);

    // Mark the "Home" tab
    document.querySelector(".home-button").classList.add("active");
}

function loadContactPage() {
    // Contact page content
    const contactObject = createContact.buildContactCont();

    const contactCont = document.querySelector(".contact-cont");
    contactCont.appendChild(contactObject.title);
    contactCont.appendChild(contactObject.options);
}

function loadMenuPage() {
    // Menu page content
    const menuObject = createMenu.buildMenuCont();

    const menuCont = document.querySelector(".menu-cont");
    menuCont.appendChild(menuObject.title);
    menuCont.appendChild(menuObject.items);
}

export function initialPageLoad() {
    loadHomePage();
    loadContactPage();
    loadMenuPage();
}

export function markTab(tabButton) {
    const navCont = document.querySelector(".nav-cont");
    const buttonsArray = Array.from(navCont.children);
    const buttonCont = tabButton.parentElement;

    // Ensure no tab is marked before marking the clicked one
    for (let i in buttonsArray) {
        buttonsArray[i].children[0].classList.remove("active");
    }

    // Mark the clicked tab
    tabButton.classList.add("active");
}

export function changeToTab(tab) {
    
    let selectedTab;
    switch (tab) {
        case "home-button":
            selectedTab = "home-cont";
            break;
        case "menu-button":
            selectedTab = "menu-cont";
            break;
        case "contact-button":
            selectedTab = "contact-cont";
            break;
    }
    const contentContChildren = Array.from(document.querySelector("#content").children);

    // Make sure other tabs are hidden
    for (let index in contentContChildren) {
        // Hide what isn't hidden
        if (contentContChildren[index].classList[1] != "display-hide") {
            elementManipulator.hide(contentContChildren[index]);
        }
        // Show the selected tab
        if (contentContChildren[index].classList[0] == selectedTab) {
            elementManipulator.show(contentContChildren[index]);
        }
    }
}